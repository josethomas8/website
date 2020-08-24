import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




function HomeScreen (props){

    const [products, setProduct] = useState([]);

    useEffect(() => {
        
        const fetchData = async () =>{
            const {data} = await axios.get("/api/products");
            setProduct(data);
        } 
        fetchData();
        return () =>{
            //
        };
    }, [])




    return <ul className="products">
        {
           products.map(product =>  
            <li>
                <div className="product">
                  <Link to={'/products/'+product._id}>
                      <img className="product-image" src={product.images} alt="" srcset=""/></Link>
                    
                    <div className="product-name">
                    <Link to={'/products/'+product._id}>{product.name}</Link>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">${product.price}</div>
                    <div className="product-rating">{product.rating} Stars {product.numReiews}</div>
                </div>
            </li>)
        }




</ul>

}
export default HomeScreen;