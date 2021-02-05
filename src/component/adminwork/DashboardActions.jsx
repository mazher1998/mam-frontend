import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { logout} from "../../store/action/auth";
import { connect } from "react-redux";
import { Redirect} from "react-router-dom";
import Reviews from './Reviews'
import TeamMembers from './TeamMember'

const DashboardActions = ({logout,isAuthenticated}) => {
  if(!isAuthenticated){
    
    return (
      <Redirect to="/logout"/>
    )
  }
  

  return (
  <Fragment>
    <div className = 'abc'>
      <div className="dash-buttons">
        <Link to="/add-review" className="btn btn-light">
          <i className="fas fa-user-circle text-primary"></i> Add Review
        </Link>
        <Link to="/add-team-member" className="btn btn-light">
          <i className="fab fa-black-tie text-primary"></i> Add Team Member
        </Link>
        <button onClick= {
          ()=>{
           
           logout();
           
          }
        }>Logout</button>
      </div>
      <TeamMembers/>
    <Reviews/>
   </div>
</Fragment>
    
  );
};

const mapStatetoProps=state=>{
  return{
    isAuthenticated:state.auth.isAuthenticated
  }
}


export default connect(mapStatetoProps, {logout})(DashboardActions);