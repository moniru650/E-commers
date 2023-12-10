import React from 'react';
import './FooterStyle.css';
import './Footerres.css'

export default function Footer(){
  return (
    <>
    <div className="foot">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 imgg2">
          <img src="IMG/icon1.png" alt="" />
          </div>
          <div className="col-lg-4">
           <div className="footimg">
           <i class="fa-solid fa-kitchen-set"></i>
           </div>
           <div className="big">
           <h1 className=''>AMERICAN  FOOD</h1>
           <h3>The Best Test Food</h3>
           </div>
           <div className="icon">
            <a href="">
            <i class="fa-brands fa-facebook"></i>
            </a>
           <a href="https://www.linkedin.com/in/md-moniruzzaman-38839a233/" target='Blank'>
           <i class="fa-brands fa-linkedin-in"/>
           </a>
           <a href="">
           <i class="fa-brands fa-google-plus-g"></i>
           </a>
            <a href="https://web.whatsapp.com/" target='Blank'>
            <i class="fa-brands fa-square-whatsapp"></i>
            </a>

           </div>
           <div className="side">
            <h4>WWW.WEBSIDE.COM</h4>
           </div>
          </div>
          <div className="col-lg-4 imgg1">
           <img src="IMG/icon1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
