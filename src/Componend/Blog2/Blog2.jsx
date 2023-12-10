import React from 'react'
import './BlogStyle.css'
import './Blogres.css'

export default function Blog2() {
  return (
    <>
    <div className='Blog2'>
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6 col-sm-6">
                <div className='bloging'>
                <img src="IMG/Two.png" alt="" className='img-fluid' />
                </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                <div className='blok'>
                <h2>Let food be thy medicinemedicine be thy food.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vero cupiditate aliquid optio tempora facere? Quas cupiditate, odit beatae illum quaerat adipisci officiis ullam similique, sunt, modi sint perspiciatis mollitia!
                    <br />
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea molestias, sit maiores odit error earum ab quae consequuntur fugit laborum inventore consequatur at adipisci quam ipsa, 
                </p>
                </div>
                <div className='bicon'>
                <button className='btn1'>ORDER NOW</button>
                <i class="fa-solid fa-arrow-left"></i>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
