import React, { useState, Fragment } from "react";

import { Redirect} from "react-router-dom";
import { register} from "../../store/action/auth";
import { connect } from "react-redux";

import {Link } from "react-router-dom";

const AddReview = ({ isAuthenticated,register}) => {
   
   const [formData,setFromData]=useState({
    body:'',
    name:'',
    location:''  
   })

const onChange=e=>setFromData({...formData,[e.target.name]:e.target.value})

const onSubmit=e=>{
  e.preventDefault();
  register({body,name,location})
  return (
    <Redirect to="/dashboard"/>
  )
}
if(!isAuthenticated){
  return (
    <Redirect to="/logout"/>
  )
}
   const{
    body,
    name,
    location
   }=formData;  return (
    <Fragment>
      <div className = 'abc'>
      <h1 className="large text-primary">Add Customers Review</h1>
      
      <small style={{ color: "red" }}>* = required field</small>
      <form className="form" onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Enter Review"
            name="body"
            value={body} onChange={e=>onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Enter full Name"
            name="name"
            required
            value={name} onChange={e=>onChange(e)}
          />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Enter city and town name" 
          value={location} onChange={e=>onChange(e)}
          name="location" />
        </div>
       
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
      </div>
    </Fragment>
  );
};


const mapStatetoProps=state=>{
  return{
    isAuthenticated:state.auth.isAuthenticated
  }
}


export default connect(mapStatetoProps, { register })(AddReview);
