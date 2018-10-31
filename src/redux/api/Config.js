let rootPath = "http://167.99.111.154:8000/";
const Config = {
  login: rootPath + "login",
  register: {
    student: rootPath + "register/student",
    teacher: rootPath + "register/teacher"
  },
  students: rootPath + "students",
  profile: {
    courses_list: rootPath + "/courses"
  }
};

export function getHeaderBasedOnToken(token) {
  return {
    "": token
  };
}

export default Config;
