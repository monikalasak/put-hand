import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";


class HomeMenu extends Component {
    render() {
        return <>
            <div className="header_menu menu_first">
                <Link to="/login" >Zaloguj</Link>
                <Link to="/registration">Załóz konto</Link>
            </div>
            <div className="header_menu menu_second">
                <ScrollLink to="start">Start</ScrollLink>
                <ScrollLink to="what">O co chodzi?</ScrollLink>
                <ScrollLink to="aboutus">O nas</ScrollLink>
                <ScrollLink to="fundaction">Fundacja i organizacja</ScrollLink>
                <ScrollLink to="contact">Kontakt</ScrollLink>
            </div>
        </>
    }
};
export default HomeMenu;