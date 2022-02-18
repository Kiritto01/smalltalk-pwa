import {React,useState} from 'react';
import {Link } from "react-router-dom";
import userLogo from './loginIcon/Avatar.svg';
import logo from './loginIcon/Warstwa 1.svg';
import homeLogo from './loginIcon/Component 1.svg';

const TopBar = (props) => {
    return <div>
    <header className="App-header">
        <Link className="nav-item" to="/chat"><img src={homeLogo} alt="" className="image"/></Link>
        <h4 className='logo'><Link to="" className='logo'><img src={logo} alt="" /></Link></h4>
        <Link className="nav-item" to="/login"><img src={userLogo} alt="" className="image"/></Link>
        {/* <Link className="nav-item" to="/admin">admin</Link> */}
        {/* <span className="nav-item">{user.username}</span> */}
    </header>
    </div>
};

export default TopBar;