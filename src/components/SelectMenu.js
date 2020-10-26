import React from 'react';

const SelectMenu = ({ menu, onClick }) => {
  
  if (menu === null) {
    return (
      <div>
        <p>Elige un menú para ver los items disponibles</p>
      </div>
    );
  }

  return(
    <div>
      {
        menu.map((item, index) => (
        <button 
            className= "ItemMenu_button"
            key= { index }
            name= { item.Nombre }
            price= { item.Precio }
            onClick={ () => onClick(item.Nombre, item.Precio)}
          >           
            {item.Nombre} <br/>$ {item.Precio}
          </button>
        ))
      }
    </div>
  )
}

export default SelectMenu