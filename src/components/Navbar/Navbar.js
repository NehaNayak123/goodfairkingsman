import React, { useState } from 'react'
// import "./navbar.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';

import { AiOutlineClose,AiOutlinePlusCircle,AiOutlineMinusCircle} from "react-icons/ai"
import { FaBaby} from "react-icons/fa"
import { BiChild} from "react-icons/bi"

import { GiCommercialAirplane,GiPerson} from "react-icons/gi"
import {MdTrain,MdAccountBox} from "react-icons/md"
import {BsFillTaxiFrontFill} from "react-icons/bs"
import {TbArrowsExchange2} from "react-icons/tb"

import suvBlack from "./suvBlack.png";
import suvWhite from "./suvWhite.png";
import hatchbackBlack from "./hatchbackBlack.png";
import hatchbackWhite from "./hatchbackWhite.png";
import sedanBlack from "./sadenBlack.png";
import sedanWhite from "./sadenWhite.png";
import flightImg from "./flightImg.avif"
import trainImg from "./trainImg.jpg"
import taxiImg from "./taxiImg.jpeg"

import logo from "./goodfarelogo.png"

const Navbar = () => {
  const [flight, setFlight]=useState(true)//true
  const [oneWay, setOneWay]=useState(true)
  const [roundTrip, setRoundTrip]=useState(false)
  const [train, setTrain]=useState(false)
  const [taxi, setTaxi]=useState(false)
  const [acNon, setAcNon]=useState(true)
  const [ac, setAc]=useState(false)
  const [non, setNon]=useState(false)
  const [suv, setSuv]=useState(true);
  const [hatchback, setHatchBack]=useState(false);
  const [sedan, setSedan]=useState(false);

  const handleFlight=()=>{setFlight(true);setTrain(false);setTaxi(false)}
  const handleTrain=()=>{setTrain(true);setFlight(false);setTaxi(false);setTraveller(false)}
  const handleTaxi=()=>{setTaxi(true);setFlight(false);setTrain(false);}
  const handleOneWay=()=>{setOneWay(true);setRoundTrip(false)}
  const handleRoundTrip=()=>{setRoundTrip(true);setOneWay(false)}
  const handleACNonAC=()=>{setAcNon(true);setAc(false);setNon(false)}
  const handleAC=()=>{setAc(true);setAcNon(false);setNon(false)}
  const handleNonAC=()=>{setNon(true);setAcNon(false);setAc(false);}
  const handleSuv=()=>{setSuv(true);setHatchBack(false);setSedan(false)}
  const handleHatchback=()=>{setHatchBack(true);setSuv(false);setSedan(false)}
  const handleSedan=()=>{setSedan(true);setSuv(false);setHatchBack(false)}

  // /////////////////
  const [traveller, setTraveller]=useState(false)
  const handleTravellers=(e)=>{
    e.preventDefault();
    setTraveller(!traveller)
    console.log("jo")
  }
  const [noOfAdults, setNoOfAdults]=useState(0)
  const noOfAdultsPlus=()=>{setNoOfAdults(noOfAdults+1)}
  const noOfAdultsMinus=()=>{if(noOfAdults>0){setNoOfAdults(noOfAdults-1)}}
  const [noOfChildren, setNoOfChildren]=useState(0)
  const noOfChildrenPlus=()=>{setNoOfChildren(noOfChildren+1)}
  const noOfChildrenMinus=()=>{if(noOfChildren>0)setNoOfChildren(noOfChildren-1)}
  const [noOfInfant, setNoOfInfant]=useState(0)
  const noOfInfantPlus=()=>{setNoOfInfant(noOfInfant+1)}
  const noOfInfantMinus=()=>{if(noOfInfant>0)setNoOfInfant(noOfInfant-1)}

  const [detail, setDetail]=useState("choose (2 Adult, 2 Children)")
  const handleDone=()=>{
    if(noOfAdults>0 && noOfChildren>0 && noOfInfant>0){
      setDetail(`${noOfAdults} Adult, ${noOfChildren} Children, ${noOfInfant} Infant`)
    }
    else if(noOfAdults>0 && noOfChildren>0){
      setDetail(`${noOfAdults} Adult, ${noOfChildren} Children`)
    }
    else if(noOfChildren>0 && noOfInfant>0){
      setDetail(`${noOfChildren} Children, ${noOfInfant} Infant`)
    }
    else if(noOfAdults>0 && noOfInfant>0){
      setDetail(`${noOfAdults} Adult, ${noOfInfant} Infant`)
    }
    else if(noOfAdults>0){
      setDetail(`${noOfAdults} Adult`)
    }
    else if(noOfChildren){
      setDetail(`${noOfChildren} Children`)
    }
    else if(noOfInfant>0){
      setDetail(`${noOfInfant} Infant`)
    }
    setTraveller(false)
  }
  return (
    <div className='nav-container'>
      <img className='hero-img'  src={flight ? flightImg :(train ? trainImg :(taxi ? taxiImg : flightImg))} alt='/'/>
      <div className='nav-c'>
        <div className='navbar-c'>
            {/* <div className='navbar-left'>Goodfare</div> */}
            <div className='navbar-left'><img style={{paddingTop:"2rem"}} width="100px" src={logo} alt='logo'/></div>
            <div className='navbar-right'><MdAccountBox className='nav-icon'/></div>
        </div>

        <div>
        <div className='buttons'>
          <button onClick={handleFlight} className={flight ? 'buttons-btn-flightBtn-active flightBtn' :'buttons-btn flightBtn'}><GiCommercialAirplane/>&nbsp;Flights</button>
          <button onClick={handleTrain} className={train ? 'buttons-btn-flightBtn-active trainBtn' :'buttons-btn trainBtn'}><MdTrain/>&nbsp;Trains</button>
          <button onClick={handleTaxi} className={taxi ? 'buttons-btn-flightBtn-active taxiBtn' :'buttons-btn taxiBtn'}><BsFillTaxiFrontFill/>&nbsp;Taxi</button>
        </div>

        {
          flight &&
          <div className='form-container'>
            {/* <span className='form-container-span'><GiCommercialAirplane/>&nbsp;Flight</span> */}
            <div className='form'>
              <div className='form-dom-int-c'>
                <div>
                  <input type='radio' id='domestic'/>
                  <label className='form-input-dom' htmlFor="domestic"> Domestic &nbsp;&nbsp;</label>
                </div>
                <div>
                  <input type='radio' id='international'/>
                  <label className='form-input-dom' htmlFor="international"> International</label>
                </div>
              </div>

              <div className='form-one-round'>
                <div className={oneWay ? 'form-one-round-div-active':'form-one-round-div'}>
                  <button onClick={handleOneWay} className={oneWay ? 'form-one-round-btn-active':'form-one-round-btn'}>One way</button>
                </div>
                <div className={roundTrip ? 'form-one-round-div-active' :'form-one-round-div'}>
                  <button onClick={handleRoundTrip} className={roundTrip ? 'form-one-round-btn-active':'form-one-round-btn'}>Round-trip</button>
                </div>
              </div>
              {
                oneWay && 
                <>
                  <div className='form-from-to'>
                    <div className='form-from'>
                      <p className='form-from-p'>From</p>
                      <input className='form-from-input' type='text'/>
                    </div>
                    <div className='form-from-to-arrow'>&nbsp;
                      <TbArrowsExchange2 className='from-to-arrow'/>&nbsp;
                    </div>
                    <div className='form-to'>
                      <p className='form-to-p'>To</p>
                      <input className='form-to-input' type='text'/>
                    </div>
                  </div>

                  <div className='form-departure-date'>
                      <label className='form-departure-date-label'>Departure Date</label>
                      <input className='form-departure-date-input' type='date'/>
                  </div>

                  <div className='form-travellers'>
                    <label htmlFor="form-travellers" className='form-travellers-label'>Travellers</label>
                    {/* <input className='form-travellers-input' id='form-travellers' type="text" placeholder='2 Adult, 2 Children'/> */}
                    <input value={detail} type="button" onClick={handleTravellers} className='form-travellers-input-btn' id='form-travellers'/>
                    {
                      traveller && 
                      <div className='traveller-detail-form'>
                          <div className='traveller-detail-form-close-btn-c'>
                            <AiOutlineClose onClick={()=>setTraveller(false)} className='traveller-detail-form-close-btn'/>
                          </div>
                          
                          <div className='traveller-detail-form-detail-c'>
                            <h3 className='traveller-detail-form-h3'>Travellers</h3>
                            <div className='traveller-detail-form-detail-container'>
                              <div className='section-c adults-c'>
                                <div className='section-c-left adults-left'>
                                  <GiPerson className='human-icon'/>
                                  <div className='human-data'>
                                      <p className='human-data-p-h'>Adults</p>
                                      <p className='human-data-p'>12+ years</p>
                                  </div>
                                </div>
                                <div className='section-c-right adults-right'>
                                  <AiOutlinePlusCircle onClick={noOfAdultsPlus} className='plusminus'/>
                                  <span className='section-c-right-span'>{noOfAdults}</span>
                                  <AiOutlineMinusCircle onClick={noOfAdultsMinus} className='plusminus'/>
                                </div>
                              </div>                              

                              <div className='section-c childrens-c'>
                                <div className='section-c-left childrens-left'>
                                  <BiChild className='human-icon'/>
                                  <div className='human-data'>
                                    <p className='human-data-p-h'>Children</p>
                                    <p className='human-data-p'>2-12 years</p>
                                  </div>
                                </div>
                                <div className='section-c-right childrens-right'>
                                  <AiOutlinePlusCircle onClick={noOfChildrenPlus} className='plusminus'/>
                                  <span className='section-c-right-span'>{noOfChildren}</span>
                                  <AiOutlineMinusCircle onClick={noOfChildrenMinus} className='plusminus'/>
                                </div>
                              </div>

                              <div className='section-c infants-c'>
                                <div className='section-c-left infants-left'>
                                  <FaBaby className='human-icon'/>
                                  <div className='human-data'>
                                    <p className='human-data-p-h'>Infants</p>
                                    <p className='human-data-p'>0-2 years</p>
                                  </div>
                                </div>
                                <div className='section-c-right infants-right'>
                                  <AiOutlinePlusCircle onClick={noOfInfantPlus} className='plusminus'/>
                                  <span className='section-c-right-span'>{noOfInfant}</span>
                                  <AiOutlineMinusCircle onClick={noOfInfantMinus} className='plusminus'/>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='traveller-detail-form-class-c'>
                            <h3 className='traveller-detail-form-h3'>Class</h3>
                            <div className='traveller-detail-form-class-detail'>
                              <div className='radio-c-div'>
                                <input className='class-radio-btn' type="radio"  id="economy"/>
                                <label className='class-radio-label' htmlFor='economy'> &nbsp;Economy</label>
                              </div>
                              <hr/>
                              <div className='radio-c-div'>
                                <input className='class-radio-btn' type="radio"  id="premiumeconomy"/>
                                <label className='class-radio-label' htmlFor='premiumeconomy'> &nbsp;Premium Economy</label>
                              </div>
                              <hr/>
                              <div className='radio-c-div'>
                                <input className='class-radio-btn' type="radio"  id="business"/>
                                <label className='class-radio-label' htmlFor='business'> &nbsp;Business</label>
                              </div>
                            </div>
                          </div>

                          <div className='traveller-detail-form-Done-btn-c'>
                            <button onClick={handleDone} className='traveller-detail-form-Done-btn'>Done</button>
                          </div>
                      </div>
                    }
                  </div>

                  <div className='form-class'>
                      <label className='form-class-label' htmlFor='form-class-label'>Class</label>
                      <select className='form-class-select' id='form-class-label'>
                        <option>Economy</option>
                        <option>Buissness</option>
                      </select>
                  </div>

                  <div className='form-show-nonStop'>
                      <input className='form-show-nonStop-input' type='checkbox'/>
                      <label className='form-show-nonStop-label'>&nbsp;Show Non-stop flights only</label>
                  </div>

                  <div className='form-button'>
                    <button className='form-button-search'>Search Flights</button>
                  </div>
                </>
              }
              {
                roundTrip &&
                <>
                  <div className='form-from-to'>
                    <div className='form-from'>
                      <p className='form-from-p'>From</p>
                      <input className='form-from-input' type='text'/>
                    </div>
                    <div className='form-from-to-arrow'>&nbsp;
                      <TbArrowsExchange2 className='from-to-arrow'/>&nbsp;
                    </div>
                    <div className='form-to'>
                      <p className='form-to-p'>To</p>
                      <input className='form-to-input' type='text'/>
                    </div>
                  </div>

                  <div className='form-departure-return-date'>
                    <div className='form-departure-date-c'>
                      <label className='form-departure-date-c-label'>Departure Date</label>
                      <input className='form-departure-date-c-input' type='date'/>
                    </div>
                    <div className='form-return-date-c returnDate'>
                      <label className='form-return-date-label'>Return Date</label>
                      <input className='form-return-date-input' type='date'/>
                    </div>
                  </div>

                  <div className='form-travellers'>
                    <label htmlFor="form-travellers" className='form-travellers-label'>Travellers</label>
                    {/* <input type="text" onClick={handleTravellers} className='form-travellers-input' id='form-travellers' placeholder='2 Adult, 2 Children'/> */}
                    <input value={detail} type="button" onClick={handleTravellers} className='form-travellers-input-btn' id='form-travellers'/>
                    {
                      traveller && 
                      <div className='traveller-detail-form'>
                          <div className='traveller-detail-form-close-btn-c'>
                            <AiOutlineClose onClick={()=>setTraveller(false)} className='traveller-detail-form-close-btn'/>
                          </div>
                          
                          <div className='traveller-detail-form-detail-c'>
                            <h3 className='traveller-detail-form-h3'>Travellers</h3>
                            <div className='traveller-detail-form-detail-container'>
                              <div className='section-c adults-c'>
                                <div className='section-c-left adults-left'>
                                  <GiPerson className='human-icon'/>
                                  <div className='human-data'>
                                      <p className='human-data-p-h'>Adults</p>
                                      <p className='human-data-p'>12+ years</p>
                                  </div>
                                </div>
                                <div className='section-c-right adults-right'>
                                  <AiOutlinePlusCircle onClick={noOfAdultsPlus} className='plusminus'/>
                                  <span className='section-c-right-span'>{noOfAdults}</span>
                                  <AiOutlineMinusCircle onClick={noOfAdultsMinus} className='plusminus'/>
                                </div>
                              </div>                              

                              <div className='section-c childrens-c'>
                                <div className='section-c-left childrens-left'>
                                  <BiChild className='human-icon'/>
                                  <div className='human-data'>
                                    <p className='human-data-p-h'>Children</p>
                                    <p className='human-data-p'>2-12 years</p>
                                  </div>
                                </div>
                                <div className='section-c-right childrens-right'>
                                  <AiOutlinePlusCircle onClick={noOfChildrenPlus} className='plusminus'/>
                                  <span className='section-c-right-span'>{noOfChildren}</span>
                                  <AiOutlineMinusCircle onClick={noOfChildrenMinus} className='plusminus'/>
                                </div>
                              </div>

                              <div className='section-c infants-c'>
                                <div className='section-c-left infants-left'>
                                  <FaBaby className='human-icon'/>
                                  <div className='human-data'>
                                    <p className='human-data-p-h'>Infants</p>
                                    <p className='human-data-p'>0-2 years</p>
                                  </div>
                                </div>
                                <div className='section-c-right infants-right'>
                                  <AiOutlinePlusCircle onClick={noOfInfantPlus} className='plusminus'/>
                                  <span className='section-c-right-span'>{noOfInfant}</span>
                                  <AiOutlineMinusCircle onClick={noOfInfantMinus} className='plusminus'/>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='traveller-detail-form-class-c'>
                            <h3 className='traveller-detail-form-h3'>Class</h3>
                            <div className='traveller-detail-form-class-detail'>
                              <div className='radio-c-div'>
                                <input className='class-radio-btn' type="radio"  id="economy"/>
                                <label className='class-radio-label' htmlFor='economy'> &nbsp;Economy</label>
                              </div>
                              <hr/>
                              <div className='radio-c-div'>
                                <input className='class-radio-btn' type="radio"  id="premiumeconomy"/>
                                <label className='class-radio-label' htmlFor='premiumeconomy'> &nbsp;Premium Economy</label>
                              </div>
                              <hr/>
                              <div className='radio-c-div'>
                                <input className='class-radio-btn' type="radio"  id="business"/>
                                <label className='class-radio-label' htmlFor='business'> &nbsp;Business</label>
                              </div>
                            </div>
                          </div>

                          <div className='traveller-detail-form-Done-btn-c'>
                            <button onClick={handleDone} className='traveller-detail-form-Done-btn'>Done</button>
                          </div>
                      </div>
                    }
                  </div>

                  <div className='form-class'>
                      <label className='form-class-label' htmlFor='form-class-label'>Class</label>
                      <select className='form-class-select' id='form-class-label'>
                        <option>Economy</option>
                        <option>Buissness</option>
                      </select>
                  </div>

                  <div className='form-show-nonStop'>
                      <input className='form-show-nonStop-input' type='checkbox'/>
                      <label className='form-show-nonStop-label'>&nbsp;Show Non-stop flights only</label>
                  </div>

                  <div className='form-button'>
                    <button className='form-button-search'>Search Flights</button>
                  </div>
                </>
              } 
            </div>
          </div>
        }
        {
          train &&
          <div className='form-container'>
            {/* <span className='form-container-span'><MdTrain/>&nbsp;Train</span> */}
            <div className='form'>
                  <div className='form-from-to train-from-to'>
                    <div className='form-from train-form-from'>
                      <p className='form-from-p'>From</p>
                      <input className='form-from-input' type='text'/>
                    </div>
                    <div className='form-to train-form-to'>
                      <p className='form-to-p train-form-to-p'>To</p>
                      <input className='form-to-input' type='text'/>
                    </div>
                  </div>

                  <div className='form-departure-date'>
                      <label className='form-departure-date-label'>Departure Date</label>
                      <input className='form-departure-date-input' type='date'/>
                  </div>

                  <div className='form-travellers'>
                    <label htmlFor="form-travellers" className='form-travellers-label'>Travellers</label>
                    {/* <input className='form-travellers-input' id='form-travellers' type="text" placeholder='2 Adult, 2 Children' /> */}
                    <input value={detail} type="button" onClick={handleTravellers} className='form-travellers-input-btn' id='form-travellers'/>
                    {
                      traveller && 
                      <div className='traveller-detail-form'>
                          <div className='traveller-detail-form-close-btn-c'>
                            <AiOutlineClose onClick={()=>setTraveller(false)} className='traveller-detail-form-close-btn'/>
                          </div>
                          
                          <div className='traveller-detail-form-detail-c'>
                            <h3 className='traveller-detail-form-h3'>Travellers</h3>
                            <div className='traveller-detail-form-detail-container'>
                              <div className='section-c adults-c'>
                                <div className='section-c-left adults-left'>
                                  <GiPerson className='human-icon'/>
                                  <div className='human-data'>
                                      <p className='human-data-p-h'>Adults</p>
                                      <p className='human-data-p'>12+ years</p>
                                  </div>
                                </div>
                                <div className='section-c-right adults-right'>
                                  <AiOutlinePlusCircle onClick={noOfAdultsPlus} className='plusminus'/>
                                  <span className='section-c-right-span'>{noOfAdults}</span>
                                  <AiOutlineMinusCircle onClick={noOfAdultsMinus} className='plusminus'/>
                                </div>
                              </div>                              

                              <div className='section-c childrens-c'>
                                <div className='section-c-left childrens-left'>
                                  <BiChild className='human-icon'/>
                                  <div className='human-data'>
                                    <p className='human-data-p-h'>Children</p>
                                    <p className='human-data-p'>2-12 years</p>
                                  </div>
                                </div>
                                <div className='section-c-right childrens-right'>
                                  <AiOutlinePlusCircle onClick={noOfChildrenPlus} className='plusminus'/>
                                  <span className='section-c-right-span'>{noOfChildren}</span>
                                  <AiOutlineMinusCircle onClick={noOfChildrenMinus} className='plusminus'/>
                                </div>
                              </div>

                              <div className='section-c infants-c'>
                                <div className='section-c-left infants-left'>
                                  <FaBaby className='human-icon'/>
                                  <div className='human-data'>
                                    <p className='human-data-p-h'>Infants</p>
                                    <p className='human-data-p'>0-2 years</p>
                                  </div>
                                </div>
                                <div className='section-c-right infants-right'>
                                  <AiOutlinePlusCircle onClick={noOfInfantPlus} className='plusminus'/>
                                  <span className='section-c-right-span'>{noOfInfant}</span>
                                  <AiOutlineMinusCircle onClick={noOfInfantMinus} className='plusminus'/>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='traveller-detail-form-class-c'>
                            <h3 className='traveller-detail-form-h3'>Class</h3>
                            <div className='traveller-detail-form-class-detail'>
                              <div className='radio-c-div'>
                                <input className='class-radio-btn' type="radio"  id="economy"/>
                                <label className='class-radio-label' htmlFor='economy'> &nbsp;Economy</label>
                              </div>
                              <hr/>
                              <div className='radio-c-div'>
                                <input className='class-radio-btn' type="radio"  id="premiumeconomy"/>
                                <label className='class-radio-label' htmlFor='premiumeconomy'> &nbsp;Premium Economy</label>
                              </div>
                              <hr/>
                              <div className='radio-c-div'>
                                <input className='class-radio-btn' type="radio"  id="business"/>
                                <label className='class-radio-label' htmlFor='business'> &nbsp;Business</label>
                              </div>
                            </div>
                          </div>

                          <div className='traveller-detail-form-Done-btn-c'>
                            <button onClick={handleDone} className='traveller-detail-form-Done-btn'>Done</button>
                          </div>
                      </div>
                    }
                  </div>

                  <div className='form-train-ac'>
                    <button onClick={handleACNonAC} className={acNon ? 'form-train-ac-btn-active' : 'form-train-ac-btn'} >AC & Non-AC</button>
                    <button onClick={handleAC} className={ac ? 'form-train-ac-btn-active' : 'form-train-ac-btn'}>AC only</button>
                    <button onClick={handleNonAC} className={non ? 'form-train-ac-btn-active' : 'form-train-ac-btn'}>Non-AC only</button>
                  </div>

                  <div className='form-button'>
                    <button className='form-button-search'>Search Trains</button>
                  </div>
            </div>
          </div>
        }
        {
          taxi &&
          <div className='form-container'>
            {/* <span className='form-container-span'><BsFillTaxiFrontFill/>&nbsp;Taxi</span> */}
            <div className='form'>
                  <div className='form-from-to train-from-to'>
                    <div className='form-from train-form-from'>
                      <p className='form-from-p'>From</p>
                      <input className='form-from-input' type='text'/>
                    </div>
                    <div className='form-to train-form-to'>
                      <p className='form-to-p train-form-to-p'>To</p>
                      <input className='form-to-input' type='text'/>
                    </div>
                  </div>

                  <div className='form-departure-date'>
                      <label className='form-departure-date-label'>Departure Date</label>
                      <input className='form-departure-date-input' type='date'/>
                  </div>

                  <div className='form-taxis'>
                    <p className='form-taxis-p'>Select type</p>
                    <div className='form-taxis-btns'>
                      <button onClick={handleSuv} className={suv ?'form-taxis-btn-active' :'form-taxis-btn'}><img width="29px" src={suv ? suvWhite : suvBlack} alt=''/>&nbsp;<span>SUV</span></button>
                      <button onClick={handleHatchback} className={hatchback ?'form-taxis-btn-active' :'form-taxis-btn'}><img width="29px" src={hatchback ? hatchbackWhite : hatchbackBlack} alt='hatchback'/>&nbsp;<span>HATCHBACK</span></button>
                      <button onClick={handleSedan} className={sedan ?'form-taxis-btn-active' :'form-taxis-btn'}><img width="29px" src={sedan ? sedanWhite : sedanBlack} alt='sedan'/>&nbsp;<span>SEDAN</span></button>
                    </div>
                  </div>

                  <div className='form-button'>
                    <button className='form-button-search'>Search Ride</button>
                  </div>
            </div>
          </div>
        }
        </div>
      </div>
    </div>
    
  )
}

export default Navbar
