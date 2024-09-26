import React, { useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import CourseCreate from '../components/pages/CourseCreate'
import CourseCatalog from '../components/pages/CourseCatalog'
import AccountSetting from '../components/pages/AccountSetting'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../components/pages/Login'
import CreateQuestion from '../components/pages/CreateQuestion'
import Profile from '../components/pages/Profile'
import TeacherQuizes from '../components/pages/TeacherQuizes'
function Teacher() {
  const [selectedCouserId, setSelectedCouserId] = useState(null)
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
            <Route path="/CourseCreate" element={<CourseCreate />}>
              {' '}
            </Route>
            <Route path="/createQuiz" element={<CreateQuestion />}></Route>
            <Route path="/accountsetting" element={<AccountSetting />}></Route>
            <Route path="/*" element={<div>Not Found</div>}></Route>
            <Route
              path="/teacherquizes"
              element={<TeacherQuizes selectedCouserId={selectedCouserId} />}
            ></Route>
            <Route path="/logout" element={<Login />}></Route>
          </Routes>
        </Sidebar>
      </Router>
    </>
  )
}

export default Teacher
