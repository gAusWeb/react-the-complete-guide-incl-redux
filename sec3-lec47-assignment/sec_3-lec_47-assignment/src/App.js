import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: 'superGavAusWeb'
  };

  changeUserNameHandler = ( event ) => {
    this.setState({ userName: event.target.value });
  }

  render() {
    return (
      <div className="App">

        <UserInput
          currentName={ this.state.userName }
          changed={ this.changeUserNameHandler } />

        <UserOutput userName={ this.state.userName }  />
        <UserOutput userName={ this.state.userName } />
        <UserOutput userName={'gavAusWeb'} />

      </div>
    );
  }
}

export default App;
