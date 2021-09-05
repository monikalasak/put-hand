import React from 'react';
import { Link } from "react-router-dom";


export default function Login() {
    return (
        <div className="Login_box">
            <h1 className="Login_title">Zaloguj się</h1>
            <div className="Login_form">
                <form onSubmit>
                    <label className="form_label">Email</label><br />
                    <input className="form_input"></input><br />
                    <label className="form_label">Hasło</label><br />
                    <input className="form_input"></input>

                </form>

            </div>
            <div className="login_button">
                <Link to="/registration" className="login_buttons">Załóz konto</Link>
                <button className="login_buttons button-zalog">Zaloguj się</button>

            </div>

        </div>
    )
}
