const { Schema, model } = require('mongoose')

const ToDo = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        done: {
            type: Boolean,
            required: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = model("ToDo", ToDo)