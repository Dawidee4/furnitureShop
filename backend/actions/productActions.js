const Product = require('../db/models/product.js');

module.exports = {
    fetchProducts: async (req,res)=>{
        try{
        const products = await Product.find({});
        res.status(200).json(products);
        } catch (err){
            res.send("error");
        }
    },
    fetchProduct: async (req,res)=>{
        const id = req.params.title;
        const product = await Product.findOne({title:id});
        res.status(200).send(product);
    }
}