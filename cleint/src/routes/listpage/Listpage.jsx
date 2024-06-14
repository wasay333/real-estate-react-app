import React from 'react'
import { listData } from '../../lib/dummyData'
import "../listpage/listpage.scss"
import Map from '../../component/map/Map.jsx'
import Filter from '../../component/filter/Filter'
import Card from '../../component/card/Card'

const Listpage = () => {
  const data = listData;
  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {data.map(item =>(
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
    <div className="mapContainer">
   <Map items={data}/>
    </div>
    </div>
  )
}

export default Listpage