import React from "react";
import { useState } from "react";
import { Select } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
const { Option } = Select;

const CourseCreate = () => {
  const [title, setName] = useState("");

  const [duration, setDuration] = useState("");
  const [description, setDiscription] = useState("");
  const [values, setValues] = useState("");
  const [level, setLevels] = useState("");
  const durationOptions = [
    "One month",
    "Two months",
    "Three months",
    "Four months",
    "Five months",
  ];

 

  const levelOptions = ["Beginner", "Intermediate", "Advance"];

  const onDurationChangeHandler = (event) => {
    setDuration(event.target.value);
  };

  const onLevelChangeHandler = (event) => {
    setLevels(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ email, fname, lname, password,repassword });
    try {
      console.log("====>", title, description, level, duration);
      // setDuration("true");

      const res = await axios.post(`http://localhost:8000/api/addCourse`, {
        title,
        description,
        level,
        duration,
      });
      console.log(res.data.message);
      toast(res.data.message);
    } catch (err) {
      if (err) {
        toast(err.response.message);
      }
    }
  };

  return (
    <>
      <h1 className="jumbotron  text-center bg-primary square">
        Create Course
      </h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <p className="heading">Course Title:</p>

          <input
            type="text"
            className="form-control mb-4 p-2"
            value={title}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Course name"
            required
          />

          <p className="heading">description:</p>

          <textarea
            name="description"
            cols="7"
            rows="7"
            placeholder="Enter Course Desciption"
            value={description}
            className="form-control"
            onChange={(e) => setDiscription(e.target.value)}
          ></textarea>
          <br></br>

          <div className="form-row">
            <>
              <div className="col">
                <div className="form-group">
                  <p className="heading">Levels:</p>
                  <select onChange={onLevelChangeHandler}>
                    <option>Please choose one option</option>
                    {levelOptions?.map((option, index) => {
                      return <option key={index}>{option}</option>;
                    })}
                  </select>
                </div>
              </div>
              <br />

              <p className="heading">Duraion:</p>
              <div className="col">
                <div className="form-group">
                  <select onChange={onDurationChangeHandler}>
                    <option>Please choose one option</option>
                    {durationOptions.map((option, index) => {
                      return <option key={index}>{option}</option>;
                    })}
                  </select>
                </div>
              </div>
            </>

            <br></br>
          </div>
          {/* <input
            type="text"
            className="form-control mb-4 p-2"
            value={category}
            onChange={(e) => setCatagory(e.target.value)}
            placeholder="Course Catagory"
            required
          /> */}

          <button
            type="submit"
            className="createbtn btn-block btn-primary mb-4 p-2"
          >
            Click to Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CourseCreate;
