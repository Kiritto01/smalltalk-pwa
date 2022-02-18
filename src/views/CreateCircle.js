import TopBar from './TopBar';
import BottomBar from './BottomBar';


const CreateCircle = () => {
  return (
  <div>
      <TopBar/>
      <BottomBar/>
      <h1>Stwórz krąg</h1>
      <div className='Cricles'>
        <input type="text" placeholder='Nazwa' />
        <input type="text" className='desciption' placeholder='Opis'/>
        <div className='time'>
        <input type="number" placeholder='Ilość użytkowników'/>
        <input type="number" placeholder='Wygąsnie za' />
      </div>
        <button>STWÓRZ</button>
      </div>
  </div>
  )
}

export default CreateCircle