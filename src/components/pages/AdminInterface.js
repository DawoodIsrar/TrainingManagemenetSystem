import React, { useState } from 'react';

const AdminInterface = ({ onQuestionSubmit }) => {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onQuestionSubmit(question);
    setQuestion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={handleQuestionChange}
        placeholder="Enter a question"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdminInterface;
