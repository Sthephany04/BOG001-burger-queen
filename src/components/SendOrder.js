import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const SendOrder = ({ customerName, order, total, remove, clearOrder }) => {

  return (
    <>
      <div>
        <p className="Text_weight">Cliente: { customerName }</p>
      </div>
      <div>
        {
          order.map((item, index) => {
            return (
            <div>
              <div className="Delete_item">
                <p className= "TextOrder" key={ index }>{ item.Nombre + " - $" + item.Precio }</p>
                <DeleteIcon
                  onClick={ ()=> remove(item) }
                  color="action"
                  style={{ fontSize: 40 }}
                />           
              </div>
              <hr></hr>
            </div>
            )
          })
        }
      </div>
      <div>
      <p className="Text_weight">Items: { order.length } Total: { total }</p>
      </div>
      <div className="Order_buttons">
        <button>
          Enviar
        </button>
        <button onClick= { clearOrder }>
          Cancelar orden
        </button>
        <button>
          Observaciones
        </button>      
      </div>
    </>
  )  
}

export default SendOrder