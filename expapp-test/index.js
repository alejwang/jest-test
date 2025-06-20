const express= require('express');
const app = express();
const port = 3000;
const https = require('https');

function allTodos() {
    return [{
        id: 1,
        name: 'Finished writing a blogpost',
    }, {
        id: 2,
        name: 'Get pizza for dinner',
    }, {
        id: 3,
        name: 'Wake up at 7:30am',
    }, ]
}

app.get('/', (req, res) => {
    res.send({
        data: new Date(),
        message: 'Greetings!',
    });
});

app.get('/todo', (req, res) => {
    res.send(allTodos());
});

app.get('/todo/:id', (req, res) => {
    const todoId = Math.abs(req.params.id);
    let todos = allTodos();
    let todo = todos.find(t => t.id === todoId);
    res.send(todo);
});

app.get('/joke', (req, res) => {
    const url = "https://api.chucknorris.io/jokes/random";
    https.get(url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            res.send(data);
        });
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

module.exports = app; 