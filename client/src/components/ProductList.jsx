import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default props => {


    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map((product, idx) => {
                return (
                    <> 
                        <p key={idx}>{product.title}, {product._id}</p>
                        {/* Why can't it access the ID? */}
                        <button onClick={(e) => navigate(`/products/${product._id}`)} type="submit" className="btn btn-danger">View</button>
                    </>
                )
            })}
        </div>
    )
}