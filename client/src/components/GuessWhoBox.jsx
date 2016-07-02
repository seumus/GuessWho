var React = require('react');
var Data = require('../Data.js')
var CharacterList = require('./CharacterList.jsx')
var CharacterForm = require('./CharacterForm.jsx')
var AnswerForm = require('./AnswerForm.jsx')

var GuessWhoBox = React.createClass({
  getInitialState: function() {
    return {data: Data,
            who: null,
            turn: true
           };
  },
  setWho: function() {
    this.setState({who: this.state.data[(Math.random()*this.state.data.length).toFixed(0)]})
  },
  componentDidMount: function() {
    this.setWho()
  },
  askQuestion: function(id) {
    var cheese = Object.keys(this.state.who.characteristics[id])[0]
    if(this.state.who.characteristics[id][cheese]) {
      // console.log('right');
      return 'Yes!'
    }
    else {
      // console.log('wrong');
      return 'No!'
    }
  },
  askAnswer: function(id) {
    // console.log('here', this.state.who.id);
    // console.log('ham', id);
    if(this.state.who.id === id && this.state.turn) {
      this.setState({turn: false})
      return 'You win!'
    }
    else {
      this.setState({turn: false})
      return 'You lose! The right answer was: ' + this.state.who.name
    }
  },

  render: function() {
    // console.log(this.state.data[(Math.random()*this.state.data.length).toFixed(0)].name);

    console.log(this.state.who);
    return (
      <div>
        <h1>Guess Who!</h1>
        <CharacterList className='characterList' data={this.state.data}/>
        <CharacterForm questions={this.state.data} who={this.state.who} askQuestion={this.askQuestion}/>
        <AnswerForm turn={this.state.turn} data={this.state.data} askAnswer={this.askAnswer}/>
      </div>
    );
  }

});

module.exports = GuessWhoBox;
