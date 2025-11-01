import express from 'express';
import 'dotenv/config';
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.end("Hello world !")
})

const courses = [
    {id: 1, name: "course 1"},
    {id: 2, name: "course 2"},
    {id: 3, name: "course 3"},
    {id: 4, name: "course 4"},
];

//. get courses list
app.get('/api/courses', (req, res) => {
    res.send(courses);
})

// get cousres by id
app.get('/api/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(c => c.id === id);
    if (!course) return res.status(404).send('Course not found');
    res.send(course);
})


// get posts with set year and month , url checking http://localhost:4000/api/posts/2025/01?sortBy=name
app.get('/api/posts/:year/:month', (req, res) => {

    // Les paramètres de route (dans l’URL)
  console.log('Params:', req.params); // { year: '2025', month: '10' }

  // Les paramètres de requête (après le "?")
  console.log('Query:', req.query);   // { sortBy: 'date', author: 'brahim' }


    res.send({params: req.params, query: req.query})

})

/* 
const courses = [
  { id: 1, name: 'Node.js pour Débutants' },
  { id: 2, name: 'Express.js Avancé' },
  { id: 3, name: 'API REST en pratique' },
];


// we will use express property .get to respond to GET requests ( read a ressource from the server)

app.get('/', (req, res) => { res.send('hello from express');});
// the callback function is called Route handler 


//routing example to expose a list of courses
/* app.get('/api/courses', (req, res) => {
    res.send(["cours 1", "cours 2", "cours 3", "cours 4", "cours 5"]);
}); */

// serving course data from an array
/* app.get('/api/courses', (req, res) => { 
  res.send(courses);
}); */

/* // route with route parameter
app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id); 
  // to get the id sent in the url
});
// test with curl http://localhost:3000/api/courses/99
// it should return 99  */

/* app.get('/api/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);
  if (!course) {
    return res.status(404).send('Le cours avec l\'ID spécifié est introuvable.');
  }
  res.send(course);
}); */


// two route parameters: year and month
/* app.get('/api/posts/:year/:month', (req, res) => {
  //console.log('params', req.params);
  res.send(req.query); 
}); */
// test with curl http://localhost:3000/api/posts/2023/07

// http://localhost:3000/api/posts/2023/07?sortBy=year&order=asc
// it should return { sortBy: 'year', order: 'asc' } */


app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});
