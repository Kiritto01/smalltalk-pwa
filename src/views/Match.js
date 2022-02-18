import {React, useState, useContext } from 'react';
import { UserContext } from "../services/UserContext";
import { InfoContext } from '../services/InfoContext';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import arrowLogo from './loginIcon/Arrow 2.svg';
import qrLogo from './loginIcon/QR.svg';

const Match = () => {
  // const { user, setUser } = useContext(UserContext);
  return (
  <div className="name">
      <TopBar/>
      <div className='Scanner'>
        <div className='codeInput'>
          <input type="number" placeholder='Wpisz kod'/>
          <button onClick={()=>console.log("Kutaz")}><img src={arrowLogo} alt="" /></button>
        </div>
        <img src={qrLogo} alt="" /> {/* Przejście do aparatu */}
        <button className='chatt'>Chatuj</button>
      </div>
      <BottomBar/>
  </div>
  )
}

export default Match

