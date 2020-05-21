import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default props => {
    const [product, setProduct] = useState({});
    useEffect (() => {
        console.log(props.id);
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
            console.log(res);
            setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [props]);
    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.desc}</p>
        </div>
    )
}