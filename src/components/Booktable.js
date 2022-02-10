import React, { useState } from "react";
import Nav from "./Nav";
//import { useHistory } from "react-router-dom";

const Booktable = () => 
{
  //const history = useHistory()
  const [user, setUser] = useState({
    day: "",
    hour: "",
    name: "",
    phone: "",
    persons: ""
  });

  //let name, value;

  const handleInputs = (e) => {
      const {name, value} = e.target
    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { day, hour, name, phone, persons } = user;
    if(day && hour && name && phone && persons)
    {
    const response = await fetch(`http://localhost:3000/users/booktable`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ day, hour, name, phone, persons, }),
    });
    const data = await response.json();
    //console.log(data);

    if (data.status === 400 || !data) {
      window.alert("Invalid submission");
      console.log("Invalid submission");
    } else {
      window.alert("Submission successful");
      console.log("Submission successful");
      
     // history.push("/booktable")
    }
    }
    else{
      alert("Please fill all details")
    }
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <br />
          <a href="/">
            <img src="img/dslogo.png" alt="DS Canteen" />
          </a>
          <Nav />
        </div>
      </div>
      <section id="book-table">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2>Book Your Table Now</h2>
              </div>
            </div>
            <div className="col-md-4 col-md-offset-2 col-sm-12">
              <div className="left-image">
                <img src="img/book_left_image.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="right-info">
                  {/* {console.log("user", user)} */}
                <h4>Reservation</h4>
                <form id="form-submit" method="POST">
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <select
                          name="day"
                          value={user.day}
                          onChange={handleInputs}
                        >
                          <option value="">Select day</option>
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                          <option value="Saturday">Saturday</option>
                          <option value="Sunday">Sunday</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <select
                          name="hour"
                          value={user.hour}
                          onChange={handleInputs}
                        >
                          <option value="">Select hour</option>
                          <option value="10-00">10:00</option>
                          <option value="12-00">12:00</option>
                          <option value="14-00">14:00</option>
                          <option value="16-00">16:00</option>
                          <option value="18-00">18:00</option>
                          <option value="20-00">20:00</option>
                          <option value="22-00">22:00</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          type="name"
                          name="name"
                          value={user.name}
                          onChange={handleInputs}
                          className="form-control"
                          id="name"
                          placeholder="Full name"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          type="phone"
                          name="phone"
                          value={user.phone}
                          onChange={handleInputs}
                          className="form-control"
                          id="phone"
                          placeholder="Phone number"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <select
                          required
                          className="person"
                          name="persons"
                          value={user.persons}
                          onChange={handleInputs}
                        >
                          <option value="">How many persons?</option>
                          <option value="1-Person">1 Person</option>
                          <option value="2-Persons">2 Persons</option>
                          <option value="3-Persons">3 Persons</option>
                          <option value="4-Persons">4 Persons</option>
                          <option value="5-Persons">5 Persons</option>
                          <option value="6-Persons">6 Persons</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <button
                          type="submit"
                          name="submit"
                          value="submit"
                          onClick={PostData}
                          id="form-submit"
                          className="btn"
                        > Book Table
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booktable;
