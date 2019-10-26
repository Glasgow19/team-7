import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import '/./feedback.css';
import logo from '/./gsc_logo.svg';

const Page3 = () => (
    <div>
        <div className="topbar">
            <img className="logo" src={logo} />
        </div>
        <p className="Title">Feedback Center</p>
    </div>
);

export default Page3;
