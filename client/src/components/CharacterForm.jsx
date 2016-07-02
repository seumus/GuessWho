var React = require('react');
var PropTypes = React.PropTypes;

var CharacterForm = React.createClass({
  getInitialState: function() {
    return {
      selectedQuestion: null,
      answer: null
    };
  },
  handleQuestion: function(e) {
    e.preventDefault()
    // console.log(e.target.value);

    this.setState({answer: this.props.askQuestion(e.target.value)})
    console.log('hiya', this.state.answer);
  },
  handleChange: function(e) {
    e.preventDefault();
    var question = e.target.value;
    // console.log('noo',question);
    this.setState({selectedQuestion: question});

  },

  render: function() {
    // console.log('t', this.props.who);
    var displayAnswer = null;
    if(this.state.answer) {
      displayAnswer = <p>{this.state.answer}</p>
    }
    var questionSelect = this.props.questions[0].characteristics.map(function(question, index) {
      // console.log('x',index);
      return (<option key={index} value={index}>{Object.keys(question)}</option>)
    })
    return (
      <div className='questions'>
        <p>Question:</p>
        <form>
          <select onChange={this.handleChange}>
            <option>--</option>
            {questionSelect}
          </select>
          <button onClick={this.handleQuestion} value={this.state.selectedQuestion}>Ask</button>
        </form>
        {displayAnswer}
      </div>
    );
  }

});

module.exports = CharacterForm;
