import React from 'react'

import { Link } from 'react-router-dom'
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
    <p className="card-text">{props.dis}</p>

<Link to= {props.link}>
<a className='btnns btn-responsive mx-auto'   buttonStyle='btn--outline'buttonSize='btn--large' >Gallery</a>

</Link>

</div>
</div>
</div>


    </>
    )
}
export default Card;


/*<div className='row'>
<div className= 'my-5'>
<h1 className='justify-content-center'>Our Services</h1>
    </div>
</div>*/