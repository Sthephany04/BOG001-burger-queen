import React, { useState, useEffect } from 'react';
import { db } from '../Firebase/firebase';
import swal from 'sweetalert';
import ButtonsTakeOrder from './ButtonsTakeOrder';
import Customer from './Customer';
import SendOrder from './SendOrder';

export const Meseros = () => {

  const [item, setItem] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);  

  const getItems = async () => {
    db.collection('menu').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {       
        docs.push({ ...doc.data(), id:doc.id })       
      });
      setItem(docs)      
    });
  } 

  useEffect(() => {
    getItems();
  }, [])

  const getNameCustomer = (inputName) => {
    setCustomerName(inputName);
  };
  
  const fromTakeOrderButtons = (Nombre, Precio) => {
    setOrder([...order, { Nombre: Nombre, Precio: Precio }]);
    const newTotal = total + Precio;
    setTotal(newTotal);   
  }
  
  const removeItem = (item) => {
    const newOrder = [...order];
    const removeIndex = newOrder.map(i => {
      return i.Nombre
    })
    .indexOf(item.Nombre);
    newOrder.splice(removeIndex, 1);
    const newTotal = total -item.Precio;
    setOrder(newOrder);
    setTotal(newTotal)
  }

  const cancelOrder = () => {
    swal({
      title: "¿Quieres cancelar la Orden?",
      text: "Una vez eliminada, no podras recuperarla",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setCustomerName("");
        setOrder([]);
        setTotal(0);
        swal("La orden fue eliminada", {
          icon: "success",
        });
      } else {
        swal("La orden se encuentra en proceso");
      }
    });
  }

  return(
    <section className="Waiters">    
      <div className="Waiters_menu">
        <Customer
          getName = { getNameCustomer }
          name = { customerName }
        />        
        <ButtonsTakeOrder
          data={ item }
          orderTaked= { fromTakeOrderButtons }
        />
      </div>
      <div className="Waiters_order">
        <SendOrder
          customerName= { customerName }
          clearOrder= { cancelOrder }
          order= { order }
          total= { total }
          remove= { removeItem }
        />
      </div>
    </section>
  )
}