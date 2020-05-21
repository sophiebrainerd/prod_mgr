const ProductController = require('../controllers/product.controllers');

module.exports = function(app) {
    // app.get('/api/products', ProductController.index);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getProduct);
    app.post('/api/products', ProductController.create)
}
