import React from 'react';
import img1 from '../assets/Home-Hero-Image.jpg';
import { Link } from "react-router-dom";
import Deco from "../assets/Decoration.svg";

export default function Header() {
    return (
        <div id="start" className="header">
            <div className="header_img">
                <img src={img1} alt="bg" className="img1" />
            </div>
            <div className="header_box">
                <h1 className="header_title">Zacznij pomagać! <br />Oddaj niechciane rzeczy w zaufane ręce </h1>
                <img scr={Deco} className="header_img" />
                <div className="header_button">
                    <Link to="/login" className="buttons_btns">Oddaj rzeczy</Link>
                    <Link to="/login" className="buttons_btns">Zorganizuj zbiórkę</Link>
                </div>
            </div>
        </div>
    )
}
