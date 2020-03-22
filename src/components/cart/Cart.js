import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const cart = props.cart;

     const total = cart.reduce((total,prd) =>  prd.price, 0);

     let shipping = 0;
     if(total > 35){
         shipping = 0;
     }

     else if (total > 15) {
         shipping =4.99;
     }

     else if (total>0) {
         shipping=12.99;
     }

 const tax =Math.round (total/10);

 const grandTotal =total + shipping + tax;

const formatNumber = num => {
      const precision = num.toFixed(2);
      return Number(precision);
}


const styled={
    color:'red'
}
    return (
        <div>
            <h4 style={styled} >Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
    <p>Product price : {formatNumber(total)} </p>
    <p>Shipping cost: {shipping}</p>
    <p>Tax + Vat: {tax}</p>

    <p>Total price: {grandTotal}</p>
        </div>
    );
};

export default Cart;