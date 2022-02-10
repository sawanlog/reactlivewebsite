import React, { Component } from 'react';
import { Navigate  } from 'react-router-dom';

export default class Signing extends Component {
    constructor(props){
        let signup = false
        super()
        this.state = {
            registername: "",
            registeremail: "",
            registerpassword: "",
            signup
        }
        this.handleInputs = this.handleInputs.bind(this)
        this.PostDetails = this.PostDetails.bind(this)
    }
    handleInputs(e){
        this.setState({
           [ e.target.name]: e.target.value
        })

    }
    PostDetails(e){
        e.preventDefault()
        const { registername, registeremail , registerpassword } = this.state
        if (registername === "AK" && registeremail === "A" && registerpassword === "B") {
                this.setState({
                    signup : true
                })
            }
    }
  render() {
    if (this.state.signup) {
        return <Navigate to = "/login"/> 
     }
    const mystyle = { padding: "56px" };
    const mystyle1 = {background: "#fff" };

    return <div>
        <div className="header" style={mystyle1}>
          <div className="container">
            <br />
            <a href="/">
              <img src="img/dslogo.png" alt="DS Canteen" />
            </a>
            
          </div>
        </div>
        
        <div className="col-md-8 col-md-offset-4" style={mystyle} > 
            <div className="forms">
              <div className="form-content">
              <div className="signup-form">
                  <div className="title">Signup</div>
                  <form action="/register-user" method="post">
                    <div className="input-boxes">
                      <div className="input-box">
                        <i className="fas fa-user"></i>
                        <input
                          type="text"
                          name="registername"
                          value={this.state.registername}
                          onChange={this.handleInputs}
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="input-box">
                        <i className="fas fa-envelope"></i>
                        <input
                          type="text"
                          name="registeremail"
                          value={this.state.registeremail}
                          onChange={this.handleInputs}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input
                          type="password"
                          name="registerpassword"
                          value={this.state.registerpassword}
                          onChange={this.handleInputs}
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                      <div className="button input-box">
                        <input
                          type="submit"
                          value="Sumbit"
                          onClick={this.PostDetails}
                        />
                      </div>
                      <div className="text sign-up-text">
                        Already have an account?{" "}
                        <a href="/login">Login now</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              </div>
              </div>
              
    </div>;
  }
}

