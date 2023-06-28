// CREASE - START



// import React, { useState } from "react";

// function App() {

//   let [count, setCount] = useState(0)


//   function decriase(){
//     setCount(count -1)
//   }
  
//   function increase(){
//     setCount(count +1)
//   }

//   return (
//     <div className="container">
//       <div className="counter">
//         <button onClick={() => decriase()}>-</button>
//         <span>{count}</span>
//         <button onClick={() => increase()}>+</button>
//       </div>
//     </div>
//   );
// }

// export default App;


// CREASE - END



import React, {useState} from "react";
import List from "./components/List";

function App(){

  const initialValue = [
    {
      id: 1,
      text: 'Html'
    },
    {
      id: 2,
      text: 'Css'
    },
    {
      id: 3,
      text: 'ReactJs'
    }
  ]


  const [items, setItems] = useState(initialValue)
  const [isEdit, setIsEdit] = useState(false)
  const [editableId, setEditableId] = useState(null)

  function addItem(){
    const input = document.querySelector('input')
    if(input.value !== ''){
      if(isEdit){
        setItems(items.map(el => el.id === editableId ?{...el, text: input.value} : el))
      }else{
        setItems([...items,
          {
           id: items[items.length - 1].id + 1,
            text: input.value
           }
         ])
      }
    }

    input.value = ''
  }

  function deleteItems(id){
    setItems(items.filter((a) => a.id !== id))
  }

  function editItems(el){
    setIsEdit(true)
    setEditableId(el.id)
    document.querySelector('input').value = el.text
  }


  return (
    <div className="container">
      <div>
        <input type="text"/>
        <button onClick={() => addItem()}>Add</button>
      </div>

        <List
         items={items}
         deleteItems={deleteItems}
         editItems={editItems}
        />
    </div>
  )
}

export default App;