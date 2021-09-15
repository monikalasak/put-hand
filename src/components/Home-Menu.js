import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";


class HomeMenu extends Component {
    render() {
        return <>
            <div className="header_menu menu_first cointener">
                <Link to="/login" className="header_buttons btns-login">Zaloguj</Link>
                <Link to="/registration" className="header_buttons btns-regin">Załóz konto</Link>
            </div>
            <div className="header_menu menu_second cointener">
                <Link to="/" className="header_buttons_second btns-start">Start</Link>
                <ScrollLink to="what" className="header_buttons_second">O co chodzi?</ScrollLink>
                <ScrollLink to="aboutus" className="header_buttons_second">O nas</ScrollLink>
                <ScrollLink to="fundaction" className="header_buttons_second">Fundacja i organizacja</ScrollLink>
                <ScrollLink to="contact" className="header_buttons_second">Kontakt</ScrollLink>
            </div>
        </>
    }
};
export default HomeMenu;