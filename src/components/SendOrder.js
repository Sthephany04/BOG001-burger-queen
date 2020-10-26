import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const SendOrder = ({ customerName, order, total }) => {

  return (
    <>
      <div>
        <p className="Text_weight">Cliente: { customerName }</p>
      </div>
      <div>
        {
          order.map((item, index) => {
            return (
            <div className="Delete_item">
              <p key={ index }>{ item.Nombre + " - $" + item.Precio }</p>
              <DeleteIcon
                color="action"
                style={{ fontSize: 40 }}
              />
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
        <button>
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