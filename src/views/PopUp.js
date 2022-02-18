import {React,useEffect, useRef} from 'react';
import {Link } from "react-router-dom";
import userLogo from './loginIcon/Avatar.svg';
import logo from './loginIcon/Warstwa 1.svg';
import homeLogo from './loginIcon/Component 1.svg';



const PopUp = (props) => {
    const head = props.head;
    const description = props.description; 
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
    return <div>
    <div className='popUp'>
        <div className='window'>
            <div className='contentt'>
                <h1>{head}</h1>
                <p>{description}</p>
            </div>
        </div>
    </div>
    </div>
    }
    else{
        return("");
    }
};

export default PopUp;