const sequelize = require("../db/config")

module.exports = {
    getTags: async (req, res) => {
        const tags = await sequelize.query(`
        SELECT * FROM tags`);
        res.status(200).json(tags[0])
    },
}