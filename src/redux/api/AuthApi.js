import axios from "axios";
import URLs from "./Config";

export default (AuthApi = {
  registerStudent: function() {
    //return promise or fetch object here
  },
  registerTeacher: function() {},
  login: function(data) {
    return axios
      .post(URLs.login, {
        email: data.payload.username,
        password: data.payload.password
      })
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  }
});
