import React from 'react';

const Customer = ({ name, getName }) => {  

  const handleInputChange = (e) => {
    getName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label className="Text_weight">Pedido</label>
      <input 
        className="Order_input"
        id= 'filled-basic'
        placeholder= 'Mesa/Cliente'       
        type="text"
        value={ name }
        onChange= { handleInputChange }      
      />
    </form>    
  )
}

export default Customer