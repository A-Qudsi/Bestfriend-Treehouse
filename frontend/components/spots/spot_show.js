import React from 'react';

class SpotShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            childrenCounter: 0,
            infantCounter: 0,
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
        this.addInfantCounter = this.addInfantCounter.bind(this);
        this.removeInfantCounter= this.removeInfantCounter.bind(this);
    }

    closeDropdown() {
        this.setState({clicked: false})
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ clicked: true })
    }

    addInfantCounter() {
        this.setState({ infantCounter: this.state.infantCounter + 1 })
    }   
    removeInfantCounter() {
        this.setState({ infantCounter: this.state.infantCounter - 1 })
    }


    render() {
        debugger
        if (!this.props.spot)  return null;
        debugger
        const { spot } = this.props;
        console.log(spot);
        return (
            <div className='showpagediv'>
                <div className='showpageheader'>                 
                    <h1 className='showpagename'>{spot.name}</h1>
                </div>
                <div className='address'>
                    <div className='addressleft'> 
                        <i className="fas fa-star"></i><span>5 {spot.address} {spot.city}</span>
                    </div>
                    <div className='addressright'>
                        <div className='faviconsright'>
                            <i className="fas fa-upload"></i> Share
                            <i className="far fa-heart"></i> Save
                        </div>
                    </div>
                </div>

                <div className='photo_grid'>
                    <div className="photo_1" >
                        <img src={spot.photoUrls[2]} className='photo_1' />
                    </div>
                    <div className='photo_2'>
                        <img src={spot.photoUrls[3]} className='photo_2' />
                    </div>
                    <div className='photo_3'>
                        <img src={spot.photoUrls[4]} className='photo_3' />
                    </div>
                    <div className='photo_4'>
                        <img src={spot.photoUrls[5]} className='photo_4' />
                    </div>
                    <div className='photo_5'>
                        <img src={spot.photoUrls[6]} className='photo_5' />
                    </div>
                </div>
                <div className='spotsShowBodyContainer'>
                    <div className='spotsShowLeftSide'>
                        <div className ='spotshowbody'>
                            <span>Entire house hosted by {spot.host_id}</span>
                            <p>{spot.maxGuests} Guests</p>
                        </div>
                        <div className='entirehome'>
                            <div className='homeIcon'>
                                <i className="fas fa-home" id='sicons'></i>
                            </div>
                            <div className='homeinfo'>
                                <p className='sTitle'>Entire home</p>
                                <p className='sBody'>You’ll have the house to yourself.</p>
                            </div>
                        </div>
                        <div className='enhancedclean'>
                            <div className='enhancedcleanIcon'>
                                <i className="far fa-gem" id='sicons'></i>
                            </div>
                            <div className='enhancedcleaninfo'>
                                <p className='sTitle'>Enhanced Clean</p>
                                <p className='sBody'>This host committed to a rigorous cleaning protocol developed with leading health and hospitality experts. <span className='learnmore'>Learn more</span></p>
                            </div>
                        </div>
                        <div className='checkin'>
                            <div className='checkinicon'>
                                <i className="fas fa-key" id='sicons'></i>
                            </div>
                            <div className='checkininfo'>
                                <p className='sTitle'>Great check-in experience</p>
                                <p className='sBody'>100% of recent guests gave the check-in process a 5-star rating.</p>
                            </div>
                        </div>
                        <div className='cancelation'>
                            <div className='cancelationicon'>
                                <i className="far fa-calendar-check" id='sicons'></i>   
                            </div>
                            <div className='cancelationinfo'>
                                <p className='sTitle'>Cancellation policy</p>
                                <p className='sBody'>Add your trip dates to get the cancellation details for this stay.</p> 
                            </div>  
                        </div>
                        <div className ='spotshowbodybottom'>
                        </div>
                        <div className='spotshowtext'>
                            <p>Lorem ipsum dolor sit amet, ex salutandi concludaturque mea, suas viderer ea ius. In sea idque corrumpit. Eam autem causae dolorum et, malorum ocurreret no his. Paulo abhorreant ex nec, ei qui veritus imperdiet conceptam.
                            Postea hendrerit pertinacia sit an, menandri dissentias an usu. Ius detraxit eleifend disputationi cu, assum nusquam cu per, id mollis postulant pertinacia nec. Ius ex odio eros saepe. Quando efficiendi id vix, ad wisi albucius nec, at sed modus utroque detracto. An patrioque efficiendi usu, at novum timeam cum.
                            </p>
                        </div>
                    </div>
                    <div className='spotsShowRightSide'>
                        <div className='bookingcontainer'>
                            <div className='bookingHeader'>
                                <div className='l_e'>
                                    $ {spot.price} / night
                                </div>
                                <div className='bookingRating'>
                                    5.0
                                </div>
                            </div>
                            <div>
                                <form className='signup_form body'>
                                    <div>
                                        <div className='sReservation'>
                                            <div className= 'sCheckin' >
                                                <input type = "text"  className="l_e"
                                                    value = ""
                                                    placeholder='check-in'/>
                                            </div>
                                            <div className= 'sCheckout' >
                                                <input type = "text"  className="l_e"
                                                    value = ""
                                                    placeholder='checkout'/>
                                            </div>
                                        </div>
                                        <div className='sGuests' >
                                            <button className='sGuestsButton' onClick={this.handleClick} > 
                                                <div className='sGuestButtonDiv' >
                                                    <div>{this.state.counter} guest</div>
                                                    {!this.state.clicked ? (
                                                    <i className="fas fa-chevron-down"></i> ) : <i className="fas fa-chevron-up"></i> }
                                                    {this.state.clicked ? (
                                                        <ul onClick={e => e.stopPropagation()} id='reservation-dropdown'>   
                                                         <div className='Adults'>
                                                            <span>Adults</span>
                                                            <div className='dropdownAdds'><i className="far fa-minus-square"></i>{this.state.counter}<i className="far fa-plus-square"></i></div>
                                                         </div>
                                                         <div className='Adults'>
                                                            <div  className='dropdownText'>
                                                                <span>Children</span>
                                                                <span>Ages 2–12</span>
                                                            </div>
                                                            <div className='dropdownAdds'><i className="far fa-minus-square"></i>{this.state.childrenCounter}<i className="far fa-plus-square"></i></div>
                                                         </div>
                                                         <div className='Adults'>
                                                            <div className='dropdownText'> 
                                                                <span>Infants</span>
                                                                <span>Under 2</span>
                                                            </div>
                                                            <div className='dropdownAdds'><i className="far fa-minus-square" onClick={this.removeInfantCounter} ></i>{this.state.infantCounter}<i className="far fa-plus-square" onClick={this.addInfantCounter}></i></div>
                                                         </div>
                                                         <span className = 'disclousreGuests'>{spot.maxGuests} guests maximum. Infants don’t count toward </span>
                                                         <span className = 'disclousreGuests'>the number of guests.</span>
                                                         <div onClick={this.closeDropdown}> close</div>
                                                        </ul>
                                                    ) : null}
                                                </div>  
                                            </button>
                                        </div>

                                        <button className='submit-button'>Check availability</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
export default SpotShow;
