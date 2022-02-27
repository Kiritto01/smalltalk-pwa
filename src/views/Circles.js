import {React, useState} from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import PopUp from './PopUp';


const Circles = () => {
  const [show, setShow] = useState(false);
  const [ide, setIDE] = useState(0);
  let idetifire = 0;
  let idetifiree = 0;
  const circles = [
    {
      name : "Wiśnowaa",
      id: 0,
      description:"opis opis opis opis opis opis opis opis opis",
      userInfo:"30/150",
      expires: "21.04.1333",
      background_img: "https://c4.wallpaperflare.com/wallpaper/783/279/828/simple-background-simple-space-astronaut-wallpaper-preview.jpg"
    },
    {
      name : "Wiśnowa",
      id : 1,
      description:"opis opis opis opis opis opis opis opis opis",
      userInfo:"20/150",
      expires: "21.04.4333",
      background_img: "https://c4.wallpaperflare.com/wallpaper/665/68/940/anime-room-interior-dark-wallpaper-preview.jpg"
    },
    {
      name : "Wiśnowa",
      id: 3,
      description:"opis opis opis opis opis opis opis opis opis",
      userInfo:"10/150",
      expires: "21.04.2332",
      background_img: "https://c4.wallpaperflare.com/wallpaper/158/462/472/anime-your-name-wallpaper-preview.jpg"
    },
    {
      name : "Wiśnowa",
      id: 4,
      description:"opis opis opis opis opis opis opis opis opis",
      userInfo:"5/150",
      expires: "21.04.2333",
      background_img: "https://picstatio.com/large/d59fb0/japan-cherry-blossom-tree-flowers.jpg"
    },
    {
      name : "Wiśnowa",
      id: 5,
      description:"opis opis opis opis opis opis opis opis opis",
      userInfo:"0/150",
      expires: "21.04.2334",
      background_img: "https://c4.wallpaperflare.com/wallpaper/624/928/894/road-nature-tree-woody-plant-wallpaper-preview.jpg"
    },
    {
      name : "Wiśnowa",
      id: 6,
      description:"opis opis opis opis opis opis opis opis opis",
      userInfo:"130/150",
      expires: "21.04.2335",
      background_img: "https://picstatio.com/large/c4792a/sunset-tree-lake-nature-art.jpg"
    },
  ]
  return <div onClick={(e) => {e.target.id === 'nieodda' && setShow(false)}}>
    <TopBar/>
    <pre>
      {circles.map((circle) => {
        return(
        <div>
            <div className="container Circles" onClick={(e) => {e.target.id !== '-1' && setIDE(e.target.id)}}>
              {/* {console.log(circle)} */}
                <img src={circle.background_img}/>
              <div className='spanName' id={idetifire++} onClick={() => setShow(true)}>
                <span id={idetifiree++} className='name'>{circle.name}</span>
              </div>
              {/* <span className='date'>{circle.expires}</span> */}
            </div>
        </div>
        )
      })}
    </pre>
    {show && <PopUp show={show} setShow={setShow} head={circles[ide].name} description={circles[ide].description} users={"Użytkownicy"} userInfo={circles[ide].userInfo} expires={"Wygaśnie"} expiresInfo={circles[ide].expires} clas={'inf contentt'}/>}
    <BottomBar/>
  </div>;
};
export default Circles;
