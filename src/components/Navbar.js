import React from "react"
import image1 from "../images/airbnb-logo.png"


export default function Navbar() {
    return (
        <nav>
            <img src={image1} className="nav--logo" />
        </nav>
    )
}