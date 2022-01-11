const uniqid = require("uniqid");
const fs = require("fs");
const chalk = require("chalk")

const createUser = (name, email) => {
    const users = loadUsers();
    users.push({
        id: uniqid(),
        name: name,
        email: email,
    });
    console.log(chalk.green.bold("New user created!"));
    saveUsers(users);
};

const readUser = (id) => {
    const users = loadUsers();
    const user = users.find((user) => user.id === id);
    if (user) {
        console.log(chalk.inverse.bold("ID: "), user.id);
        console.log(chalk.inverse.bold("Name: "), user.name);
        console.log(chalk.inverse.bold("Email: "), user.email);
    } else {
        console.log(chalk.red.bold("User not found"));
    }
};

const updateUser = (id, name, email) => {
    const users = loadUsers();
    const filteredUsers = users.filter((user) => user.id !== id);
    if (users.length > filteredUsers.length) {
        filteredUsers.push({
            id: id,
            name: name,
            email: email,
        });
        saveUsers(filteredUsers);
        console.log(chalk.green.bold("User updated!"));
    } else {
        console.log(chalk.red.bold("User not found"));
    }
};

const deleteUser = (id) => {
    const users = loadUsers();
    const usersToKeep = users.filter((user) => user.id !== id);
    if (users.length > usersToKeep.length) {
        console.log(chalk.red.bold("User removed!"));
        saveUsers(usersToKeep);
    } else {
        console.log(chalk.red.bold("User not found"));
    }
};

const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync("users.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync("users.json", dataJSON);
};

module.exports = {
    create: createUser,
    read: readUser,
    update: updateUser,
    delete: deleteUser,
};