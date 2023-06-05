const Users = require("../models/users");

const createUserService = async (name, email, password) => {
    const createUser = new Users({
        name: name,
        email: email,
        password: password
    });
    await createUser.save();
    return createUser
}

module.exports = { createUserService }