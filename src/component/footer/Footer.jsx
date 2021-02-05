import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
       <section>
<footer className="page-footer font-small unique-color-dark">
<div style={{backgroundColor: "black"}}>
    <div className="container">
    <div className="row py-4 d-flex align-items-center">
        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0" >
                <h6 className="mb-0" >Get connected with us on social networks!</h6>
        </div>
        <div className="col-md-6 col-lg-7 text-center text-md-right">
                <a className="fb-ic" href='https://www.facebook.com/mamweddings/'>
                <i className="fab fa-facebook-f white-text mr-4"> </i>
                </a>
                
                
                <a className="ins-ic" href='https://www.instagram.com/montageartmediaweddings/'>
                <i className="fab fa-instagram white-text"> </i>
                </a>
        </div>
      </div>
    </div>
  </div>
  <div className="container text-center text-md-left mt-5">
    <div className="row mt-3">
    <div className=" company col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold">MontageArtMedia</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
        <p>We are here to preserve the moments of your most precious day as we believe that memories are forever.</p>
    </div>
      
      <div className=" contacts col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 className="contact">Contact</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
        <p>
          <i className="fas fa-home mr-3" />Lahore</p>
        <p>
          <i className="fas fa-envelope mr-3" /> MontageArtMedia.com</p>
        <p>
          <i className="fas fa-phone mr-3" /> 03244814062 / 03400753492</p>
        
      </div>
    </div>
  </div>
  
</footer>
        </section>
    )
}
 export default Footer;