import React, { Fragment } from 'react';

const SpotBody = ({ spot, users }) => {
    return (
        <div className='spotbodyrightside'>
            <div className ='spotshowbody'>
                <span>Entire house hosted by James</span>
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
    )
};

export default SpotBody;

