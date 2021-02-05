import React, { useEffect, Fragment } from "react";

import {connect} from 'react-redux';

import { getUsers,deleteUser} from "../../store/action/auth";

const TeamMember = ({users,getUsers,deleteUser}) => {
    useEffect(() => {
        getUsers();
      });  

    const useer=users.map(user=>{
        return <tr key={user._id}>
            <td>{user.body}</td>
            <td className='hide-sm'>{user.name}</td>
            <td className='hide-sm'>{user.image}</td>
            <td>
                <button className='btn btn-danger' onClick={()=>deleteUser(user._id)}>Delete</button>
            </td>
            
        </tr> 
    })
  
    return (
        <Fragment>
            <h2 className="my-3">Team Members</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Details</th>
                        <th className='hide-sm'>Name</th>
                        <th className='hide-sm'>image</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{useer}</tbody>

            </table>
        </Fragment>
            
        
    )
}


const mapStatetoProps=state=>{
    return{
        users:state.auth.users
    }
  }
  
  
  export default connect(mapStatetoProps,{getUsers,deleteUser}) (TeamMember)
