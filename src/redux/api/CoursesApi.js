import axios from "axios";
import URLs from "./Config";

export default (CoursesApi = {
  getCourses: function() {
    return axios
      .get(URLs.courses)
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  },
  createCourse: function(course) {
    return axios
      .post(URLs.courses, course)
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  },
  registerOnCourse: function(course) {
    let config = {
      headers: { Authorization: "Bearer " + course.token }
    };
    return axios
      .get(URLs.register + "/" + course._id, config)
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  }
});
