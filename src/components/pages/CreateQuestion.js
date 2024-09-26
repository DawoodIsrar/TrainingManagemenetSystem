import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
function CreateQuestion() {
  const [question, setQuestion] = useState(" ");
  const [op1, setop1] = useState(" ");
  const [op2, setop2] = useState(" ");
  const [op3, setop3] = useState(" ");
  const [correct, setCorrect] = useState(" ");
  const [courseName, setCoursename] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/addQuiz", {
        courseName: courseName,
        question: question,
        answers: {
          op1,
          op2,
          op3,
          correct,
        },
      });

      const data = res.data; // Extract the response data
      toast(data.message);
      console.log(courseName, question, op1, op2, op3, correct);
      // toast(data.message);
    } catch (err) {
      if (err.response) {
        const errorData = err.response.data;
        toast(errorData.message);
        // toast(errorData.message);
      } else {
        toast("Error:", err.message);
        // toast("An error occurred.");
      }
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="Inner-container">
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="text"
              placeholder="Course Name"
              onChange={(e) => setCoursename(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <textarea
              type="textarea"
              placeholder="Question"
              onChange={(e) => setQuestion(e.target.value)}
            />
          </Form.Group>
        </div>

        <div className="Inner-container">
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
        </div>
      </div>
    </>
  );
}

export default CreateQuestion;
