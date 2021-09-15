import React, { Component } from 'react';
import Header from './Header';
import Whatabout from './Whatabout';
import Aboutus from './Aboutus';
import Aboutus2 from "./Aboutus2";
import Contacts from './Contacts';


class Home extends Component {
    render() {
        return <div className="cointener">
            <Header />
            <Whatabout />
            <Aboutus />
            <Aboutus2 />
            <Contacts />
        </div>
    }
};
export default Home;