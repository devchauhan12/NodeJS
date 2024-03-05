const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const employees = []

app.get('/', (req, res) => {
    res.render('../Pages/home')
})

app.get('/list', (req, res) => {
    res.render('../Pages/index', { employees: employees })
})

app.get('/addUser', (req, res) => {
    res.render('../Pages/addUser')
})

app.post('/addemployee', (req, res) => {
    employees.push(req.body);
    res.redirect('/list');
})

app.get('/deleteemployee/:id', (req, res) => {
    var id = req.params.id
    employees.splice(id, 1)
    res.redirect('/list')
})

app.get('/editemployee/:id', (req, res) => {
    var id = req.params.id
    var update = employees[id]
    res.render('../Pages/editForm', { employee: update })
})

app.post('/editemployee/:id', (req, res) => {
    var id = req.params.id
    employees[id] = req.body
    res.redirect('/list')
})

app.listen(3000, () => {
    console.log('Server Start');
})