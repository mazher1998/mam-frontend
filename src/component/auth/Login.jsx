import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { loginUser} from "../../store/action/auth";
import { Redirect} from "react-router-dom";

const Login = ({ isAuthenticated,loginUser}) => {
  const [formData, setformData] = useState({
    email: "",
    password: ""
  });
  
  
  let emaill = "mazherhussain1998@gmail.com";
  let passworrd = "12456";
  
  const { email, password } = formData;
  const onChange = e => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    
    console.log(formData.email,passworrd)
    if(formData.email=== emaill && formData.password === passworrd){
      console.log(loginUser)
      
      console.log(isAuthenticated)
      loginUser();
     
      
    }
  };
  if(isAuthenticated){
    return (
      <Redirect to="/dashboard"/>
    )
  }
  
  return (
<Fragment>
  <div className = 'abc'>
  <section className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign into Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => onChange(e)}
            name="password"
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      
    </section>
    </div>
    </Fragment>
  );
};

const mapStatetoProps=state=>{
  return{
    isAuthenticated:state.auth.isAuthenticated
  }
}


export default connect(mapStatetoProps, { loginUser })(Login);
