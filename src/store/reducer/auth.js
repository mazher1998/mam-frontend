import {LOGIN_SUCCESS,LOGOUT,GET_REVIEWS,GET_USERS} from "../action/types";
const initial_state = {
    users:[],
    reviews:[],
    isAuthenticated: false
    
  };

  const authReducer = (state = initial_state, action) => {
    
    switch (action.type) {
      
      
      case LOGIN_SUCCESS:
        return{
          ...state,
          isAuthenticated:true
        }       
      case LOGOUT: 
          return{
              ...state,
              isAuthenticated:false
          }
      case GET_REVIEWS:
            
            return{
              ...state,
              reviews:action.payload
            }
      case GET_USERS:
        
        return{
          ...state,
         users:action.payload
        }
      default:
          return state;
    
    }
  }
  export default authReducer;