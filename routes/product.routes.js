module.exports = (app) => {
    var router = require("express").Router();
    var product = require("../controllers/Product.controller");

    app.get("/products?pageNo=0&pageSize=10&direction=DESC&sortBy=id", product.searchProducts);

    app.get("/products/categories", product.getProductByCategories);

    app.get("/products/{id}", product.getProductById);

    app.post("/products", product.saveProduct);

    app.put("/products/{id}", product.updateProductDetails);
    
    app.delete("/products/{id}", product.deleteProductById);
    
    app.use("/", router);

}