import React from 'react';

class QuestionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };
  }

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  render() {
    const { question, options } = this.props;
    const { selectedOption } = this.state;

    return (
      <div>
        <h3>{question}</h3>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={this.handleOptionChange}
            />
            {option}
          </div>
        ))}
      </div>
    );
  }
}

export default QuestionComponent;
