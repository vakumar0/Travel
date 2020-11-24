import React from 'react';
import CardItems from './AdventureCardItems';
import '../Cards.css';

function AdventureCards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                        <CardItems
                            src= {process.env.PUBLIC_URL + "/images/img-9.jpg"} 
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/adventure">
                        </CardItems>
                        <CardItems
                            src= {process.env.PUBLIC_URL + "/images/img-8.jpg"}
                            text="Ride through the Sahara Desert on a guided camel tour"
                            label="Adventure"
                            path="/adventure">
                        </CardItems>
                    </ul>
                    <ul className='cards__items'>
                        <CardItems
                        src={process.env.PUBLIC_URL +'/images/img-7.jpg'}
                        text='Trek through the unknowns'
                        label='Adventure'
                        path='/adventure'
                        />
                        <CardItems
                        src={process.env.PUBLIC_URL +'/images/img-4.jpg'}
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Adventure'
                        path='/adventure'
                        />                       
                    </ul>
                </div>
            </div>
        </div>
    )    
}

export default AdventureCards;