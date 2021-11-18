__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})
router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

module.exports = router
