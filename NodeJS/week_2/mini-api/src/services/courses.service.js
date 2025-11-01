// services/courses.service.js
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '..', 'data', 'data.json');

// read data from data.json file
async function readData() {
  const raw = await fs.readFile(dataPath, 'utf8');
  return JSON.parse(raw);
}

async function writeData(data) {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
}

export async function getAll({ page, limit }) {
  const data = await readData();
  if (!page || !limit) return data;

  const p = Number(page) || 1;
  const l = Number(limit) || 10;
  const start = (p - 1) * l;
  return data.slice(start, start + l);
}

export async function getById(id) {
  const data = await readData();
  return data.find((c) => c.id === Number(id));
}

export async function create(newCourse) {
  const data = await readData();
  const nextId = data.length ? Math.max(...data.map((d) => d.id)) + 1 : 1;
  const course = { id: nextId, ...newCourse };
  data.push(course);
  await writeData(data);
  return course;
}

export async function update(id, updatedFields) {
  const data = await readData();
  const idx = data.findIndex((c) => c.id === Number(id));
  if (idx === -1) return null;
  data[idx] = { ...data[idx], ...updatedFields };
  await writeData(data);
  return data[idx];
}

export async function remove(id) {
  const data = await readData();
  const newData = data.filter((c) => c.id !== Number(id));
  if (newData.length === data.length) return false;
  await writeData(newData);
  return true;
}
