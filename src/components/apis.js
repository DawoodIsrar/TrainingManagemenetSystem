import axios from "axios";
import { toast } from "react-toastify";

export const getUserEnrolledCourses = async (studentId) => {
  let response = [];
  await axios
    .post("http://localhost:8000/api/getEnrolledCourses", {
      studentId: studentId,
    })
    .then((res) => {
      console.log("res===>getUserEnrolledCourses", res);
      response = res?.data;
    });

  return response;
};
// viewQuestions
export const enrolledCourses = async (studentId, courseId) => {
  await axios
    .post("http://localhost:8000/api/enrolledCourse", {
      courseId: courseId,
      studentId: studentId,
    })
    .then((res) => {
      console.log("res=====>", res);
      if (res?.status === 200) toast(res?.data?.message);
      return res;
    });
};

export const viewQuestions = async (quizId) => {
  let response = [];
  await axios
    .post("http://localhost:8000/api/viewQuestions", {
      quizId: quizId,
    })
    .then((res) => {
      console.log("from api", res);
      response = res?.data;
      console.log("from response", response);
      // if (res?.status === 200) toast(res?.data?.message);
    });
  return response;
};
