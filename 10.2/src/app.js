const path = require('path')
const express = require('express')
const hbs = require('hbs')
const axios=require('axios')
let joke=''

// fetching using axios
axios.get(`https://geek-jokes.sameerkumar.website/api?format=json`).then((data) => {
    console.log(`\nThis Data was fetched using axios`);
    console.log(`The joke is: ${data.data.joke}\n`);
    joke=data.data.joke
}).catch((error)=>{
    console.log('\nERROR!!! Can not fetch using axios\n', error)
});

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Joke',
        name: 'Hope Mashal',
        joke: joke
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Hope Mashal'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Hope Mashal'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Hope Mashal',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Hope Mashal',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})