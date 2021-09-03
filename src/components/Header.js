import React from 'react';
import img1 from '../assets/Home-Hero-Image.jpg';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div id="start" className="header">
            <div className="header_img">
                <img src={img1} alt="img1">tło</img>
            </div>
            <div className="header_box">
                <h1 className="header_title">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce </h1>
                <div className="header_button">
                    <Link to="/login">Oddaj rzeczy</Link>
                    <Link to="/login">Zorganizuj zbiórkę</Link>
                </div>
            </div>
        </div>
    )
}
