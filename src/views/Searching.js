import ellipse from './loginIcon/Ellipse.svg';
import {useNavigate} from "react-router-dom";

const Searching = () => {
  const navigate = useNavigate(); 
  const chat = () => {
    const path = `/chat`; 
    navigate(path);
  }
  const chat1 = () => {
    const path = `/chat1`; 
    navigate(path);
  }
  return (
  <div className="Searching">
      <img src={ellipse} />
      <h1>Szukanie<span className='dot'>.</span><span className='dot'>.</span><span className='dot'>.</span></h1>
      <div className='searchinBttn'>
        <button className='left' onClick={()=>chat1()}>Odśwież</button>
        <button onClick={()=>chat()} >Opuść poczekalnie</button>
      </div>
  </div>
  )
}

export default Searching