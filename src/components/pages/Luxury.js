import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import LuxuryCards from './LuxuryCards';

function Luxury() {
    return (
        <>
            <h1 className="luxury" 
            style={
                {
                    // background: `url(${process.env.PUBLIC_URL}/images/img-2.jpg)`,
                    backgroundImage: `linear-gradient(rgb(128 126 126 / 5%), rgb(0 128 115)), url(${process.env.PUBLIC_URL}/images/img-2.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    color: "#fff",
                    fontSize: "160px",
                    height: "90vh"
                }
            }>Luxury.</h1>;
            <LuxuryCards></LuxuryCards>  
            <Footer></Footer>
        </>
    )
}

export default Luxury;

