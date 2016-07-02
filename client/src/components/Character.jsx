var React = require('react');
var PropTypes = React.PropTypes;

var Character = React.createClass({
  getInitialState: function() {
    return {
      src: this.props.image
    };
  },
  changeImage: function() {
    console.log();
    if(this.state.src === this.props.image) {
      this.setState({src:'/images/tester.png'})
    }
    else {
      this.setState({src:this.props.image})
    }
  },

  render: function() {
    return (
      <div className='image'>
        <img onClick={this.changeImage} src={this.state.src}></img>
      </div>
    );
  }

});

module.exports = Character;
