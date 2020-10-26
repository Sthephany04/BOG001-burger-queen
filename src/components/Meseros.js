import React, { useState, useEffect } from 'react';
import { db } from '../Firebase/firebase'
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
  console.log(total, order) 

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
          order= { order }
          total= { total }
        />
      </div>
    </section>
  )
}