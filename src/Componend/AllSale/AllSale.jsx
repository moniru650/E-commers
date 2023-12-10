import React from 'react'
import './AllSaleStyle.css'

export default function AllSale() {
  return (
    <>
    <div className="sale">
        <div className="container-fluid">
            <div className="row">

                <div className="col-lg-8 col-sm-12">
                 <div className="saleimg">
                  {/* <img src="IMG/SIX1.png" alt="" /> */}
                 </div>
                </div>

                <div className="col-lg-4 col-sm-12">
                 <div className="saletext1">
                 <div className='special'>
                     <h3>special</h3>
                     <h2 className=''>SALE 50% DISCOUNT</h2>
                     <h4 >ALL FOOD PRODUCTS</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis suscipit <br />
                      rerum eius assumenda dolor corporis eligendi magni voluptate! Expedita corporis officia <br />
                      possimus, deserunt id quia repellendus nobis accusantium sed assumenda?</p>
                      <button className='btn3'>ORDER NOW</button>
                    </div>
                 </div>
                </div>

            </div>
        </div>
    </div>
    </>
)
};
