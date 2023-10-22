const Product = require('../models/product')



const createProductCard = async (req, res) => {
    // Get sent-in data from the request body
    const { title, description, price, image, category } = req.body;

    // Create a product
    const product = await Product.create({
        title,
        description,
        price,
        image,
        category,
    });

    // Respond with the new product card
    res.json(product);
}


const fetchAllProducts = async (req, res) => {
    //find all reviews
    const products = await Product.find()
    //respond with them
    res.json(products)
}


const fetchSingleProduct = async (req, res) => {
    //get id off url
      const productId = req.params.id
    //find the product
    const  product = await Product.findById(productId)
    //res with note
    res.json(product)
}


const updateProduct = async (req, res) =>{
    const productId = req.params.id
    const { title, description, price, image, category } = req.body;
    await Product.findByIdAndUpdate(productId,{
        title,
        description,
        price,
        image,
        category,
    })

    //find updated product
    const product = await Product.findById(productId)
    
    res.json(product)
}

const deleteProduct = async (req, res) =>{
    const productId = req.params.id

    const product = await Product.findByIdAndDelete(productId)

    res.json(product)
    
}

module.exports = {
    fetchAllProducts, fetchSingleProduct, updateProduct, deleteProduct, createProductCard
}