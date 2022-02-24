import ellipse from './loginIcon/Ellipse.svg';


const Searching = () => {
  return (
  <div className="Searching">
      <img src={ellipse} />
      <h1>Szukanie<span className='dot'>.</span><span className='dot'>.</span><span className='dot'>.</span></h1>
  </div>
  )
}

export default Searching