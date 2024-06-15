import '../../component/list/list.scss'
import Card from"../card/Card.jsx"
import {listData} from"../../lib/dummyData.js"

function List(){
  return (
    <div className='list'>
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List