import React from 'react';
import { Link } from "react-router-dom";
import Deco from "../assets/Decoration.svg";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";

export default function Aboutus() {
    return (
        <div id="what" className="Section_three">
            <h2 className="Section_three_title">Wystarczą 4 proste kroki</h2>
            <img src={Deco} className="section_three_img" />
            <div className="icon_boxes">
                <div className="icon_box">
                    <img src={icon1} className="icon_img" />
                    <h3 className="icon_title">Wybierz rzeczy</h3>
                    <p className="icon_text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="icon_box">
                    <img src={icon2} className="icon_img" />
                    <h3 className="icon_title">Spakuj je</h3>
                    <p className="icon_text">skorzystaj z worków na śmieci</p>
                </div>
                <div className="icon_box">
                    <img src={icon3} className="icon_img" />
                    <h3 className="icon_title">Zdecyduj komu chcesz pomóc</h3>
                    <p className="icon_text">wybierz zaufane miejsce</p>
                </div>
                <div className="icon_box">
                    <img src={icon4} className="icon_img" />
                    <h3 className="icon_title">Zamów kuriera</h3>
                    <p className="icon_text">kurier przyjedzie w dogodnym terminie</p>
                </div>

            </div>
            <Link to="/login" className="buttons_icons">Oddaj rzeczy</Link>

        </div>
    )
}
