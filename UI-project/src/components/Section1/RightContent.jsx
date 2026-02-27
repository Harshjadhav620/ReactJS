import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className=' h-full w-2/3 p-6 flex gap-10 flex-nowrap overflow-x-auto '>
      {props.users.map(function(elem){
        return <RightCard img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent