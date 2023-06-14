import React, { useState } from 'react'
import "./hero.css";
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'moment';
// import air from "./airports.json"

import {SlPlane} from "react-icons/sl"
import {IoMdTrain} from "react-icons/io"
import {FaTaxi} from "react-icons/fa"
import { AiOutlineClose,AiOutlinePlusCircle,AiOutlineMinusCircle} from "react-icons/ai"
import { FaBaby} from "react-icons/fa"
import { BiChild} from "react-icons/bi"
import {GiPerson} from "react-icons/gi"
// import {BsArrowLeftRight, BsArrowRight} from "react-icons/bs"
import {BsArrowLeftRight} from "react-icons/bs"
import flightImg from "../Navbar/flightImg.avif"
import trainImg from "../Navbar/trainImg.jpg"
import taxiImg from "../Navbar/taxiImg.jpeg"

import suvBlack from "./suvBlack.png";
import suvWhite from "./suvWhite.png";
import hatchbackBlack from "./hatchbackBlack.png";
import hatchbackWhite from "./hatchbackWhite.png";
import sedanBlack from "./sadenBlack.png";
import sedanWhite from "./sadenWhite.png";
export const Hero = () => {
    const [flight, setFlight]=useState(true)//true
    const [train, setTrain]=useState(false)
    const [taxi, setTaxi]=useState(false)
    const handleFlight=()=>{setFlight(true);setTrain(false);setTaxi(false)}
    const handleTrain=()=>{setTrain(true);setFlight(false);setTaxi(false);}
    const handleTaxi=()=>{setTaxi(true);setFlight(false);setTrain(false);}

    const [from, setFrom]=useState("");
    const [to, setTo]=useState("");
    const [departureDate, setDepartureDate]=useState("");
    const handleFrom=(e)=>{setFrom(e.target.value)}
    const handleTo=(e)=>{setTo(e.target.value)}
    const handleArrow=()=>{setFrom(to);setTo(from)}
    const handleDepartureDate=(e)=>{setDepartureDate(e.target.value); console.log(departureDate);}

    const [travellerAndClass, setTravellerAndclass] =useState(false)
    const handleTravelAndClass=()=>{
        setTravellerAndclass(!travellerAndClass)
    }
    const handleTravelAndClassB=()=>{
        setTravellerAndclass(!travellerAndClass)
    }
    const [noOfAdults, setNoOfAdults]=useState(1)
    const noOfAdultsPlus=()=>{setNoOfAdults(noOfAdults+1)}
    const noOfAdultsMinus=()=>{if(noOfAdults>0){setNoOfAdults(noOfAdults-1)}}
    const [noOfChildren, setNoOfChildren]=useState(0)
    const noOfChildrenPlus=()=>{setNoOfChildren(noOfChildren+1)}
    const noOfChildrenMinus=()=>{if(noOfChildren>0)setNoOfChildren(noOfChildren-1)}
    const [noOfInfant, setNoOfInfant]=useState(0)
    const noOfInfantPlus=()=>{setNoOfInfant(noOfInfant+1)}
    const noOfInfantMinus=()=>{if(noOfInfant>0)setNoOfInfant(noOfInfant-1)}
  
    const [detail, setDetail]=useState("1 Adult, 1 Children")
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
      setTravellerAndclass(false)
    }
    const [selectOneRound, setSelectOneRound] = useState('Round Trip');
    const handleSelectOneRound = (event) => {setSelectOneRound(event.target.value);};
    const [selectedOption, setSelectedOption] = useState('Economy ➤');
    const handleOptionChange = (event) => {setSelectedOption(event.target.value);};

    const [acNon, setAcNon]=useState(true)
    const [ac, setAc]=useState(false)
    const [non, setNon]=useState(false)
    const handleACNonAC=()=>{setAcNon(true);setAc(false);setNon(false)}
    const handleAC=()=>{setAc(true);setAcNon(false);setNon(false)}
    const handleNonAC=()=>{setNon(true);setAcNon(false);setAc(false);}

    const [suv, setSuv]=useState(true);
    const [hatchback, setHatchBack]=useState(false);
    const [sedan, setSedan]=useState(false);
    const handleSuv=()=>{setSuv(true);setHatchBack(false);setSedan(false)}
    const handleHatchback=()=>{setHatchBack(true);setSuv(false);setSedan(false)}
    const handleSedan=()=>{setSedan(true);setSuv(false);setHatchBack(false)}
  return (
    <div className='hero-c'>
        <img className='hero-c-img' width={"100%"}  src={flight ? flightImg :(train ? trainImg :(taxi ? taxiImg : flightImg))} alt='/'/>
        <div className='hero-c-container'>
            <p className='hero-c-container-p'>{flight ?"Domestic and International Flights" : train ?"Train Ticket Booking" : taxi ? "Book Online Taxi" : ""}</p>

            <div className='hero-c-form'>
                <div className='hero-c-form-choose'>
                    <div onClick={handleTrain} className={train ? 'hero-c-form-choose-div-active' : 'hero-c-form-choose-div'}><IoMdTrain className='choose-icon'/><p className='choose-p'>Trains</p></div>
                    <div onClick={handleFlight} className={flight ? 'hero-c-form-choose-div-active' :'hero-c-form-choose-div'}><SlPlane className='choose-icon'/><p className='choose-p'>Flights</p></div>
                    <div onClick={handleTaxi} className={taxi ? 'hero-c-form-choose-div-active' : 'hero-c-form-choose-div'}><FaTaxi className='choose-icon'/><p className='choose-p'>Taxi</p></div>
                </div>
                {
                    flight && 
                    <div className='hero-form'>
                    <div className='oneRound-div'>
                        <div className='oneRound-div-left'>
                            <div className='one-div'>
                                <input type='radio'
                                        id="one-way-input"
                                        name="options"
                                        value="One Trip"
                                        checked={selectOneRound === 'One Trip'}
                                        onChange={handleSelectOneRound}
                                />
                                <label id='one-way-label' htmlFor='one-way-input'> One-way</label>
                            </div>
                            <div className='round-div'>
                                <input type='radio'
                                        id="round-trip-input"
                                        name="options"
                                        value="Round Trip"
                                        checked={selectOneRound === 'Round Trip'}
                                        onChange={handleSelectOneRound}
                                />
                                <label id='round-trip-label' htmlFor='round-trip-input'> Round-trip</label>
                            </div>
                        </div>
                        <div onClick={handleTravelAndClassB} className='oneRound-div-right'>
                            <p className='oneRound-div-right-p'>{selectedOption}</p>
                        </div>
                    </div>
                    <div className='after-oneRound-div'>
                        <div className='fromTo-div'>
                            <div className='from-div'>
                                <label className='from-label' htmlFor='from'>From</label>
                                <input onChange={handleFrom} value={from} id='from' placeholder='Enter Source Name'/>
                            </div>
                            <div>
                                <div onClick={handleArrow} className='leftRightArrow'><BsArrowLeftRight className='leftRightArrow-icon'/></div>
                            </div>
                            <div className='to-div'>
                                <label className='to-label' htmlFor='to'>To</label>
                                <input onChange={handleTo} value={to} id='to' placeholder='Enter Destination Name'/>
                            </div>
                        </div>
                        <div className='departureReturn-div'>
                            <div className='departure-div'>
                                <label className='departure-label' htmlFor='departure'>Departure</label>
                                <input onChange={handleDepartureDate} value={departureDate} id='departure' type='date'/>
                            </div>
                            {
                                selectOneRound === 'Round Trip' &&
                                <div className='return-div'>
                                    <label className='return-label' htmlFor='return'>Return</label>
                                    <input id='return' type='date'/>
                                </div>
                            }
                            {/* <div className='return-div'>
                                <label className='return-label' htmlFor='return'>Return</label>
                                <input id='return' type='date'/>
                            </div> */}
                        </div>
                        <div className='traveller-div'>
                            <label className='travellerAndclass-label' htmlFor='travellerAndclass'>Travellers & Class</label>
                            {/* <input id='travellerAndclass' type="button" value={"1 Adult Economy"}/> */}
                            {/* <button onClick={handleTravelAndClass} id='travellerAndclass' >{detail}</button> */}
                            <input  onClick={handleTravelAndClass} id='travellerAndclass' value={detail}/>
                            {
                                travellerAndClass &&
                                <div className='traveller-detail-form'>
                                    <div className='traveller-detail-form-close-btn-c'>
                                        <AiOutlineClose onClick={()=>setTravellerAndclass(false)} className='traveller-detail-form-close-btn'/>
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
                                                    <AiOutlineMinusCircle onClick={noOfAdultsMinus} className='plusminus'/>
                                                    <span className='section-c-right-span'>{noOfAdults}</span>
                                                    <AiOutlinePlusCircle onClick={noOfAdultsPlus} className='plusminus'/>
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
                                                    <AiOutlineMinusCircle onClick={noOfChildrenMinus} className='plusminus'/>
                                                    <span className='section-c-right-span'>{noOfChildren}</span>
                                                    <AiOutlinePlusCircle onClick={noOfChildrenPlus} className='plusminus'/>
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
                                                    <AiOutlineMinusCircle onClick={noOfInfantMinus} className='plusminus'/>
                                                    <span className='section-c-right-span'>{noOfInfant}</span>
                                                    <AiOutlinePlusCircle onClick={noOfInfantPlus} className='plusminus'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='traveller-detail-form-class-c'>
                                        <h3 className='traveller-detail-form-h3'>Class</h3>
                                        <div className='traveller-detail-form-class-detail'>
                                            <div className='radio-c-div'>
                                                <input className='class-radio-btn'
                                                        type="radio"  
                                                        id="economy"
                                                        name="options"
                                                        value="Economy ➤"
                                                        checked={selectedOption === 'Economy ➤'}
                                                        onChange={handleOptionChange}
                                                    />
                                                <label className='class-radio-label' htmlFor='economy'> &nbsp;Economy</label>
                                            </div>
                                            <hr/>
                                            <div className='radio-c-div'>
                                                <input className='class-radio-btn' 
                                                        type="radio"  
                                                        id="premiumeconomy"
                                                        name="options"
                                                        value="Premium Economy ➤"
                                                        checked={selectedOption === 'Premium Economy ➤'}
                                                        onChange={handleOptionChange}
                                                />
                                                <label className='class-radio-label' htmlFor='premiumeconomy'> &nbsp;Premium Economy</label>
                                            </div>
                                            <hr/>
                                            <div className='radio-c-div'>
                                                <input className='class-radio-btn' 
                                                        type="radio"  
                                                        id="business"
                                                        name="options"
                                                        value="Business ➤"
                                                        checked={selectedOption === 'Business ➤'}
                                                        onChange={handleOptionChange}
                                                />
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
                    </div>
                    </div>
                }
                {
                    train && 
                    <div className='hero-form'>
                        <div className='after-oneRound-div after-one-round-div-train'>
                            <div className='fromTo-div'>
                                <div className='from-div'>
                                    <label className='from-label from-label-train' htmlFor='from'>From</label>
                                    <input onChange={handleFrom} value={from} id='from' placeholder='Enter Source Name'/>
                                </div>
                                <div>
                                    <div onClick={handleArrow} className='leftRightArrow'><BsArrowLeftRight className='leftRightArrow-icon'/></div>
                                </div>
                                <div className='to-div'>
                                    <label className='to-label to-label-train' htmlFor='to'>To</label>
                                    <input onChange={handleTo} value={to} id='to' placeholder='Enter Destination Name'/>
                                </div>
                            </div>
                            <div className='departureReturn-div'>
                                <div className='departure-div'>
                                    <label className='departure-label departure-label-train' htmlFor='departure'>Departure</label>
                                    <input onChange={handleDepartureDate} value={departureDate} id='departure' type='date'/>
                                </div>
                            </div>
                            <div className='traveller-div'>
                                <label className='travellerAndclass-label traveller-label-train' htmlFor='travellerAndclass'>Travellers</label>
                                <input  onClick={handleTravelAndClass} id='travellerAndclass' value={detail}/>
                                {
                                    travellerAndClass &&
                                    <div className='traveller-detail-form traveller-detail-form-train'>
                                        <div className='traveller-detail-form-close-btn-c'>
                                            <AiOutlineClose onClick={()=>setTravellerAndclass(false)} className='traveller-detail-form-close-btn'/>
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
                                                        <AiOutlineMinusCircle onClick={noOfAdultsMinus} className='plusminus'/>
                                                        <span className='section-c-right-span'>{noOfAdults}</span>
                                                        <AiOutlinePlusCircle onClick={noOfAdultsPlus} className='plusminus'/>
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
                                                        <AiOutlineMinusCircle onClick={noOfChildrenMinus} className='plusminus'/>
                                                        <span className='section-c-right-span'>{noOfChildren}</span>
                                                        <AiOutlinePlusCircle onClick={noOfChildrenPlus} className='plusminus'/>
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
                                                        <AiOutlineMinusCircle onClick={noOfInfantMinus} className='plusminus'/>
                                                        <span className='section-c-right-span'>{noOfInfant}</span>
                                                        <AiOutlinePlusCircle onClick={noOfInfantPlus} className='plusminus'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='traveller-detail-form-Done-btn-c'>
                                            <button onClick={handleDone} className='traveller-detail-form-Done-btn'>Done</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='form-train-c'>
                            <button onClick={handleACNonAC} className={acNon ? 'form-train-c-btn-active' : 'form-train-c-btn'} >AC & Non-AC</button>
                            <button onClick={handleAC} className={ac ? 'form-train-c-btn-active' : 'form-train-c-btn'}>AC only</button>
                            <button onClick={handleNonAC} className={non ? 'form-train-c-btn-active' : 'form-train-c-btn'}>Sleeper</button>
                        </div>
                    </div>
                }
                {
                    taxi && 
                    <div className='hero-form hero-form-taxi'>
                        <div className='after-oneRound-div after-one-round-div-taxi'>
                            <div className='fromTo-div'>
                                <div className='from-div'>
                                    <label className='from-label from-label-train from-label-taxi' htmlFor='from'>From</label>
                                    <input onChange={handleFrom} value={from} id='from' placeholder='Enter Source Name'/>
                                </div>
                                <div>
                                    <div onClick={handleArrow} className='leftRightArrow'><BsArrowLeftRight className='leftRightArrow-icon'/></div>
                                </div>
                                <div className='to-div'>
                                    <label className='to-label to-label-train from-label-taxi' htmlFor='to'>To</label>
                                    <input onChange={handleTo} value={to} id='to' placeholder='Enter Destination Name'/>
                                </div>
                            </div>
                            <div className='departureReturn-div'>
                                <div className='departure-div'>
                                    <label className='departure-label departure-label-train from-label-taxi' htmlFor='departure'>Departure</label>
                                    <input onChange={handleDepartureDate} value={departureDate} id='departure' type='date'/>
                                </div>
                            </div>
                        </div>
                        <div className='form-taxis-c'>
                            <p className='form-taxis-c-p'>Select One</p>
                            <div className='form-taxis-c-btns'>
                                <button onClick={handleSuv} className={suv ?'form-taxis-c-btn-active' :'form-taxis-c-btn'}><img width="29px" src={suv ? suvWhite : suvBlack} alt=''/>&nbsp;<span>SUV</span></button>
                                <button onClick={handleHatchback} className={hatchback ?'form-taxis-c-btn-active' :'form-taxis-c-btn'}><img width="29px" src={hatchback ? hatchbackWhite : hatchbackBlack} alt='hatchback'/>&nbsp;<span>HATCHBACK</span></button>
                                <button onClick={handleSedan} className={sedan ?'form-taxis-c-btn-active' :'form-taxis-c-btn'}><img width="29px" src={sedan ? sedanWhite : sedanBlack} alt='sedan'/>&nbsp;<span>SEDAN</span></button>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <div className='hero-c-btn-container' >
                <button className='hero-c-container-searchBtn'>SEARCH {flight ? "FLIGHTS":train ? "TRAINS" : taxi ? "TAXI" : ""}</button>
            </div>
        </div>
    </div>
  )
}
