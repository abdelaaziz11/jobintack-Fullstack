import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '..', 'data', 'products.json');

async function readProducts() {
  const raw = await fs.readFile(dataPath, 'utf8');
  return JSON.parse(raw);
}

export async function queryProducts(options = {}) {
  const { category, minPrice, maxPrice, sort } = options;
  let products = await readProducts();

  if (category) products = products.filter(p => p.category === category);
  if (minPrice !== undefined) products = products.filter(p => p.price >= Number(minPrice));
  if (maxPrice !== undefined) products = products.filter(p => p.price <= Number(maxPrice));

  if (sort === 'asc' || sort === 'desc') {
    products.sort((a, b) => (sort === 'asc' ? a.price - b.price : b.price - a.price));
  }

  return products;
}
