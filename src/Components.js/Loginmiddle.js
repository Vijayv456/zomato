import React from "react";
import phone from "./images/phonezomato.avif"
import "./css/Loginmiddle.css"
import Loginpageinput from "./Loginpageinput";

class Loginmiddle extends React.Component{
    constructor(){
        super()
        this.state={
            radio:""
        }

    }
    handleChange = (val) =>{
        this.setState({radio : val.target.value})


    }
    render(){
        const {radio} =this.state
        return(
            <div className="Loginmiddle">
               <img src={phone} alt="phone" className="phone"></img>
               <div className="Loginmiddle-head">
                <h1>Get the Zomato App</h1>
                <p>We will send you a link, open it on your phone to download the app</p>
                <div className="radio-btn" onChange={this.handleChange}>   
                <input type="radio" name="login" id="n"  value="email" className="radio-mail"></input>
                <label htmlFor="n" className="radio-mail-label">Email</label>
                <input type="radio" name="login" id="ni" value="phone" className="radio-mail"></input>
                <label htmlFor="ni" className="radio-mail-label">Phone</label>
                </div>
                <Loginpageinput propsval={radio} />
               </div>
            </div>
        )
        
    }
   
}

export default Loginmiddle;