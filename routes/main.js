__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

router.get('/whatsapp/bot', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : 'Multi Prefix',
            nomorbot : '+6281255369681',
            namabot: 'Specstor',
            namaowner: 'Ryan'
        }
    }
    res.json(config)
})

module.exports = router
