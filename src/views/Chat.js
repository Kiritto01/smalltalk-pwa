import {React, useState, useEffect, useContext} from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { UserContext } from '../services/UserContext';
import PopUp from './PopUp';
import iceLogo from './loginIcon/Ice.svg';
import sendLogo from './loginIcon/sendArrow.svg';
import XLogo from './loginIcon/X.svg';
import X2Logo from './loginIcon/X 2.svg';
import checkLogo from './loginIcon/check.svg';

const Chat = () => {
  let indicator = 0;
  let indiCator = 0;
  let divIndi = 0;
  const [classNamee, setClassName] = useState(strCompare()?"blue":"brown");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [count,setCount] = useState(0);
  // const [username, setUsername] = useState('asdf');
  const [messagesArray, setMessagesArray] = useState([{
    username: "Bóg",
    message: "Łona, co tam się dzieje?"
  },
  {
    username: "Bóg",
    message: "Święty Piotr wybrał losowo Twój numer Ja tu nic nie widzę z góry, bo mi zasłaniają chmury Widoczność licha, więc przestań pieprzyć, mów co słychać!"
  },
  {
    username: "Łona",
    message: "Aaa... kicha, każdy bezimienny Wszędzie jak nie wojna, to przynajmniej stan wojenny Władza to banda cwaniaków z największym na czele A Biblia dawno już przestała być bestsellerem"
  },
  {
    username: "Bóg",
    message: "Hmmm, to może jeszcze raz Mesjasza ześlę?"
  },
  {
    username: "Łona",
    message: "Nie wygłupiaj się, skończy na elektrycznym krześle!"
  },
  {
    username: "Łona",
    message: "Nie warto, szkoda czasu, ludziom w głowach się przewraca Jest już za późno, by nawracać"
  }

]);



  const [room, setRoom] = useState(0);
  const { user, setUser } = useContext(UserContext);
  const [moreInfoTrigger, setMoreInfoTrigger] = useState(false);

  let renderChat = 1;

  const chatEndpoint = process.env.REACT_APP_CHAT_URL;
  const url = `${chatEndpoint}/${room}/`
  const client = new W3CWebSocket(url);
  const [connectionStatus, setConnectionStatus] = useState(false);



  const sendMessage = (e, mes) => {
    client.send(JSON.stringify({
      type: "message",
      message: message,
      username: user.username
    }));
  }

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
      setConnectionStatus(true);
    }

    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      setMessagesArray(messagesArray => [...messagesArray, dataFromServer]);
      setCount(count => count+1);
    }

    client.onclose = () => {
      console.log('WebSocket Client Disconnected');
      setConnectionStatus(false);
    }

    // w przyszłości
    // setUsername(getUsername())

  }, [])

  useEffect(() => {
    console.log(messagesArray);
  }, [messagesArray])
  useEffect(() => {
    console.log(user);
  }, [moreInfoTrigger])
  
  function strCompare(str1,str2){
    const userName = "Łona"
    const coco = str1
    if(coco !== userName){
      return true
    }
    else{
      return false
    }
}


  return (
      <div className="Chat"  onClick={(e) => {e.target.id === 'nieodda'  && setShow(false)}}>
        <div className='reavel'>
          <button>ODKRYJ</button>
        </div>
        {/* {messagesArray.map(message => {
            <span>{message.message}: </span>
        })} */}
        <div className="messages-array">{messagesArray.map(mes => {
          return <div className="message-body" onClick={(e) => {
            setMoreInfoTrigger(!moreInfoTrigger);
          }}>
            <div className="message-sender">
              {strCompare(messagesArray[indiCator++].username,messagesArray[indicator++].message)}
            </div>
            <div className="message-content" className={classNamee} id={divIndi++} >
              {mes?.message}
            </div>
          </div>})
        }</div>
        <div className="input-chat">
          <img className='xLogo' src={XLogo} alt="" onClick={() => setShow(true)} />
          <div className='send'>
            <input placeholder='Napisz coś...' type="text" onChange={e => setMessage(e.target.value)}></input>
            <button onClick={e => sendMessage(e,message)}> <img src={sendLogo}/> </button>
          </div>
          <img className='iceBraker' src={iceLogo} alt="" />
        </div>
        {show && <PopUp show={show} setShow={setShow} head={"Czy na pewno chcesz porzucić tę konwersację?"} clas={'chatPopUp contentt'} imagine={X2Logo} imagine2={checkLogo}/>}
      </div>)
};

export default Chat;
