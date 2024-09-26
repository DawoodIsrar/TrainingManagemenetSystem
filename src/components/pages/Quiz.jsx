import React, { useState, useEffect } from 'react'
import './Style.css'
import { viewQuestions } from '../apis'
const Quiz = ({ quizId }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [question, setQuestion] = useState([])
  // const questions = [
  //   {
  //     question: 'What is the C++?',
  //     options: ['Superset', 'Language', 'Framework', 'Labrary'],
  //     answer: 'Language',
  //   },
  //   {
  //     question: 'Who invanted www?',
  //     options: [
  //       'Tim berner li',
  //       'Pablo Picasso',
  //       'Vincent van Gogh',
  //       'Michelangelo',
  //     ],
  //     answer: 'Tim berner li',
  //   },
  //   {
  //     question: 'What is the most famous language?',
  //     options: ['Javascript', 'Java', 'C++', 'C'],
  //     answer: 'Javascript',
  //   },
  // ]

  useEffect(() => {
    doViewQuestions()
  }, [])

  const doViewQuestions = async () => {
    let data = []
    const res = await viewQuestions(quizId)
    data = res
    console.log('in api call:', data)
    const questions = data?.map((data, index) => {
      return {
        question: data.question,
        options: [data.answers.op1, data.answers.op2, data.answers.op3],
        answers: data.answers?.correct,
      }
    })

    setQuestion(questions)

    console.log('res==<><><><<>', res)
  }

  const handleAnswerOptionClick = (answer) => {
    if (answer === question[currentQuestion]?.answers) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < question?.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  console.log(
    'question[currentQuestion]?.question',
    question[currentQuestion]?.question,
    currentQuestion,
    question,
  )
  return (
    <>
      <h1 className="jumbotron  text-center bg-primary square">Quiz</h1>
      <div className="quiz">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {question?.length}
            <br></br>
            {score >= question?.length / 2 ? 'Pass' : 'Fail'}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                Question {currentQuestion} / {question?.length}
              </div>
              <div className="question-text">
                {question[currentQuestion]?.question}
              </div>
            </div>
            <div className="answer-section">
              {question[currentQuestion]?.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Quiz
