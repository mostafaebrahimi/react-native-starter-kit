import axios from "axios";
import URLs from "./Config";

export default (AuthApi = {
  registerStudent: function() {
    let student = { ...data.payload };
    return axios
      .post(URLs.register.student, student)
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  },
  registerTeacher: function(data) {
    let teacher = { ...data.payload };
    return axios
      .post(URLs.register.teacher, teacher)
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
  }
});
