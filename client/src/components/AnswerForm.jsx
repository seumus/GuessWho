var React = require('react');
var PropTypes = React.PropTypes;

var AnswerForm = React.createClass({
  getInitialState: function() {
    return {
      selectedCharacter: null,
      answer: null
    };
  },
  handleAnswer: function(e) {
    e.preventDefault()
    console.log(e.target.value);
    var index = parseInt(e.target.value) + 1
    this.setState({answer: this.props.askAnswer(index)})
    // console.log('hiya', this.state.answer);
  },
  handleChange: function(e) {
    e.preventDefault();
    var character = e.target.value;
    // console.log('noo',question);
    this.setState({selectedCharacter: character});

  },

  render: function() {
    var displayAnswer = null;
    if(this.state.answer) {
      displayAnswer = <p>{this.state.answer}</p>
    }
    var answer = this.props.data.map(function(character, index) {
      return(<option key={index} value={index}>{character.name}?</option>)
    })
    var displayButton = null;
    if(this.props.turn) {
      displayButton = <button onClick={this.handleAnswer} value={this.state.selectedCharacter}>Ask</button>
    }
    return (
      <div>
        <p>Is it:</p>
        <form>
          <select onChange={this.handleChange}>
            <option>--</option>
            {answer}
          </select>
          {displayButton}
        </form>
        {displayAnswer}
      </div>
    );
  }

});

module.exports = AnswerForm;
