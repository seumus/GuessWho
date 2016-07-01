var React = require('react');
var Character = require('./Character.jsx')

var CharacterList = React.createClass({

  render: function() {
    var characterNodes = this.props.data.map(function(character, index) {
      return (
          <Character className='character' id={character.id} name={character.name} image={character.image} key={character.id}>
          </Character>
      );
    }.bind(this));
    return (
      <div className='characterList'>
        {characterNodes}
      </div>
    );
  }

});

module.exports = CharacterList;
