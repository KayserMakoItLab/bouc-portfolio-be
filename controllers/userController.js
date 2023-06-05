const { createUserService } = require("../services/userService");

const createUserController = async (req, res) => {
    const {name, email, password} = req?.body;
    try{
        const createUser = await createUserService(name, email, password)
        console.log('createUser', createUser);
        res.send('Successfully created!');
        return 'Successfully created!';
    } catch (err){
        console.log('err==>', err);
        return err
    }
}

module.exports = { createUserController }