import axios from "axios";
import URLs from "./Config";

export default (AuthApi = {
  registerStudent: function(data) {
    let student = { ...data };
    return axios
      .post(URLs.registerNewUsr.student, student)
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  },
  registerTeacher: function(data) {
    let teacher = { ...data };
    return axios
      .post(URLs.registerNewUsr.teacher, teacher)
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  },
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
  },
  getUser: function(token) {
    return axios
      .get(URLs.getuser, {
        headers: {
          Authorization: "Bearer " + token.token
        }
      })
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  }
});
