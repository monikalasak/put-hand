import React from 'react';
import { Link } from "react-router-dom";
import Deco from "../assets/Decoration.svg";

export default function Registration() {
    return (
        <div className="Regin_box">
            <h1 className="Regin_title">Załóż konto</h1>
            <img src={Deco} className="icon_deco" />
            <div className="Regin_form">
                <form onSubmit>
                    <label className="form_label">Email</label><br />
                    <input className="form_input"></input><br />
                    <label className="form_label">Hasło</label><br />
                    <input className="form_input"></input>
                    <label className="form_label">Powtórz hasło</label><br />
                    <input className="form_input"></input>

                </form>

            </div>
            <div className="regin_button">
                <Link to="/login" className="regin_buttons">Zaloguj się</Link>
                <button className="regin_buttons button-zaloz">Załóż konto</button>

            </div>

        </div>
    )
}
