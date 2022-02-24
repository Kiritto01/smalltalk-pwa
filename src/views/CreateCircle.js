import {React,useState} from 'react';
import { subscribe, isSupported } from 'on-screen-keyboard-detector';
import TopBar from './TopBar';
import BottomBar from './BottomBar';


const CreateCircle = () => {
  const [show, setShow] = useState(true);
  return (
  <div>
      <TopBar/>
      <BottomBar isLoggedin={show}/>
      <h1>Stwórz krąg</h1>
      <div className='Cricles' onClick={()=>setShow(false)} >
        <input type="text" placeholder='Nazwa' onFocus={(e)=>setShow(false)} />
        <textarea type="text" className='desciption' placeholder='Opis' maxLength='200' onClick={()=>setShow(false)}/>
        <div className='time'>
        <input type="text" pattern="\d*" placeholder='Ilość użytkowników' maxLength='3' onClick={()=>setShow(false)}/>
        <input type="text" maxLength="3" placeholder='Wygąsnie za' onClick={()=>setShow(false)}/>
      </div>
        <button>STWÓRZ</button>
      </div>
  </div>
  )
}

export default CreateCircle