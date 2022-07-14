const yargs = require('yargs');
const num = process.argv.slice(2);

yargs.command({
    command: "add",
    describe: "Add two numbers",
    handler: function () {
      console.log(+num[1] + +num[2]);
    },
});

yargs.command({
    command: "sub",
    describe: "Subtract two numbers",
    handler: function () {
      console.log(+num[1] - +num[2]);
    },
});

yargs.command({
    command: "mult",
    describe: "Multiply two numbers",
    handler: function () {
      console.log(+num[1] * +num[2]);
    },
});

yargs.command({
    command: "pow",
    describe: "Power a number",
    handler: function () {
      console.log(Math.pow(+num[1], 2));
    },
});

yargs.parse();