import React from "react";
import LoginHeader from "./LoginHeader";
import Loginmiddle from "./Loginmiddle";
class Login extends React.Component{
    render(){
        return(
            <div>
             <LoginHeader />
             <Loginmiddle />
            </div>
        )
    }
}

export default Login