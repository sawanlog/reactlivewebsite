import React, { useState } from "react";
import "./loginsignupstyle.css";
//import Footer from "./Footer";

const Signup = () => {
  {
    //const history = useHistory()
    const [userlogin, setUserlogin] = useState({
      loginemail: "",
      loginpassword: "",
    });
    const [user, setUser] = useState({
      registername: "",
      registeremail: "",
      registerpassword: "",
    });

    const loginInputs = (e) => {
      const { name, value } = e.target;
      setUserlogin({ ...userlogin, [name]: value });
    };


    const loginDetails = async (e) => {
      e.preventDefault();
      const { loginemail, loginpassword } = userlogin;
      if (loginemail && loginpassword) {
        const response = await fetch(`http://localhost:3000/users/post-login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            loginemail,
            loginpassword,
          }),
        });
        const data = await response.json();
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

    const handleInputs = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    };

    const PostDetails = async (e) => {
      e.preventDefault();
      const { registername, registeremail, registerpassword } = user;
      if (registername && registeremail && registerpassword) {
        const response = await fetch(
          `http://localhost:3000/users/register-user`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              registername,
              registeremail,
              registerpassword,
            }),
          }
        );
        const data = await response.json();
       //console.log(data);

        if (data.status === 400 || !data) {
          window.alert("Invalid submission");
          console.log("Invalid submission");
        } else {
          alert("Submission successful");                              
          console.log("Submission successful");

          // history.push("/booktable")
        }
      } else {
        alert("Please fill all details");
      }
    };
    const mystyle = { padding: "56px" };
    const mystyle1 = {background: "#fff" };

    return (
      <>
        <div className="header" style={mystyle1}>
          <div className="container">
            <br />
            <a href="/">
              <img src="img/dslogo.png" alt="DS Canteen" />
            </a>
            
          </div>
        </div>
        
        <div className="container" style={mystyle}>
          <div className="head">
            <input type="checkbox" id="flip" />
            <div className="cover">
              <div className="front">
              </div>
            </div>
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
                          value={user.loginemail}
                          onChange={loginInputs}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input
                          type="password"
                          name="loginpassword"
                          value={user.loginpassword}
                          onChange={loginInputs}
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
                          onClick={loginDetails}
                        />
                      </div>
                      <div className="text sign-up-text">
                        Don't have an account?{" "}
                        <label for="flip">Sigup now</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="signup-form">
                  <div className="title">Signup</div>
                  <form action="/register-user" method="post">
                    <div className="input-boxes">
                      <div className="input-box">
                        <i className="fas fa-user"></i>
                        <input
                          type="text"
                          name="registername"
                          value={user.registername}
                          onChange={handleInputs}
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="input-box">
                        <i className="fas fa-envelope"></i>
                        <input
                          type="text"
                          name="registeremail"
                          value={user.registeremail}
                          onChange={handleInputs}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input
                          type="password"
                          name="registerpassword"
                          value={user.registerpassword}
                          onChange={handleInputs}
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                      <div className="button input-box">
                        <input
                          type="submit"
                          value="Sumbit"
                          onClick={PostDetails}
                        />
                      </div>
                      <div className="text sign-up-text">
                        Already have an account?{" "}
                        <label for="flip">Login now</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </>
    );
  }
};

export default Signup;
