import React, { Component } from 'react';
import './ComplaintRegister.css';

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: '',
      complaint: '',
      NumberHolder: Math.floor(Math.random() * 100) + 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    var msg = 'Thanks ' + this.state.ename + '\nYour Complaint was Submitted.\nTransaction ID is: ' + this.state.NumberHolder;
    alert(msg);
    event.preventDefault();
  }

  render() {
    return (
      <div className="complaint-container">
        <h2 className="title">Register your complaints here!!!</h2>
        <form onSubmit={this.handleSubmit} className="complaint-form">
          <div className="form-group">
            <label>Name:</label>
            <input 
              type="text" 
              name="ename" 
              value={this.state.ename} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Complaint:</label>
            <textarea 
              name="complaint" 
              value={this.state.complaint} 
              onChange={this.handleChange} 
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;
