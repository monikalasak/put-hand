import React from 'react';
import ImgBackContact from '../assets/Background-Contact-Form.jpg';
import Facebook from '../assets/Facebook.svg';
import Instagram from '../assets/Instagram.svg';
import Deco from "../assets/Decoration.svg";




export default function Contacts() {
    return (
        <div className="contact_cointener ">
            <div className="contacts_form">
                <h3 className="contacts_form_title">Skontaktuj się z nami</h3>
                <img src={Deco} />
                <form className="contacts_form_boxes">
                    <label className="contacts_form_label" placeholder="Krzysztof">Wpisz swoje imię</label><br />
                    <input className="contacts_form_input"></input>
                    <label className="contacts_form_label">Wpisz swój email</label><br />
                    <input className="contacts_form_input"></input>
                    <label className="contacts_form_label">Wpisz swoją wiadomość</label><br />
                    <textarea className="contacts_form_textarea"></textarea>

                </form>


            </div>
            <div className="contact_img_icon">
                <p>Copyright by Coders Lab</p>
                <img src={Facebook} />
                <img src={Instagram} />

            </div>
        </div>
    )
}
