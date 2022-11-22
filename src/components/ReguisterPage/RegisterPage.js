import React from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form"; 
function RegisterPage(){
    const { register, watch, formState: { errors }, handleSubmit } = useForm();

  console.log(watch("email"));

    return(
        <div className="auth-wrapper">
            <div style={{textAlign:'center'}}>
                <h3>Register</h3>
            </div>
             <form >
                <label>Email</label>
      <input name="email" type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}/>
      {errors.email && <p>This email field is required</p>}
        <label>Name</label>
      <input name="name" type="name" {...register("name", { required: true, maxLength: 10 })}/>
      {errors.name && errors.name.type === "required" && <p>This name field is required</p>}
      {errors.name && errors.name.type === "maxLength" && <p>Your input exceed maximum length</p>}
      <label>Password</label>
      <input name="password" type="password"
      {...register("password", { required: true, minLength: 6 })}
      />
      <label>Password Confirm</label>
      <input name="password_confim" type="password"
      {...register("password_confirm", {
        required: true,    
        
        
        })}/>

      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <p>This field is required</p>} */}

      <input type="submit" />
    </form>
    <Link style={{ color: 'gray', textDecoration: 'none' }} to="login">이미 아이디가 있다면... </Link>
        </div>
    )
}
export default RegisterPage;