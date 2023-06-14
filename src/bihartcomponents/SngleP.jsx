import React from 'react'
// import productsData from "./products.json"
import saree1 from "./saree1.webp";
import saree1_1 from "./saree1.1.webp"
export const singleP = (props) => {

  return (
    <>
        <div>
            <div>
                <img src={saree1} alt='#'/>
            </div>
            <div>
                <p>"Mulberry silk extra weft sari"</p>
                <p>₹18000</p>
            </div>
        </div>
        <div>
            <div>
                <img src={saree1} alt='#'/>
            </div>
            <div>
                <p>"Mulberry silk extra weft sari"</p>
                <p>₹18000</p>
            </div>
        </div>
        <div>
            <div>
                <img src={saree1} alt='#'/>
            </div>
            <div>
                <p>"Mulberry silk extra weft sari"</p>
                <p>₹18000</p>
            </div>
        </div>
        <div>
            <div>
                <img src={saree1} alt='#'/>
            </div>
            <div>
                <p>"Mulberry silk extra weft sari"</p>
                <p>₹18000</p>
            </div>
        </div>
        {/* <div>
            <div>
                <img src={props.url[0]} alt='#'/>
            </div>
            <div>
                <p>{props.name}</p>
                <p>₹{props.price}</p>
            </div>
        </div> */}
    </>
  )
}