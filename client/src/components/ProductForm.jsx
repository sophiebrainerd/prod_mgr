import React, { useState } from 'react';
import axios from 'axios';
export default() => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");

    const handleClick = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            desc
        })
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)})
    };

    return (
        <div>
            <h1>Product Manager</h1>
            <form>
                <div className="form-group">
                    <label for="prodTitle">Title</label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control" id="prodTitle"/>
                </div>
                <div className="form-group">
                    <label for="prodPrice">Price</label>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control" id="prodPrice"/>
                </div>
                <div className="form-group">
                    <label for="prodDesc">Description</label>
                    <input type="text" onChange={(e)=>setDesc(e.target.value)} className="form-control" id="prodDesc"/>
                </div>
                <div>
                    <input onClick={handleClick} type="submit" className="btn btn-primary" value="Create"/>
                </div>
            </form>
        </div>
    )
}
