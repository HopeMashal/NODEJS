const axios = require("axios");
const request = require("request");
const https=require('https')
const chalk=require('chalk')

// fetching using axios
axios.get(`https://geek-jokes.sameerkumar.website/api?format=json`).then((data) => {
    console.log(chalk.inverse(`\nThis Data was fetched using axios`));
    console.log(chalk.green(`The joke is: ${data.data.joke}\n`));
}).catch((error)=>{
    console.log(chalk.red.bold('\nERROR!!! Can not fetch using axios\n'), error)
});

// fetching using request
request(
    { url: `https://geek-jokes.sameerkumar.website/api?format=json`, json: true },
    (error, response) => {
      if(error) console.log(chalk.red.bold('\nERROR!!! Can not fetch using request\n'), error)
      else{
        console.log(chalk.inverse(`\nThis Data was fetched using request`));
        console.log(chalk.green(`The joke is: ${response.body.joke}\n`));
      }
    }
);

// fetching using https method
const httpsRequest = https.request('https://geek-jokes.sameerkumar.website/api?format=json', (response) => {
  let data = ''
  response.on('data', (chunk) => {
      data = data + chunk.toString()
  })
  response.on('end', () => {
      const body = JSON.parse(data)
      console.log(chalk.inverse(`\nThis Data was fetched using https request`));
      console.log(chalk.green(`The joke is: ${body.joke}\n`))
  })
})
httpsRequest.on('error', (error) => {
  console.log(chalk.red.bold('\nERROR!!! Can not fetch using https request\n'), error)
})
httpsRequest.end()