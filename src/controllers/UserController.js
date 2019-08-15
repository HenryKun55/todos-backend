const User = require('../models/User')

class UserController {
    async store(req, res) {
        const user = await User.create(req.body)
        return res.json(user)
    }

    async login(req, res){
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })

        res.json(user)
    }

    async get(req, res){
        const user = await User.findById(req.body._id)

        res.json(user)
    }

    async show(req, res) {
        const user = await User.findById(req.params.id).populate(
            {
                path: 'todos',
                options: {
                    sort: {
                        createdAt: -1
                    }
                }
            }
        )
        return res.json(user)
    }
}

module.exports = new UserController()

