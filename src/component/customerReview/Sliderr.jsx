import React, { useEffect,useState } from "react";
import {connect} from 'react-redux';
import { getReviews} from "../../store/action/auth";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Slider.css'
const Sliderr = ({reviews,getReviews}) => {
 
  useEffect(() => {
    getReviews();
    console.log(reviews);
  },[]); 
  const settings = {

    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows : true,
    slideToScroll: 1,
    className: 'slides'
}
  
    return (
        <div className="reviewBody">
    
  <div className='containerr'>
            <div className= 'row'>

            <h2>What our customers say about us</h2>
            
            <Slider className='slde' {...settings}>
            
            
                { reviews.map((revieww) =>{
                 return(
                     <div key = {revieww._id}>
                         <p className="testimonial">{revieww.body}</p>
                         <p className = 'overview'><b>{revieww.name}</b>,            {revieww.location} </p>
                     </div>
                 )   
             
            })
                }
            
                </Slider>    
                </div>
            </div>
            </div>     
  
  



        
    )
}
const mapStatetoProps=state=>{
  return{
    reviews:state.auth.reviews
  }
}


export default connect(mapStatetoProps,{getReviews})  (Sliderr);