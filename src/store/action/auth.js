import {LOGIN_SUCCESS,LOGOUT,GET_REVIEWS,GET_USERS}from "./types";
import axios from "axios";

export const logout = () => dispatch => {
    dispatch({
      type: LOGOUT
    });
   
  };

  export const loginUser = () =>dispatch => {
   
    dispatch({
        type: LOGIN_SUCCESS
    });
    
  };

  export const register = ({ body, name, location }) => async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    const bod = JSON.stringify({ body, name, location });
    // try {
    await axios
      .put("http://montageartmedia.herokuapp.com/api/profile/add-review", bod, config)
      .then(response => {
        console.log(response.data);
  
      })
      .catch(err => {
        
        console.log('err.response.data.error');

      });
  };


  export const register2 = ({ body, name, image }) => async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    const bod = JSON.stringify({ body, name, image });
    // try {
    await axios
      .put("http://montageartmedia.herokuapp.com/api/profile/add-user", bod, config)
      .then(response => {
        console.log(response.data);
  
      })
      .catch(err => {
        
        console.log('err.response.data.error');

      });
  };
  

  export const getReviews = () => async dispatch => {
     
        await axios
         .get("http://montageartmedia.herokuapp.com/api/profile/all-reviews")
         .then(response => {
           console.log(response.data);
           dispatch({
             type: GET_REVIEWS,
             payload: response.data
           });
         })
         .catch(err => {
           console.log('err.response.data');
           
         });
    
   };

   export const getUsers = () => async dispatch => {
     
    await axios
     .get("http://montageartmedia.herokuapp.com/api/profile/all-users")
     .then(response => {
       console.log(response.data);
       dispatch({
         type: GET_USERS,
         payload: response.data
       });
     })
     .catch(err => {
       console.log('err.response.data');
       
     });

};
export const deleteReview= (id)=> async dispatch=>{

  
  await axios
  .delete(`http://montageartmedia.herokuapp.com/api/profile/delete-review/${id}`,)
  .then(response => {
    
  })
  .catch(err => {
    console.log('error');
  });

}

export const deleteUser= (id)=> async dispatch=>{

  
  await axios
  .delete(`http://montageartmedia.herokuapp.com/api/profile/delete-user/${id}`,)
  .then(response => {
     
  })
  .catch(err => {
    console.log('error');
  });

}