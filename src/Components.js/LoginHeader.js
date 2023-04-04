import React from "react";
import headerimg from "./images/zomatoicon.avif"
import "./css/LoginHeader.css"
import Loginpage from "./Loginpage";
import Signuppage from "./Signuppage";

class LoginHeader extends React.Component{

    constructor(){
        super()
        this.state={
            login:false,
            signup:false
        }
    }
    handleonclick =()=>{
        this.setState({login : true})
    }
   handlereturn =() =>{
    this.setState({ login : false })
   }
   Signuphandle=()=>{
    this.setState({ signup : true })
   }
   returnvaluefromsign=()=>{
    this.setState({ signup : false })
   }
    render(){
        return(
            <div className="Container">
                <img src={headerimg} alt="" className="loginheader"></img>
               <div className="btn"> 
               <button className="headerbtn" onClick={this.handleonclick}>Log in</button>
                <button className="headerbtn" onClick={this.Signuphandle}>Sign up</button>
                <Loginpage loginprops={this.state.login} returnvalue={this.handlereturn} />
                <Signuppage signupProps={this.state.signup} returnvaluefromsignuppage={this.returnvaluefromsign}/>
                </div>
            </div>
        )
    }
}


export default LoginHeader