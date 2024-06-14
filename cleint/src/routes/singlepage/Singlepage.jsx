import React from 'react'
import '../singlepage/singlepage.scss'
import Map from '../../component/map/Map.jsx'
import Slider from '../../component/silder/Slider'
import {singlePostData, userData} from "../../lib/dummyData"
const Singlepage = () => {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
<Slider images={singlePostData.images}/>
<div className="info">
  <div className="top">
<div className="post">
  <h1>{singlePostData.title}</h1>
  <div className="address">
    <img src="/pin.png" alt="" />
    <span>{singlePostData.address}</span>
  </div>
  <div className="price">$ {singlePostData.price}</div>
</div>
<div className="user">
<img src={userData.img} alt="" />
<span>{userData.name}</span>
</div>
  </div>
  <div className="bottom">
     {singlePostData.description}
  </div>
</div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
<p className="tiltle">General</p>
<div className="listVertical"></div>
<p className="tiltle">Sizes</p>
<div className="sizes"></div>
<p className="tiltle">Nearby Places</p>
<div className="listHorizontal"></div>
<p className="tiltle">Location</p>
<div className="mapContainer">
  <Map items={singlePostData}/>
</div>
<div className="buttons">
  <button>
    <img src='/chat.png'/>
    Send a Message
  </button>
  <button>
    <img src='/save.png'/>
    Save a Place
  </button>
</div>
        </div>
      </div>
    </div>
  )
}

export default Singlepage