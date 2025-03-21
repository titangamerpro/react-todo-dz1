import React, { useState } from 'react'
import Items from './Items'
import AddItem from './AddItem'
import SearchItems from './SearchItems'






const List = ({lists}) => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList')) || [])

  const [newItem, setNewItem] = useState('')

  const addItem = item => {
    const id = lists.length ? lists[lists.length -1].id+1 : 1 
    const myNewItem = {id, checked:true, body:item}
    const listItem = [...lists, myNewItem]
    setItems(listItem)
  }

  const handleCheck = id => {
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
    localStorage.setItem('todoList', JSON.stringify(listItems))
  }

  const handlDelet = id => {
    const itemss = items.filter(item => item.id !== id)
    setItems(itemss)
  }

  const handlSabmit = e => {
    e.preventDefault()
    addItem(newItem)
    setNewItem('')
  }

  // console.log(setItems);
  return (
    <>
    <SearchItems/>
      <AddItem handlSabmit={handlSabmit} newItem={newItem} setNewItem={setNewItem}  />
      <Items lists={items} handleCheck={handleCheck} handlDelet={handlDelet} />
    </>
  )
}

export default List