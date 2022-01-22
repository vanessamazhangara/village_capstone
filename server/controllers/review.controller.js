const sequelize = require("../db/config")

module.exports = {
    createReview: async (req,res) => {
        const {id} = req.params
        const {review, title, name} = req.body
        const newReview = await sequelize.query(`
        INSERT INTO reviews(review, title, name, photographer_id)
        VALUES (
            '${review}',
            '${title}',
            '${name}',
            ${id}
        )`)
        res.json({"message": "review created!"})
    },

    getReviews: async (req, res) => {
    
        const reviews = await sequelize.query(`
        SELECT * FROM reviews WHERE photographer_id = ${req.params.id}
        `)
        res.json(reviews[0])
    },
}