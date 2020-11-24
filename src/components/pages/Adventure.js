import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import AdventureCards from './AdventureCards';

function Adventure() {
    return (
        <>
            <h1 className="adventure" style={
            {
                background: `url(${process.env.PUBLIC_URL}/images/img-1.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                color: "#fff",
                fontSize: "160px",
                height: "90vh"
            }
            }>Adventure!</h1> 
            <AdventureCards></AdventureCards>              
            <Footer></Footer>
        </> 
    )
}

export default Adventure;