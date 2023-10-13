const { models } = require("../models/definiations/");



module.exports = {
  getUsers: async() => {
    const result = await models.user.findAll();
    return result;
  },

  createUser: async (body) => {
    const result = await models.user.create(body);
    console.log("userservice");
    return result;
  },
};


