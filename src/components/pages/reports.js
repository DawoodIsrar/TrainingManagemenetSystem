import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Report() {
  const [quizReport, setQuizReport] = useState([]);

  const role = window.sessionStorage.getItem("role");

  useEffect(() => { 
    const id = window.sessionStorage.getItem("id");
    axios.post('http://localhost:8000/api/reportsById', { 
      studentId: id
    }).then((res) => {  
      console.log(res.data);
      setQuizReport(res.data.responseData);
    });
  }, []);

  return (
    <div className="profile-div">
      <div className="pic-div">
        <h1>Reports</h1>
      </div>  
      {quizReport && (
        quizReport.map((quizReport, index) => (
          <div className='detail' style={{marginTop:"3rem",display:"flex"}} key={index}>
            <div className="profile-detail">
              <div className="heading">
                <h3>
                  {quizReport.quizName}
                </h3>
                {
                  role === "student" ? <p>(Student TMS)</p> : <p>(Admin TMS)</p>
                }
                <hr />
              </div>
              <div className="detail-table">
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Score</td>
                      <td>{quizReport.score}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>{quizReport.total_marks}</td>
                    </tr>   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
        