import React, { useState } from 'react'
import "./productStyles.css";

import saree1 from "./saree1.webp";
import saree1_1 from "./saree1.1.webp"
import {BiPlus, BiMinus} from "react-icons/bi"
import Slider from 'react-slider';
import { Link } from 'react-router-dom';
// import { singleP } from './SngleP';
const MIN=100;
const MAX=12000;

export const Products = () => {
    const [fabric, setFabric]=useState(false)
    const [price, setPrice]=useState(false)
    const [color, setColor]=useState(false)
   
   const [values, setValues] =useState([MIN,MAX])
   console.log('values', values);

    const[sarees, setSarees]=useState(true); 
    const[scarves, setScarves]=useState(false); 
    const[dupattas, setDupattas]=useState(false); 
    const[kurti, setKurti]=useState(false); 
    const[mensKurta, setMensKurta]=useState(false); 
    const[cropTop, setCropTop]=useState(false); 
    const[belt, setBelt]=useState(false); 
    const[cushion, setCushion]=useState(false); 
    const[throws, setThrows]=useState(false); 
    const[paintings, setPaintings]=useState(false); 
    const[bags, setBags]=useState(false); 
    const[pocketSquare, setPocketSquare]=useState(false); 
    const[dolls, setDolls]=useState(false);

    const handleSaree=()=>{setSarees(true);setScarves(false);setDupattas(false);setKurti(false);setMensKurta(false);setCropTop(false);setBelt(false);setCushion(false);setThrows(false);setPaintings(false);setBags(false);setPocketSquare(false);setDolls(false)} 
    const handleScarves=()=>{setSarees(false);setScarves(true);setDupattas(false);setKurti(false);setMensKurta(false);setCropTop(false);setBelt(false);setCushion(false);setThrows(false);setPaintings(false);setBags(false);setPocketSquare(false);setDolls(false)}
    const handleDupattas=()=>{setSarees(false);setScarves(false);setDupattas(true);setKurti(false);setMensKurta(false);setCropTop(false);setBelt(false);setCushion(false);setThrows(false);setPaintings(false);setBags(false);setPocketSquare(false);setDolls(false)}
    const handleKurti=()=>{setSarees(false);setScarves(false);setDupattas(false);setKurti(true);setMensKurta(false);setCropTop(false);setBelt(false);setCushion(false);setThrows(false);setPaintings(false);setBags(false);setPocketSquare(false);setDolls(false)}
    const handleMensKurta=()=>{setSarees(false);setScarves(false);setDupattas(false);setKurti(false);setMensKurta(true);setCropTop(false);setBelt(false);setCushion(false);setThrows(false);setPaintings(false);setBags(false);setPocketSquare(false);setDolls(false)}
    const handleCropTop=()=>{setSarees(false);setScarves(false);setDupattas(false);setKurti(false);setMensKurta(false);setCropTop(true);setBelt(false);setCushion(false);setThrows(false);setPaintings(false);setBags(false);setPocketSquare(false);setDolls(false)}
    const handleBelt=()=>{setSarees(false);setScarves(false);setDupattas(false);setKurti(false);setMensKurta(false);setCropTop(false);setBelt(true);setCushion(false);setThrows(false);setPaintings(false);setBags(false);setPocketSquare(false);setDolls(false)}
    const handleCushion=()=>{setSarees(false);setScarves(false);setDupattas(false);setKurti(false);setMensKurta(false);setCropTop(false);setBelt(false);setCushion(true);setThrows(false);setPaintings(false);setBags(false);setPocketSquare(false);setDolls(false)}
    const handleThrows=()=>{setSarees(false);setScarves(false);setDupattas(false);setKurti(false);setMensKurta(false);setCropTop(false);setBelt(false);setCushion(false);setThrows(true);setPaintings(false);setBags(false);setPocketSquare(false);setDolls(false)}
    const handlePaintings=()=>{setSarees(false);setScarves(false);setDupattas(false);setKurti(false);setMensKurta(false);setCropTop(false);setBelt(false);setCushion(false);setThrows(false);setPaintings(true);setBags(false);setPocketSquare(false);setDolls(false)}
    const handleBags=()=>{setSarees(false);setScarves(false);setDupattas(false);setKurti(false);setMensKurta(false);setCropTop(false);setBelt(false);setCushion(false);setThrows(false);setPaintings(false);setBags(true);setPocketSquare(false);setDolls(false)}
    const handlePocketSquare=()=>{setSarees(false);setScarves(false);setDupattas(false);setKurti(false);setMensKurta(false);setCropTop(false);setBelt(false);setCushion(false);setThrows(false);setPaintings(false);setBags(false);setPocketSquare(true);setDolls(false)}
    const handleDolls=()=>{setSarees(false);setScarves(false);setDupattas(false);setKurti(false);setMensKurta(false);setCropTop(false);setBelt(false);setCushion(false);setThrows(false);setPaintings(false);setBags(false);setPocketSquare(false);setDolls(true)}
  
    const [showImg, setShowImg]=useState(false)
    const handleShow=()=>{setShowImg(true)}
    const handleNonShow=()=>{setShowImg(false)}
    return (
    <div className='product-container'>
        <div className='product-c-header'>
            {sarees ? "Sarees" : scarves ? "Scarves" : dupattas ? "Dupattas" : kurti ? "Kurti" :
            mensKurta?"Mens Kurta":cropTop?"Crop Top" :belt?"Belt":cushion?"Cushion":
            throws?"Throws":paintings?"Paintings":bags?"Bags":pocketSquare?"Pocket Square":
            dolls?"Dolls":""}
        </div>
        <div className='product-c'>
            <div className='product-c-left'>
                <div className='left-filterBy'>
                    <h2 className='left-filterBy-h2'>Filter by</h2>
                    <hr/>
                    <div className='Fabric-c'>
                        <div className='Fabric-c-upper'>
                            <p className='Fabric-c-upper-p'>Fabric</p>
                            <span onClick={()=>setFabric(!fabric)}>{fabric ? <BiMinus/> : <BiPlus/>}</span>
                        </div>
                        {
                            fabric &&
                            <div className='Fabric-c-lower'>
                                <h4>All</h4>
                                <div>
                                    <p>Silk</p>
                                    <p>Cotton Silk</p>
                                    <p>Cotton</p>
                                </div>
                            </div>
                        }
                    </div>
                    <hr/>
                    <div className='price-c'>
                        <div className='price-c-upper'>
                            <p  className='price-c-upper-p'>Price</p>
                            <span onClick={()=>setPrice(!price)}>{price ? <BiMinus/> : <BiPlus/>}</span>
                        </div>
                        {
                            price &&
                            <div className='Fabric-c-lower'>
                                <div className='price-value'>₹{values[0]} - ₹{values[1]}</div>
                                {/* <small className='priceRange'>current Range: ₹{values[1] - values[0]}</small> */}
                                <Slider 
                                    className='slider'
                                    value={values}
                                    min={MIN}
                                    max={MAX}
                                    onChange={setValues}
                                />
                            </div>
                        }
                    </div>
                    <hr/>
                    <div className='color-c'>
                        <div className='color-c-upper'>
                            <p className='color-c-upper-p'>Color</p>
                            <span onClick={()=>setColor(!color)}>{color ? <BiMinus/> : <BiPlus/>}</span>
                        </div>
                        {
                            color &&
                            <div className='Fabric-c-lower'>
                                <span>red </span>
                                <span>red </span>
                                <span>red </span>
                                <span>red </span>
                                <span>red </span>
                                <span>red </span>
                                <span>red </span>
                                <span>red </span>
                                <span>red </span>
                            </div>
                        }
                    </div>
                </div>
                <div className='left-products'>
                    <h2 className='left-products-h2'>Products</h2>
                    <div className='left-products-c'>
                        <div className='left-products-c-div' onClick={handleSaree}><Link className='left-products-c-link' to='/'><p>Sarees</p></Link></div>
                        <div className='left-products-c-div' onClick={handleScarves}><Link className='left-products-c-link' to='/'><p>Scarves</p></Link></div>
                        <div className='left-products-c-div' onClick={handleDupattas}><Link className='left-products-c-link' to='/'><p>Dupattas</p></Link></div>
                        <div className='left-products-c-div' onClick={handleKurti}><Link className='left-products-c-link'  to='/'><p>Kurti</p></Link></div>
                        <div className='left-products-c-div' onClick={handleMensKurta}><Link className='left-products-c-link' to='/'><p>Men's Kurta</p></Link></div>
                        <div className='left-products-c-div' onClick={handleCropTop}><Link className='left-products-c-link' to='/'><p>Crop top</p></Link></div>
                        <div className='left-products-c-div' onClick={handleBelt}><Link className='left-products-c-link'  to='/'><p>Belt</p></Link></div>
                        <div className='left-products-c-div' onClick={handleCushion}><Link className='left-products-c-link' to='/'><p>Cushion</p></Link></div>
                        <div className='left-products-c-div' onClick={handleThrows}><Link className='left-products-c-link' to='/'><p>Throws</p></Link></div>
                        <div className='left-products-c-div' onClick={handlePaintings}>< Link className='left-products-c-link' to='/'><p>Paintings</p></Link></div>
                        <div className='left-products-c-div' onClick={handleBags}><Link className='left-products-c-link'  to='/'><p>Bags</p></Link></div>
                        <div className='left-products-c-div' onClick={handlePocketSquare }><Link className='left-products-c-link' to='/'><p>Pocket Square</p></Link></div>
                        <div className='left-products-c-div' onClick={handleDolls}><Link className='left-products-c-link'  to='/'><p>Dolls</p></Link></div>
                    </div>
                </div>
            </div>
            <div className='product-c-right'>
                {/* <singleP/> */}
                <div className='product-right-con'>
                    <div className='product-right-img-c'>
                        <img onMouseOut={handleNonShow} onMouseEnter={handleShow} className='product-right-img' src={showImg ? saree1_1 :saree1} alt='#'/>
                        { showImg &&
                            <div className='quick-view-c'>
                                <p className='quick-view-c-p'>Quick View</p>
                            </div>
                        }
                    </div>
                    <div>
                        <p className='product-right-img-p'>Mulberry silk extra weft sari</p>
                        <p className='product-right-img-p'>₹18000</p>
                    </div>
                </div>
                <div className='product-right-con'>
                    <div className='product-right-img-c'>
                        <img className='product-right-img' src={saree1} alt='#'/>
                    </div>
                    <div>
                        <p className='product-right-img-p'>"Mulberry silk extra weft sari"</p>
                        <p className='product-right-img-p'>₹18000</p>
                    </div>
                </div>
                <div className='product-right-con'>
                    <div className='product-right-img-c'>
                        <img className='product-right-img' src={saree1} alt='#'/>
                    </div>
                    <div>
                        <p className='product-right-img-p'>"Mulberry silk extra weft sari"</p>
                        <p className='product-right-img-p'>₹18000</p>
                    </div>
                </div>
                <div className='product-right-con'>
                    <div className='product-right-img-c'>
                        <img className='product-right-img' src={saree1} alt='#'/>
                    </div>
                    <div>
                        <p className='product-right-img-p'>"Mulberry silk extra weft sari"</p>
                        <p className='product-right-img-p'>₹18000</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
