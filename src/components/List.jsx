import React, { useState } from 'react'
import Items from './Items'



const List = ({lists}) => {
  const [items, setItems] = useState(lists)
  // console.log(items);
  return (
    <>
      <Items lists={lists} />
    </>
  )
}

export default List