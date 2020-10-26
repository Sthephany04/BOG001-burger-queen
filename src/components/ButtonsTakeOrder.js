import React, { useState } from 'react';
import SelectMenu from './SelectMenu';


const ButtonsTakeOrder = ({ orderTaked, data }) => {
  
  const [state, setState] = useState({
    menu: null,
    order: []
  });

  const handleOnClickMenu = (Nombre, Precio) => {
    orderTaked(Nombre, Precio);
  };

  const selectMenu = (kind, allItems) => {    
    const menuSelectedItems = allItems.filter(item => {    
      return item.Tipo === kind;
    });
    setState({ menu: menuSelectedItems })    
  }; 

  const typesOfMenu = ['Desayuno', 'Almuerzo']

  return (
    <>
      <div>
        {
          typesOfMenu.map((type, index) => (
            <button
              className= "Type_button"              
              onClick= { () => selectMenu(type, data) }
              key= { index }
            >
              { type }
            </button>
          ))
        }
      </div>
      <SelectMenu
        menu= {state.menu}
        onClick= { handleOnClickMenu }
      />
    </>
  )
}

export default ButtonsTakeOrder