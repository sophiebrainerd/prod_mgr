import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';
export default () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res =>{
                setProducts(res.data)
            })
}, [])

    return (
        <div>
            <ProductForm/>
            <hr/>
            <ProductList products={products}/>
        </div>
    )
}