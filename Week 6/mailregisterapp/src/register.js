import React, { Component } from 'react';
import './register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, password } = this.state;
    
    if (name.length < 5) {
      alert("Full Name must be 5 characters long!");
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      alert("Email is not valid!");
      return;
    }
    
    if (password.length < 8) {
      alert("Password must be at least 8 characters!");
      return;
    }
    
    alert("Registration Successful!");
  }

  render() {
    return (
      <div className="register-container">
        <h2 className="title">Register Here!!!</h2>
        <form onSubmit={this.handleSubmit} className="register-form">
          <div className="form-group">
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.name} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.email} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleChange} 
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
