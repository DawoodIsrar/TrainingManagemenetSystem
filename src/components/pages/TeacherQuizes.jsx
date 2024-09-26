import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { toast } from 'react-toastify'
import image from '../../images/course.jpeg'
import Navbar from '../sidebar/Navbar'
import { useNavigate } from 'react-router-dom'
import QuizAdd from '../QuizAdd'
import AddQuizModal from '../modals/AddQuizModal'
import AddQuestionModal from '../modals/AddQuestionModal'

function TeacherQuizes({ setViewQuizId, selectedCouserId }) {
  const router = useNavigate()
  const [quizName, setQuizName] = useState('')
  const role = window.sessionStorage.getItem('role')

  const [quizId, setQuizId] = useState('')
  const [isAddQuizFormOpen, setIsAddQuizFormOpen] = useState(false)
  const [isAddQuestionFormOpen, setIsAddQuestionFormOpen] = useState(false)
  // const [isViewQuestionFormOpen, setIsViewQuestionFormOpen] = useState(false)

  console.log('gselectedCouserId', selectedCouserId)
  //   quizesByCourseId
  const studentId = window.sessionStorage.getItem('id')
  const [quizes, setQuizes] = useState([])

  useEffect(() => {
    getAllQuizes()
  }, [])

  const getAllQuizes = async () => {
    await axios
      .post('http://localhost:8000/api/quizesByCourseId', {
        courseId: selectedCouserId,
      })
      .then((res) => {
        const responseData = res?.data?.data
        console.log('responseData', responseData)
        setQuizes(responseData)
      })
  }
  return (
    <>
      <Navbar />
      <div className="title">
        <h2>Quizes catalog</h2>
      </div>
      <div>
        {role === 'admin' && (
          <button
            onClick={() => {
              setIsAddQuizFormOpen(true)
            }}
          >
            add quiz
          </button>
        )}
        {quizes?.length > 0 ? (
          <>
            {quizes?.map((quiz, index) => {
              let quizName = quiz?.quizName

              return (
                <div style={{ display: 'inline-flex' }} key={index}>
                  <div
                    className="card"
                    onClick={() => {
                      if (role === 'admin') {
                        setQuizId(quiz._id)
                        setIsAddQuestionFormOpen(true)
                      } else {
                        setQuizId(quiz._id)
                      }
                      // router('/teacherquizes')
                    }}
                  >
                    <img src={image} alt="course" />
                    <h5>
                      <span>Quiz Name:</span> {quizName}
                    </h5>

                    {role === 'student' && (
                      <a
                        className="quizes"
                        onClick={() => {
                          setViewQuizId(quiz?._id)
                          router('/Quiz')
                        }}
                      >
                        Start Quiz
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </>
        ) : (
          <>
            {' '}
            <h2>No Quizes</h2>
          </>
        )}

        {isAddQuizFormOpen && (
          <AddQuizModal
            modalOpen
            setIsAddQuizFormOpen={setIsAddQuizFormOpen}
            getAllQuizes={getAllQuizes}
            setQuizName={setQuizName}
            quizName={quizName}
            selectedCouserId={selectedCouserId}
          />
        )}

        {isAddQuestionFormOpen && (
          <AddQuestionModal
            modalOpen
            quizId={quizId}
            setIsAddQuestionFormOpen={setIsAddQuestionFormOpen}
          />
        )}
      </div>
    </>
  )
}

export default TeacherQuizes
