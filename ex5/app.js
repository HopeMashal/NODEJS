const yargs = require("yargs");
const users = require("./users");

yargs.command({
    command: "create",
    describe: "Create new user",
    builder: {
        name: {
            describe: "The user name",
            demandOption: true,
            type: "string",
        },
        email: {
            describe: "The user email",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        users.create(argv.name, argv.email);
    },
});

yargs.command({
    command: "read",
    describe: "Read user",
    builder: {
        id: {
            describe: "The user id",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        users.read(argv.id);
    },
});

yargs.command({
    command: "update",
    describe: "Update user",
    builder: {
        id: {
            describe: "The user id",
            demandOption: true,
            type: "string",
        },
        name: {
            describe: "The user name",
            demandOption: true,
            type: "string",
        },
        email: {
            describe: "The user email",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        users.update(argv.id, argv.name, argv.email);
    },
});

yargs.command({
    command: "delete",
    describe: "Delete user",
    builder: {
        id: {
            describe: "The user id",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        users.delete(argv.id);
    },
});

yargs.parse();