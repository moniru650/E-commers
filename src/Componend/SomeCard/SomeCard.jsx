import React from 'react'
import './SomeCardStyle.css'


export default function SomeCard() {
  return (
    <>
    <div className="somecard">
        <div className="container">
            <div className="row">

              <div className="col-lg-4 col-sm-12">
                <div className="card someone">
                 <h2 className='basic'>Basic</h2>
                 <p>6 pic chicken</p>
                 <p>6 pic beef chicken</p>
                 <p>6 pic burger</p>
                 <div className="mainbutton">
                 <button className='btn3'>ORDER NOW</button>
                 </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-12">
                <div className="card sometwo">
                <h2 className='standart'>Standart</h2>
                <p>6 pic chicken</p>
                 <p>6 pic beef chicken</p>
                 <p>6 pic burger</p>
                 <div className="mainbutton">
                 <button className='btn3'>ORDER NOW</button>
                 </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-12">
                <div className="card somethree">
                <h2 className='premium'> Premium</h2>
                <p>6 pic chicken</p>
                 <p>6 pic beef chicken</p>
                 <p>6 pic burger</p>
                 <div className="mainbutton">
                 <button className='btn3'>ORDER NOW</button>
                 </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
