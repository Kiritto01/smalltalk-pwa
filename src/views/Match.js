import {React, useState, useContext } from 'react';
import {useNavigate,Link} from "react-router-dom";
import { UserContext } from "../services/UserContext";
import { InfoContext } from '../services/InfoContext';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Chat from './Chat';
import arrowLogo from './loginIcon/Arrow 2.svg';
import qrLogo from './loginIcon/QR.svg';

const Match = () => {
  const navigate = useNavigate(); 
  const searching = () => {
    const path = `/searching`; 
    navigate(path);
  }
  // const { user, setUser } = useContext(UserContext);
  return (
  <div className="name">
      <TopBar/>
      <div className='Scanner'>
        <div className='border'>
        <div className='codeInput'>
          <input type="number" placeholder='Wpisz kod'/>
          <button onClick={()=>console.log("Kutaz")}><img src={arrowLogo} alt="" /></button>
        </div>
        <img src={qrLogo} className='qr' /> {/* Przejście do aparatu */}
        </div>
        <button className='chatt' onClick={()=> searching()} >Chatuj</button>
      </div>
      <BottomBar/>
  </div>
  )
}

export default Match

