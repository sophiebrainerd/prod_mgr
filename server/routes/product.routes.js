const ProductController = require('../controllers/product.controllers');

module.exports = function(app) {
    app.get('/api/products', ProductController.index);
    app.post('/api/products', ProductController.create)
}
