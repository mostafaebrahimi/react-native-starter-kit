export const rootPath = "http://172.16.137.69:8000";
import Storage from "react-native-storage";
import { AsyncStorage } from "react-native";

const Config = {
  login: rootPath + "/login",
  registerNewUsr: {
    student: rootPath + "/register/student",
    teacher: rootPath + "/register/teacher"
  },
  students: rootPath + "/students",
  profile: {
    courses_list: rootPath + "/courses"
  },
  register: rootPath + "/student/get/course",
  courses: rootPath + "/courses",
  getuser: rootPath + "/getuser"
};

export function getHeaderBasedOnToken(token) {
  // try {
  //   let token =  storage.load({
  //     key: "loginState"
  //   });
  //   return {
  //     Authorization: "Bearer " + token
  //   };
  // } catch (e) {
  //   return undefined;
  // }
}

export default Config;
