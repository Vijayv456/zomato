import React from "react";
import "./css/Loginpage.css"
function Loginpage(props){
    const numbers=["+91","+60","+63","+94","+56","+1","+64","+27","+353","+44","+971","+420","+65","+351","+974","+61","+421","+55","+48","+62","+961","+39","+90"];
   
   function handleclick(){
    props.returnvalue()
   }
    if(props.loginprops === true){
    return(
        <div className="Loginpage">
            <div className="Loginpage-div ">
        <div className="Loginpage-div-div">
            <h1>Login</h1>
            <button onClick={handleclick}>x</button>
        </div>
        <div className="login-phone-div">
            <input type="text" className="type-no" placeholder="Phone"/>
            <select class="phonecode">
                {numbers.map(num=>{
                    return(<option>{num}</option>)
                })}
            </select></div>
            <button className="Loginbtn">Send One Time Password</button>
            <hr/>
            <button className="extra-gg-btn">Continue with Email</button>
            <br/>
            <button className="extra-gg-btn">Continue with Google</button>
            <hr/>
            <p>New to zomato?<a href="">Create account</a></p>
    </div></div>
    )
   }
   
}


export default Loginpage