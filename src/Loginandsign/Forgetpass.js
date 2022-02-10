import React,{useState} from 'react';

const Forgetpass = () => {

    const font ={color: "#7d2ae8"};
    const font1 = {background : "#7d2ae8"};
    const fa = {display: "contents" };

const [user, setUser] = useState({
    registeremail: "",
  });

const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

const PostDetails = async (e) => {
    e.preventDefault();
    const {registeremail} = user;
    if (registeremail ){
      const response = await fetch(`http://localhost:3000/users/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            registeremail,
          }),
        }
      );
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
    } else {
      alert("Please fill email id");
    }
  };
  const mystyle1 = {background: "#fff" };
  return <>
   <div className="header" style={mystyle1}>
          <div className="container">
            <br />
            <a href="/">
              <img src="img/dslogo.png" alt="DS Canteen" />
            </a>
            
          </div>
        </div>
   <div class="form-gap"></div>
    <div class="test">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-center"><h3 ><i class="fa fa-lock fa-4x" style={fa}></i></h3>
                            <h2 class="text-center"style={font}>Forgot Password?</h2>
                            <p>You can reset your password here.</p>
                            <div class="panel-body">

                                <form action="/forgot-password" method="post">

                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i
                                                    class="glyphicon glyphicon-envelope color-blue"></i></span>
                                            <input id="email" name="registeremail" placeholder="email address"
                                                class="form-control" type="text" value={user.registeremail}
                                                onChange={handleInputs}/>
                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <input name="submit" style={font1}
                                            class="btn btn-lg btn-primary btn-block"value="submit"
                                            onClick={PostDetails}
                                            type="submit"/>
                                    </div>

                                    <input type="hidden" class="hide" name="token" id="token" value=""/>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
  
  
  </>;
};

export default Forgetpass;
