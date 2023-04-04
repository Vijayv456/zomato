import React from "react";

const numbers=["+91","+60","+63","+94","+56","+1","+64","+27","+353","+44","+971","+420","+65","+351","+974","+61","+421","+55","+48","+62","+961","+39","+90"]
class Loginpageinput extends React.Component{
render(){
    if(this.props.propsval === "phone"){
        return(
            <div className="phone-div">
                <input type="text" className="text-type-no" placeholder="type here..."/>
                <select class="phone-code">
                    {numbers.map(num=>{
                        return(<option>{num}</option>)
                    })}
                </select>
                <button className="Share-app-btn">Share App Link</button>
            </div>
        )
    }else{
        return(
         <div class="email-input-login">
               <input type="text" className="text-type" />
               <label className="text-type-label">Email</label>
               <button className="Share-app-btn">Share App Link</button>
         </div>
        )
    }
}    
} 

export default Loginpageinput;