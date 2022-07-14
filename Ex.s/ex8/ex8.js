const https = require('https');
const chalk=require('chalk'); 

let url='https://geek-jokes.sameerkumar.website/api?format=json';

const request = https.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
      data = data + chunk.toString()
  })

  response.on('end', () => {
      const body = JSON.parse(data)
      console.log(chalk.green.bold('The joke is: '),chalk.green(body.joke))
  })

})

request.on('error', (error) => {
  console.log(chalk.red.bold('An error'), error)
})

request.end()