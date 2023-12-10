import React from 'react'
import { Link } from 'react-router-dom'
import './LastCardStyle.css'
import './Lastres.css'

export default function LastCard() {
  return (
    <>
      <div className="lastcard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="card">
                <div className="lastimg">
                  <img src="IMG/Eight1.png" alt="" className='img-fluid' />
                  <div class="link_box">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12">
              <div className="card">
                <h2 className='eat'>Eat food. Not too muchmostly plants.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum et aperiam voluptatum expedita amet? Blanditiis magni repellendus asperiores explicabo odit.</p>
                <div className="onbut">
                  <button className='btn3'>ORDER NOW</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12">
              <div className="card">
                <div className="lastimg">
                <img src="IMG/Eight2.png" alt="" className='img-fluid' />
                <div class="link_box">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
