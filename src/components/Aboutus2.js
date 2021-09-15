import React from 'react';
import AboutusImg from "../assets/People.jpg";
import Signature from "../assets/Signature.svg";
import Deco from "../assets/Decoration.svg";

export default function Aboutus2() {
    return (
        <div id="aboutus" className="section_aboutus">
            <div className="Aboutus_box_left">
                <h2 className="Aboutus_title">O nas</h2>
                <img src={Deco} />
                <p className="Aboutus_text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={Signature} className="About_signature" />
            </div>
            <div className="Aboutus_box_right">
                <img src={AboutusImg} className="Aboutus_img" />
            </div>
        </div>
    )
}
