import React, { useEffect } from "react";
import {connect} from 'react-redux';

import { getUsers} from "../../store/action/auth";
import Card from './Card';
import './Member.css';

export const Members = ({users,getUsers}) => {
    useEffect(() => {
        getUsers();
      },[]); 
    return (
        <section className = 'ourteambackground2'>
    <section id= 'services'>
    
    <div className= "container-fluid mb-5" id= 'Services' >

        <div className='row'>
        <div className='col-10 mx-auto'>
            <div className='row gy-5 gx-5' >
            {
                users.map((user) => {
        return <Card key={user._id}  
        imgsrc={user.image}
            title={user.name}
            body = {user.body}
        />      
                })
            }    
            
        </div>

            </div>
            
        </div>
        <h1 className='ourTeamText'>Our Team</h1>
        </div>

    


    </section>
    </section>
    )
}
const mapStatetoProps=state=>{
    return{
        users:state.auth.users
    }
  }
  
  
  export default connect(mapStatetoProps,{getUsers}) (Members)