import axios from "axios";
import URLs from "./Config";

export default (AuthApi = {
  registerStudent: function() {
    //return promise or fetch object here
  },
  registerTeacher: function() {},
  login: function(data) {
    let username = data.payload.username;
    let password = data.payload.password;
    axios
      .get(URLs.login)
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  }
});
