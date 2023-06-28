import React from "react";

function List({items, deleteItems, editItems}){
    return(
        <ul style={{listStyle: 'none'}}>
        {
          items.map((el, index) => {
            return(<li key={index}>
                <span>{el.id}. </span>
              <span>{el.text}</span>
              <button onClick={() => deleteItems(el.id)}>Delete</button>
              <button onClick={() => editItems(el)}>Edit</button>
            </li>
            )
          })
        }
      </ul>
    )
}

export default List