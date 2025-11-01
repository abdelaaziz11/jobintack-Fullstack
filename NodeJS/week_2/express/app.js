import express from 'express';
import 'dotenv/config';
const app = express();

// middleware : Parses JSON data from the request body
app.use(express.json());

const PORT = process.env.PORT || 4000;

const users = [];

// Create users , callback function is a route handler (req, res) => {}
app.post('/api/users', (req, res) => {
    //console.log(req.body);
    const user = req.body;
    const findUserId = users.find((u) => u.id === user.id);
    if (findUserId) return res.status(400).send("User already exists !");

    // push user to users 
    users.push(user);
    res.json({message: `User ${req.body.name} added`, users})
});
// create users with id by default without put the id manuel
/*app.post('/api/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    users.push(user);
    // send message to the client user of created successful
    res.send({`User created successful! name ${req.body.name} and age ${req.body.age}`})
});*/

// Get all users
app.get('/api/users', (req, res) => {
    res.send(users);
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
    // transfer the id to integer using parseInt()
    const id = parseInt(req.params.id);
    const user = users.find((i) => i.id === id);
    if (!user) {
        return res.status(404).send('User not Found !');
    }
    res.send(user);
});

// Update users
app.put('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const {name, age} = req.body;
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return res.status(404).send('User not Found !');
    }
      // update the existing user

    users[userIndex] = {...users[userIndex], name, age};
    return res.status(200).send({massage: "User apdated !", user: users[userIndex]})
});

// Delete user by ID
app.delete('/api/users/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(x => x.id === id);
    if (userIndex === -1) return res.status(401).send("User not found !")
    // delete user using splice method by id
    users.splice(userIndex, 1)
    res.status(200).send("User deleted !");
});


// Listen server
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});
