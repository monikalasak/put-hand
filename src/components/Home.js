import React, { Component } from 'react';
import Header from './Header';
import Whatabout from './Whatabout';
import Aboutus from './Aboutus';


class Home extends Component {
    render() {
        return <div>
            <Header />
            <Whatabout />
            <Aboutus />


        </div>
    }
};
export default Home;