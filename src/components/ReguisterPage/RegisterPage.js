import React from "react";
import {Link} from "react-router-dom";
function RegisterPage(){
    return(
        <div className="auth-wrapper">
            <div style={{textAlign:'center'}}>
                <h3>Register</h3>
            </div>
             <form >
                <label>Email</label>
      <input name="email" type="email"/>
      <label>Name</label>
      <input name="name" type="name"/>
      <label>Password</label>
      <input name="password" type="password"/>
      <label>Password Confirm</label>
      <input name="password_confim" type="password"/>

      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <p>This field is required</p>} */}

      <input type="submit" />
    </form>
    <Link style={{color: 'gray' , textDecoration:'none'}} to="/login">이미 아이디가 있다면</Link>
        </div>
    )
}
export default RegisterPage;