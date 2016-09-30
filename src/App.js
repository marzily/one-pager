import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  validateEmail(value) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }

  validateFields(firstname, email) {
    if (!firstname && !email) {
      var missing = "First Name and Email are required.";
    } else if (!firstname) {
      var missing = "First Name is required.";
    } else if (!email) {
      var missing = "Email is required.";
    }

    return missing;
  }

  handleSubmit(event) {
    event.preventDefault();
    var form = document.getElementById('signup');

    var firstname = form.firstname.value.trim()
    var lastname = form.lastname.value.trim()
    var email = form.email.value.trim()

    var fieldsMissing = this.validateFields(firstname, email);
    var emailValid = this.validateEmail(email);
    this.appendError(fieldsMissing, emailValid);
  }

  appendError(fieldsMissing, emailValid) {
    if (fieldsMissing){
      var missingMsg = document.createTextNode(fieldsMissing);
      document.getElementById('signup').appendChild(missingMsg);
    }

    if (!emailValid) {
      var validMsg = document.createTextNode("Email is invalid.");
      document.getElementById('signup').appendChild(validMsg);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>One-Pager</h2>
        </div>
        <br/>

        <form id="signup" onSubmit={this.handleSubmit.bind(this)}>
          First Name:<br/>
          <input type="text" name="firstname"/><br/><br/>
          Last Name:<br/>
          <input type="text" name="lastname"/><br/><br/>
          Email:<br/>
          <input type="text" name="email"/><br/><br/>
          <input type="submit" name="Submit"/><br/><br/>
        </form>

      </div>
    );
  }
}

export default App;
