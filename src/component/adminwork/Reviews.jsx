import React, { useEffect, Fragment } from "react";

import {connect} from 'react-redux';

import { getReviews,deleteReview} from "../../store/action/auth";

const Reviews = ({reviews,getReviews,deleteReview}) => {
    useEffect(() => {
        getReviews();
      });  

  

    const review=reviews.map(rev=>{
        return <tr key={rev._id}>
            <td>{rev.body}</td>
            <td className='hide-sm'>{rev.name}</td>
            <td className='hide-sm'>{rev.location}</td>
            <td>
                <button className='btn btn-danger' onClick={()=>deleteReview(rev._id)}>Delete</button>
            </td>
            
        </tr> 
    })
  
    return (
        <Fragment>
            <h2 className="my-3">Reviews</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Review</th>
                        <th className='hide-sm'>Name</th>
                        <th className='hide-sm'>Location</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{review}</tbody>

            </table>
        </Fragment>
            
        
    )
}


const mapStatetoProps=state=>{
    return{
        reviews:state.auth.reviews
    }
  }
  
  
  export default connect(mapStatetoProps,{getReviews,deleteReview}) (Reviews)
