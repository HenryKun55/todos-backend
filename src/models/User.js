const { Schema, model } = require('mongoose')

const UserSchema = new Schema(
    {
        username: { 
            type: String, 
            required: true,
        },
        password: {
            type: String, 
            required: true 
        },
        todos: [
            {
                type: Schema.Types.ObjectId,
                ref: "ToDo"
            }
        ]
    }, 
    {
        timestamps: true
    }
)

module.exports = model('User', UserSchema)