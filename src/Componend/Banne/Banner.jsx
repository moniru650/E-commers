import React from 'react';
import './Banner.css';
import './Bannerres.css'

export default function Banner(){
  return (
    <>
    <div className='Head'>
        <div className="container-fluid">
            <div className='banner1'>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className='text'>
                      <h2>American Food</h2>
                      <h3>The Best Taste Food</h3>
                      <h5></h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                       numquam libero veniam voluptas, excepturi blanditiis <br /> recusandae deserunt eveniet!</p>
                    </div>
                    <div className='bicon'>
                     <button className='btn1'>ORDER NOW</button>
                     <i class="fa-solid fa-arrow-left"></i>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">

                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
