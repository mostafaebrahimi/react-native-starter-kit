import axios from "axios";
import URLs from "./Config";

export default (ProfileApi = {
  listOfCourses: function() {
    let student = { ...data.payload };
    return axios
      .get(URLs.profile.courses_list)
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  }
});
