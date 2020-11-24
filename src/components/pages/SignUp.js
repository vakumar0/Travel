import React from 'react';
import '../../App.css';

export default function SignUp() {
    return <h1 className="sign-up" style={
        {
            background: `url(${process.env.PUBLIC_URL}/images/img-8.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "#fff",
            fontSize: "100px"
        }
    }>SIGN UP</h1>;
}