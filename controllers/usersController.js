const fs = require('fs')

const users = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/users.json`))

const getUsers = (req, res) => {
    return res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

const createUser = (req, res) => {

    const newId = users[users.length - 1].id + 1;
    const newUser = Object.assign({ id: newId }, req.body);

    return res.status(201).json({
        status: 'success',
        data: {
            user: newUser
        }
    })
}

const updatedPassword = (req, res) => {
    const id = req.params.id * 1;
    const { password, newPassword } = req.body;

    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(400).json({
            status: 'Fail',
            message: 'User not found'
        })
    };

    if (password !== user.password) {
        return res.status(400).json({
            status: 'Fail',
            message: 'Password Invalid'
        })
    }

    user.password = newPassword


    return res.status(200).json({
        status: 'success',
        message: 'Password updated'
    })
}

const deleteUser = (req, res) => {
    const id = req.params.id * 1
    const user = users.find((user) => user.id === id)

    if (!user) {
        return res.status(404).json({
            status: 'Fail',
            message: 'User not found'
        })
    }

    users.splice(user, 1)

    return res.status(200).json({
        status: 'success',
        message: 'User removed'
    })
}

module.exports = { getUsers, createUser, updatedPassword, deleteUser }