import React, { Component } from 'react';
import validator from 'validator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleSubmit(event) {

  }
  isEmail(value) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>One-Pager</h2>
        </div>
        <br/>

        <form onSubmit={this.handleSubmit}>
          First Name:<br/>
          <input type="text" name="firstname"/><br/><br/>
          Last Name:<br/>
          <input type="text" name="lastname"/><br/><br/>
          Email:<br/>
          <input type="text" name="email" validations="isEmail" validationError="This is not a valid email"/><br/><br/>
          <input type="submit" name="Submit"/><br/><br/>
        </form>

      </div>
    );
  }
}

export default App;
