import React, { useEffect, useState } from 'react'
import axios from 'axios'
import image from '../../images/course.jpeg'
import '../../App.css'
import { enrolledCourses } from '../apis'
import Navbar from '../sidebar/Navbar'
import { useNavigate } from 'react-router-dom'
function CourseCatalog({ setSelectedCouserId }) {
  const router = useNavigate()

  const [data, setData] = useState([])
  const [role, setRole] = useState('')
  const studentId = window.sessionStorage.getItem('id')

  useEffect(() => {
    axios.get('http://localhost:8000/api/allCourses').then((res) => {
      const responseData = res.data
      setData(responseData)
      const r = window.sessionStorage.getItem('role')
      setRole(r) // Set the role using the retrieved value
      console.log(role)
    })
  }, [])

  return (
    <>
      <Navbar />
      <div className="title">
        <h2>Course catalog</h2>
      </div>

      {data.map((course, index) => {
        let title = course.title
        let description = course.description
        let duration = course?.duration
        let level = course?.level

        return (
          <div style={{ display: 'inline-flex' }} key={index}>
            <div className="card" onClick={() => {}}>
              <img
                src={image}
                alt="course"
                onClick={() => {
                  if (role === 'admin') {
                    setSelectedCouserId(course?._id)
                    router('/teacherquizes')
                  }
                  //  else if (role === 'student') {
                  //   setSelectedCouserId(course?._id)
                  //   router('/teacherquizes')
                  // }
                }}
              />
              <h5>
                <span>Title:</span> {title}
              </h5>

              <h5>
                <span>Description:</span> {description}
              </h5>

              <h5>
                <span>Level:</span> {level}
              </h5>

              <h5>
                <span>Duration:</span> {duration}
              </h5>
              {role === 'student' && ( // Render the button if the role is 'student'
                <span>
                  <button
                    onClick={() => {
                      enrolledCourses(studentId, course?._id)
                    }}
                  >
                    Enroll
                  </button>
                </span>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CourseCatalog
