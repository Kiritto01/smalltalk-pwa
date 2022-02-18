import {React, useState} from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import PopUp from './PopUp';

const Circles = () => {
  const [status, setTrue] = useState(false);
  const circles = [
    {
      name : "Wiśnowa",
      id: 0,
      expires: "21.04.1333",
      background_img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fm50.targeo.pl%2Fi%2Fcache%2Fstatic%2Fbudyneksat%2Fwi%2Fwarszawa%2B02-520%2Cwisniowa%2C56.jpg&f=1&nofb=1"
    },
    {
      name : "Wiśnowa",
      id : 1,
      expires: "21.04.4333",
      background_img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fm50.targeo.pl%2Fi%2Fcache%2Fstatic%2Fbudyneksat%2Fwi%2Fwarszawa%2B02-520%2Cwisniowa%2C56.jpg&f=1&nofb=1"
    },
    {
      name : "Wiśnowa",
      id: 3,
      expires: "21.04.2333",
      background_img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fm50.targeo.pl%2Fi%2Fcache%2Fstatic%2Fbudyneksat%2Fwi%2Fwarszawa%2B02-520%2Cwisniowa%2C56.jpg&f=1&nofb=1"
    },
    {
      name : "Wiśnowa",
      id: 4,
      expires: "21.04.2333",
      background_img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fm50.targeo.pl%2Fi%2Fcache%2Fstatic%2Fbudyneksat%2Fwi%2Fwarszawa%2B02-520%2Cwisniowa%2C56.jpg&f=1&nofb=1"
    },
    {
      name : "Wiśnowa",
      id: 5,
      expires: "21.04.2333",
      background_img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fm50.targeo.pl%2Fi%2Fcache%2Fstatic%2Fbudyneksat%2Fwi%2Fwarszawa%2B02-520%2Cwisniowa%2C56.jpg&f=1&nofb=1"
    },
    {
      name : "Wiśnowa",
      id: 6,
      expires: "21.04.2333",
      background_img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fm50.targeo.pl%2Fi%2Fcache%2Fstatic%2Fbudyneksat%2Fwi%2Fwarszawa%2B02-520%2Cwisniowa%2C56.jpg&f=1&nofb=1"
    },
  ]
  return <div>
    <TopBar/>
    <pre>
      {circles.map((circle) => {
        return(
        <div>
            <div className="container Circles" onClick={ e => status? setTrue(false): status}>
              {/* {console.log(circle)} */}
              <button onClick={() => setTrue(true)}>
                <img src={circle.background_img}/>
                <PopUp isLoggedIn={status} head={"Data wygaśnięcia"} description={circle.id}/>
              </button>
              <span className='name'>{circle.name}</span>
              {/* <span className='date'>{circle.expires}</span> */}
              <br></br>
            </div>
        </div>
        )
      })}
    </pre>
    <BottomBar/>
  </div>;
};

export default Circles;
