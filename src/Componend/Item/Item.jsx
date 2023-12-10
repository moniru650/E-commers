import React from 'react'
import './ItemStyle.css'
import './Itemres.css'

export default function Item() {
  return (
    <>
    <div className='Item'>
        <div className="container-fluid">
            <div className="row one">
                <div className="col-lg-8 col-sm-12">
                 <div className='mainitem'>
                  <div className="mainparent">
                   <h2>Peanut butter </h2>
                  </div>
                  <div className="mainchild">
                   <h3>$45</h3>
                  </div>
                 </div>
                 <p className='justify'>Lorem Ipsum available, but the majority have suffered alteration insome form, <br />
                  by injected humour, or randomised words which don'tlook even slightly believable. <br />
                   If you are going to use a passageof Lorem Ipsum, you need to be sure</p>
                   <button className='btn2'>ORDER NOW</button>
                </div>

                <div className="col-lg-4 col-sm-12">
                  <div className="itemimg">
                    <img src="IMG/For1.png" alt="" className='img-fluid' />
                  </div>
                </div>
            </div>

            <div className="row two">
                <div className="col-lg-8 col-sm-12">
                 <div className='mainitem'>
                  <div className="mainparent">
                   <h2>Jambalaya    </h2>
                  </div>
                  <div className="mainchild">
                   <h3>$35</h3>
                  </div>
                 </div>
                 <p className='justify'>Lorem Ipsum available, but the majority have suffered alteration insome form, <br />
                  by injected humour, or randomised words which don'tlook even slightly believable. <br />
                   If you are going to use a passageof Lorem Ipsum, you need to be sure</p>
                   <button className='btn2'>ORDER NOW</button>
                </div>

                <div className="col-lg-4 col-sm-12">
                  <div className="itemimg">
                    <img src="IMG/Four2.png" alt="" className='img-fluid' />
                  </div>
                </div>
            </div>

            <div className="row two">
                <div className="col-lg-8 col-sm-12">
                 <div className='mainitem'>
                  <div className="mainparent">
                   <h2>Pumpkin pie  </h2>
                  </div>
                  <div className="mainchild">
                   <h3>$55</h3>
                  </div>
                 </div>
                 <p className='justify'>Lorem Ipsum available, but the majority have suffered alteration insome form, <br />
                  by injected humour, or randomised words which don'tlook even slightly believable. <br />
                   If you are going to use a passageof Lorem Ipsum, you need to be sure</p>
                   <button className='btn2'>ORDER NOW</button>
                </div>

                <div className="col-lg-4 col-sm-12">
                  <div className="itemimg">
                    <img src="IMG/Four3.png" alt="" className='img-fluid' />
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
