import React from 'react'

import './Card.css'
//import Photo from '../Public/images/fashion.jpg';
export const Card = (props) => {
    return (
    <>
   
<div className='col-md-4 col-10 mx-auto'>
<div className="card">
<img className='imgcard1' src={props.imgsrc}  alt="imgsrc" />
<div className="card-body">
<h5 className="card-title">{props.title}</h5>
    <p className="card-text" >{props.body}</p>

</div>
</div>
</div>


    </>
    )
}
export default Card;