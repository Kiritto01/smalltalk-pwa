import {React,useState} from 'react';
import {Link } from "react-router-dom";
import arrowLogo from './loginIcon/Arrow 4.svg';

const BottomBar = () => {
    return <div>
        <input id="bttn" type="checkbox" className="burger" />
        <div className="Bottom-header App-header">
            <label htmlFor="bttn" id="expand-btn"><img src={arrowLogo} alt="" className="image"/></label>
            <Link className="nav-item" to="/circles">Moje Kręgi</Link>
            <Link className="nav-item" to="/createCircle">Stwórz krąg</Link>
            <Link className="nav-item" to="/friends">Znajomi</Link>
        </div>
    </div>
};

export default BottomBar;