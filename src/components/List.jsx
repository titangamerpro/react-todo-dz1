import React, { useState } from 'react'
import Items from './Items'




const List = ({lists}) => {
  const [items, setItems] = useState(lists)

  const handleCheck = id => {
    const listItems = items.map(item => item.id === id ? {...item, checked: item.checked})
  }

  // console.log(setItems);
  return (
    <>
      <Items lists={items} />
    </>
  )
}

export default List