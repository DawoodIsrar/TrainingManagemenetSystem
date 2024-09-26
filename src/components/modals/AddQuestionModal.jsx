import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import QuizAdd from '../QuizAdd'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import { toast, toastError } from 'react-toastify'

const AddQuestionModal = ({ quizId, setIsAddQuestionFormOpen, modalOpen }) => {
  const [open, setOpen] = useState(modalOpen)
  const [question, setQuestion] = useState(' ')
  const [op1, setop1] = useState(' ')
  const [op2, setop2] = useState(' ')
  const [op3, setop3] = useState(' ')
  const [correct, setCorrect] = useState(' ')

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => {
    setIsAddQuestionFormOpen(false)
    setOpen(false)
  }

  const handleSubmit = async () => {
    if (validation()) {
      const res = await axios.post('http://localhost:8000/api/addQuestion', {
        quizId: quizId,
        question: question,
        answers: {
          op1,
          op2,
          op3,
          correct,
        },
      })
      console.log('res,res', res)
      if (res?.status === 201) {
        onCloseModal()
        toast.error(res?.data?.message)
      } else {
        toast(res?.data?.message)
        onCloseModal()
      }
    } else {
      toast.error('field required')
    }
  }

  const validation = () => {
    let isValid = true

    if (op1 === ' ') {
      isValid = false
    }
    if (op2 === ' ') {
      isValid = false
    }
    if (op3 === ' ') {
      isValid = false
    }
    if (correct === ' ') {
      isValid = false
    }
    // if (correct !== op1 || correct !== op2 || correct !== op3) {
    //   isValid = false
    // }

    return isValid
  }

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <textarea
            type="textarea"
            placeholder="Question"
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Form.Group>

        <Form>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="text"
              placeholder="option1"
              onChange={(e) => setop1(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="text"
              required
              placeholder="option2"
              onChange={(e) => setop2(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="text"
              placeholder="option3"
              onChange={(e) => setop3(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="text"
              placeholder="Right Answer"
              onChange={(e) => setCorrect(e.target.value)}
            />
          </Form.Group>
        </Form>
        <div className="d-grid gap-2">
          <Button onClick={handleSubmit}>Add Question</Button>
        </div>
      </Modal>
    </div>
  )
}
export default AddQuestionModal

// ReactDOM.render(<App />, document.getElementById('AddQuizModal'))
