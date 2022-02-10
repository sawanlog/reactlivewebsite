import React from 'react';

const Resetpass = () => {
  return <>
   <div class="container">
        <header>Reset Password Here...</header>
        <form action="/reset-pass" method="post">
            <div class="error-text"></div>
            <div class="field">
                <input id="pswrd_1" name="newPass" type="password" placeholder="Enter Password"/>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
  
  
  </>;
};

export default Resetpass;
