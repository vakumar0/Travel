import React from 'react';
import CardItems from './LuxuryCardItems';
import '../Cards.css';

function LuxuryCards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                        <CardItems
                            src= {process.env.PUBLIC_URL + "/images/img-5.jpg"} 
                            text="Enjoy best in class stays"
                            label="Luxury"
                            path="/Luxury">
                        </CardItems>
                        <CardItems
                            src= {process.env.PUBLIC_URL + "/images/img-2.jpg"}
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/Luxury">
                        </CardItems>
                    </ul>
                    <ul className='cards__items'>
                        <CardItems
                        src={process.env.PUBLIC_URL +'/images/img-3.jpg'}
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Luxury'
                        path='/Luxury'
                        />
                        <CardItems
                        src={process.env.PUBLIC_URL +'/images/img-4.jpg'}
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Luxury'
                        path='/Luxury'
                        />                        
                    </ul>
                </div>
            </div>
        </div>
    )    
}

export default LuxuryCards;