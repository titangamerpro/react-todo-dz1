import React, { useState, useEffect } from 'react'
import Items from './Items'
import AddItem from './AddItem'
import SearchItems from './SearchItems'






const List = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList')) || [])
 
  const [newItem, setNewItem] = useState('')
  // console.log('before load');

  const [searchItem, setSearchItem] = useState('')

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(items))
  }, [items])

  // console.log('after load');

  const addItem = item => {
    const id = items.length ? items[items.length -1].id+1 : 1 
    const myNewItem = {id, checked:false, body:item}
    const listItem = [...items, myNewItem]
    setItems(listItem)
  }

  const sortItems = [...items].sort((a, b) => a.checked - b.checked)

  const handleCheck = id => {
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
    // localStorage.setItem('todoList', JSON.stringify(listItems))
  }

  const handlDelet = id => {
    const itemss = items.filter(item => item.id !== id)
    setItems(itemss)
  }

  const handlSabmit = e => {
    e.preventDefault()
    if (!newItem) return 
    addItem(newItem)
    setNewItem('')
  }

  // console.log(setItems);
  return (
    <>
    <SearchItems searchItem={searchItem} setSearchItem={setSearchItem} />
      <AddItem handlSabmit={handlSabmit} newItem={newItem} setNewItem={setNewItem}  />
      <Items 
      items={sortItems.filter(item => (item.body).toLowerCase().includes(searchItem.toLowerCase()))} 
      setItems={setItems}
      handleCheck={handleCheck} 
      handlDelet={handlDelet} />
    </>
  )
}

export default List