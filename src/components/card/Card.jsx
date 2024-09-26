import React from 'react'
import image from '../../images/course.jpeg'
import '../../App.css'
import { color } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Card({ setQuizId, setSelectedCouserId, data }) {
  const router = useNavigate()
  // const [isViewQuestionFormOpen, setIsViewQuestionFormOpen] = useState(false)
  const role = window.sessionStorage.getItem('role')

  return (
    <>
      <div className="card">
        <img
          src={image}
          onClick={() => {
            if (role === 'student') {
              setSelectedCouserId(data?._id)
              router('/teacherquizes')
            }
          }}
        ></img>
        <h5>
          <span>Title:</span> {data?.title}
        </h5>

        <h5>
          <span>Description:</span> {data?.description}
        </h5>

        <h5>
          <span>Level:</span> {data?.level}
        </h5>

        <h5>
          <span>Duration:</span> {data?.duration}
        </h5>
        <a
          className="quizes"
          onClick={() => {
            if (role === 'student') {
              setSelectedCouserId(data?._id)
              router('/teacherquizes')
            } 
          }}
        >
          Quizes
        </a>
      </div>
    </>
  )
}

export default Card
