const User = require('../models/User')

class UserController {
    async store(req, res) {
        const user = await User.create(req.body)
        return res.json(user)
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

