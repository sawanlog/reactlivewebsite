import React, { Component } from 'react';
import { Navigate  } from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        let loggedIn = false
        super()
        this.state = {
            loginemail: "",
            loginpassword: "",
            loggedIn
        }
        this.loginInputs = this.loginInputs.bind(this)
        this.loginDetails = this.loginDetails.bind(this)
    }
    loginInputs(e){
        this.setState({
           [ e.target.name]: e.target.value
        })

    }
    loginDetails(e){
        e.preventDefault();
      const { loginemail, loginpassword } = this.state;
      if (loginemail && loginpassword) {
        const response =  fetch(`http://localhost:3000/users/post-login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            loginemail,
            loginpassword,
          }),
        });
        const data =  response.json();
        //console.log(data);

        if (data.status === 400 || !data) {
          window.alert("Invalid submission");
          console.log("Invalid submission");
        } else {
          window.alert("successful login");
          console.log("successful login");


          // history.push("/booktable")
        }
      } else {
        alert("Please fill all details");
      }
    };
    
    
    
  render() {
    
      if (this.state.loggedIn) {
         return <Navigate  to = "/admin"/> 
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
                <div className="login-form">
                  <div className="title">Login</div>
                  <form action="/">
                    <div className="input-boxes">
                      <div className="input-box">
                        <i className="fas fa-envelope"></i>
                        <input
                          type="text"
                          name="loginemail"
                          value={this.state.loginemail}
                          onChange={this.loginInputs}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input
                          type="password"
                          name="loginpassword"
                          value={this.state.loginpassword}
                          onChange={this.loginInputs}
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                      <div className="text">
                        <a href="/forgetpass">Forgot password?</a>
                      </div>
                      <div className="button input-box">
                        <input
                          type="submit"
                          value="Sumbit"
                          onClick={this.loginDetails}
                        />
                      </div>
                      <div className="text sign-up-text">
                        Don't have an account?{" "}
                        <a href="/signing">Sigup now</a>
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
