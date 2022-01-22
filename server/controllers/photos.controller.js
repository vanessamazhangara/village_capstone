const sequelize = require("../db/config")

module.exports = {
    getAll: async (req, res) => {
        const photos = await sequelize.query(`
        SELECT * FROM photos`);
        res.status(200).json(photos[0])
    },

    createPhoto: async (req, res) => {
        // const { id } = req.params;
        const {imageUrl, id } = req.body;
        const newPhoto = await sequelize.query(`
        INSERT INTO photos (image_url, photographer_id)
        VALUES (
        '${imageUrl}',
        ${id})`);
        res.status(201).json({"message": "photo uploaded"})
    },

    getPhoto: async (req, res) => {
        const photos = await sequelize.query(`
        SELECT * FROM photos WHERE photgrapher_id = ${req.params.id}`);
        res.status(200).json(photos)
    },

    portfolio: async (req, res) => {
        const portfolio = await sequelize.query(`
        SELECT image_url, photographer_id
        FROM photos
        INNER JOIN photographers ON photographer_id = ${req.params.id}`);
        res.status(200).json(portfolio);
    },



}