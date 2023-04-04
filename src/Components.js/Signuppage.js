import React from "react";

function Signuppage(props) {
  function returnfunhandle() {
    props.returnvaluefromsignuppage();
  }
  if (props.signupProps === true) {
    return (
      <div className="Loginpage">
        <div className="Loginpage-div">
          <div className="Loginpage-div-div">
            <h1>Sign up</h1>
            <button onClick={returnfunhandle}>x</button>
          </div>
          <div className="signup-fullname">
            <input type="text" className="signup-fullname-input" />
            <label>Full Name</label>
          </div>
          <div className="sigup-email">
            <input type="text" className="sigup-email-input"  />
            <label>Email</label>
          </div>
          <div className="signup-checkbox">
            <input type="checkbox"/>
            <p>I agree to Zomato's Terms of Service, Privacy Policy and Content Policies</p>
          </div>
          <button className="Loginbtn">Create account</button>
          <hr />
          <button className="extra-gg-btn">Continue with Google</button>
          <p>
            Already have an account?<a href="">Login</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Signuppage;
