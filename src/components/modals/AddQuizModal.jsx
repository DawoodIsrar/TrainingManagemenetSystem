import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import QuizAdd from '../QuizAdd'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import { toast, toastError } from 'react-toastify'

const AddQuizModal = ({
  selectedCouserId,
  getAllQuizes,
  setQuizName,
  setIsAddQuizFormOpen,
  modalOpen,
  quizName,
}) => {
  const [open, setOpen] = useState(modalOpen)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => {
    setIsAddQuizFormOpen(false)
    setOpen(false)
  }

  const handleSubmit = async () => {
    const res = await axios.post('http://localhost:8000/api/addQuiz', {
      quizName: quizName,
      courseId: selectedCouserId,
    })
    console.log('res,res', res)
    if (res?.status === 201) {
      onCloseModal()
      setQuizName('')
      toast.error(res?.data?.message)
    } else {
      toast(res?.data?.message)
      onCloseModal()
      setQuizName('')
      getAllQuizes()
    }
  }
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        {/* <div className="main-container">
          <div className="Inner-container"> */}
        <Form.Group className="lg-12" controlId="formGroupPassword">
          <Form.Control
            type="text"
            value={quizName}
            placeholder="Course Name"
            onChange={(e) => setQuizName(e.target.value)}
          />
        </Form.Group>
        {/* </div> */}

        <div className="Inner-container">
          <div className="d-grid gap-2">
            <Button onClick={handleSubmit}>Add Question</Button>
          </div>
          {/* </div> */}
        </div>
        {/* <QuizAdd
          selectedCouserId={selectedCouserId}
          getAllQuizes={getAllQuizes}
          quizName={quizName}
          setQuizName={setQuizName}
        /> */}
      </Modal>
    </div>
  )
}
export default AddQuizModal

// ReactDOM.render(<App />, document.getElementById('AddQuizModal'))
