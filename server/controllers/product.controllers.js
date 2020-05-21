const mongoose = require('mongoose'),
    ProductSchema = require("../models/product.models"),
    Product = mongoose.model("Products", ProductSchema);

class ProductController {
    index(req, res){
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.son(err))
    }
    create(req, res){
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.json(err))
    }
    show(req, res){
        Product.findById({_id:req.params.id})
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json(err))
    }
    // update(req, res){

    // }
    delete(req, res){
        Product.deleteOne({_id:req.params.id})
            .then(message => res.json(message))
            .catch(err => res.json(err))
    }
}

module.exports = new ProductController;