import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../cart/Cart';

const Shop = () => {

    
    const first10 = fakeData.slice(0,10);
    const[data,setData]=useState(first10);

    const [cart,setCart] = useState([]);
    
    const handleAddProduct = (props) =>{
        
        const newCart = [...cart, props];
        setCart(newCart);
        

    }
   
    

    return (
       
            <div className="Shop-container">
                <div className="product-container">
              
                {


                data.map( pd => <Product product={pd}  handleAddProduct ={handleAddProduct}>   </Product>)
                
                }


              
                </div>

                <div className="cart-container">
               
               <Cart cart={cart} ></Cart>    
                </div>

                
            </div>
           
            );
};

export default Shop;