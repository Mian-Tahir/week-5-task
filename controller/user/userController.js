const userService = require("../../service/userService");
module.exports = {
  getUser: async(req,res) => {
    const data = await userService.getUsers();
    res.send(data);
  },
  createUser: async (data) => {
    const result = await userService.createUser(data);
    console.log("usercontroller");
    return(result);
},

};




