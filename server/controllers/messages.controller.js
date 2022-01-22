const sequelize = require("../db/config")

module.exports = {
    createMessage: async (req, res) => {
        const {id} = req.params;
        const { message, email}  = req.body;
        const newMessage = await sequelize.query(`
        INSERT INTO messages (message, email, photographer_id)
        VALUES (
        '${message}',
        '${email}',
        ${id})`);
        res.status(201).json({"message": "message sent!"})
    },

    getMessages: async (req, res) => {
        const {id} = req.params;
        const messages = await sequelize.query(`
        SELECT * FROM messages WHERE photographer_id = ${id}`)
        res.json(messages)
    },
}