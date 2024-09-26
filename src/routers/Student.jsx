import React, { useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import CourseCatalog from '../components/pages/CourseCatalog'
import EnrolledCourses from '../components/pages/EnrolledCourses'
import AccountSetting from '../components/pages/AccountSetting'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import CourseDetail from "./components/pages/CourseDetail";
import Quiz from '../components/pages/Quiz'
import Login from '../components/pages/Login'
import Signup from '../components/pages/Signup'
import Profile from '../components/pages/Profile'
import TeacherQuizes from '../components/pages/TeacherQuizes'
import Report from '../components/pages/reports'
function Student() {
  const [selectedCouserId, setSelectedCouserId] = useState(null)
  const [quizId, setQuizId] = useState(null)
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route
              path="/"
              element={
                <CourseCatalog setSelectedCouserId={setSelectedCouserId} />
              }
            ></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/" element={<Profile />}></Route>

            <Route
              path="/enroll"
              element={
                <EnrolledCourses
                  setQuizId={setQuizId}
                  setSelectedCouserId={setSelectedCouserId}
                />
              }
            >
              {' '}
            </Route>
            <Route path="/accountsetting" element={<AccountSetting />}></Route>
            <Route path="/report" element={<Report />}></Route>

            <Route path="/*" element={<div>Not Found</div>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/teacherquizes"
              element={
                <TeacherQuizes
                  setViewQuizId={setQuizId}
                  selectedCouserId={selectedCouserId}
                />
              }
            ></Route>
            <Route path="/Quiz" element={<Quiz quizId={quizId} />}></Route>
          </Routes>
        </Sidebar>
      </Router>
    </>
  )
}

export default Student
