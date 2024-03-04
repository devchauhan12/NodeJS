const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const players = [
    { name: "Kashyap", email: "kashyap@gmail.com", password: "465", gender: "Male", games: "Cricket", branch: "RnW-1", address: "Ahmedabad" },
    { name: "Vikas", email: "Vikas@gmail.com", password: "798", gender: "Male", games: "Cricket, Badminton", branch: "RnW-5", address: "Surat" },
    { name: "Om", email: "Om@gmail.com", password: "132", gender: "Male", games: "Football", branch: "RnW-6", address: "Jodhpur" },
]


app.get('/', (req, res) => {
    res.render('./Pages/home')
})

app.get('/list', (req, res) => {
    res.render('./Pages/index', { players: players })
})

app.get('/addUser', (req, res) => {
    res.render('./Pages/addUser')
})

app.post('/addplayer', (req, res) => {
    players.push(req.body);
    res.redirect('/list');
    // console.log(req.body);
})

app.get('/deletePlayer/:id', (req, res) => {
    var id = req.params.id
    players.splice(id, 1)
    res.redirect('/list')
})

app.get('/editPlayer/:id', (req, res) => {
    var id = req.params.id
    var update = players[id]
    res.render('./Pages/editForm', { player: update })
})

app.post('/editPlayer/:id', (req, res) => {
    var id = req.params.id
    players[id] = req.body
    res.redirect('/list')
})

app.listen(8000, () => {
    console.log('Server Start');
})