const sequelize = require("../db/config")

module.exports = {
    createMessage: async (req, res) => {
        const {photographerId} = req.params;
        let { message, email}  = req.body;
        // let updatedMessage = "";
        // for (let char of message ) {
        //     if(char === "'") {
        //         updatedMessage += "\'"
        //     } else {
        //         updatedMessage += char
        //     }
        // }
       
        const newMessage = await sequelize.query(`
        INSERT INTO messages (message, email, photographer_id)
        VALUES (
        '''${message}''',
        '${email}',
        ${photographerId})`);
        res.status(201).json({"message": "message sent!"})
    },

    getMessages: async (req, res) => {
        const {photographerId} = req.params;
        const messages = await sequelize.query(`
        SELECT * FROM messages WHERE photographer_id = ${photographerId}`)
        res.json(messages[0])
    },

    deleteMessage: async (req, res) => { //??? is this deleting specific id message?
        const {messageId} = req.params
        await sequelize.query(`
        DELETE FROM messages WHERE id = ${messageId}`);
        res.json({"message": "message deleted!"});
    },
}