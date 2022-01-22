const sequelize = require("../db/config");

module.exports = {
  getAll: async (req, res) => {
    const photographers = await sequelize.query(`
        SELECT * FROM photographers`);
    res.json(photographers[0]);
  },

  getPhotographer: async (req, res) => {
    // const { photographer } = req.params;
    console.log(req.params);
    const photographer = await sequelize.query(`
        SELECT * FROM photographers WHERE  id = ${req.params.id}`);
    res.json(photographer[0][0]);
  },

  createPhotographer: async (req, res) => { 
    //   console.log(req.body, "++++++++++++++++++++++++++++++++++++++++++++++");
    const {
      firstName,
      lastName,
      email,
      password,
      city,
      state,
      avatar,
      website,
      facebook,
      instagram,
    } = req.body;
    const newPhotographer = await sequelize.query(`
    INSERT INTO photographers(first_name, last_name, email, password, city, state, avatar, website, instagram, facebook)
    VALUES( '${firstName}',
    '${lastName}',
    '${email}',
    '${password}',
    '${city}',
    '${state}',
    '${avatar}',
    '${website}',
    '${instagram}',
    '${facebook}'
    )`);
    res.status(201).json({"message": "Registered!"})
  },

  updatePhotographer: async (req, res) => {
      const {city, state} = req.body;
      const profileChange = await sequelize.query(`
      UPDATE photographers
    SET city = '${city}', state = '${state}' 
    WHERE id = ${req.params.id};`);
    res.json({"message":"details updated!"})
  },
};
