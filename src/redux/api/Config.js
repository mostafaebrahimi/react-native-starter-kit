export const rootPath = "http://172.16.137.192:8000";
const Config = {
  login: rootPath + "/login",
  register: {
    student: rootPath + "/register/student",
    teacher: rootPath + "/register/teacher"
  },
  students: rootPath + "/students",
  profile: {
    courses_list: rootPath + "/courses"
  },
  courses:rootPath + "/courses",
};

export function getHeaderBasedOnToken(token) {
  return {
    "": token
  };
}

export default Config;
