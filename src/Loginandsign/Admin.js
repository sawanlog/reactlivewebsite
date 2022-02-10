import React, { Component } from 'react';
import { Link, Navigate }  from 'react-router-dom';

export default class Admin extends Component {
    constructor(props){
        super()
        const token = localStorage.getItem("token")

        let loggedIn = true
        if (token === null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
  render() {
      if(this.state.loggedIn === false){
        return <Navigate to="/login"/>
      }
      const mystyle = {  };
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
        <div className="col-md-4 col-md-offset-4" style={mystyle} > 
            <div className="forms">
              <div className="form-content">
              <h3> This is an Admin page. Only Auth People can see this.</h3>
              <button className='primary-button'><Link to="/logout">Logout</Link></button>
                </div>
                </div>
                </div>
        
        
    </div>;
  }
}
