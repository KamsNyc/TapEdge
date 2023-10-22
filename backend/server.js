//load env
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  
  //import dependencies
  const express = require("express");
  const connectToDb = require("./config/connectToDb");
  const cors = require("cors");
  const productsController = require('./controllers/productsController');


//import dependencies
const app = express();
connectToDb();

  
//config express
app.use(express.json());
app.use(cors());


//routes


//create a product cart
app.post('/productcard', productsController.createProductCard);


//get a all reviews
app.get('/allproductcard', productsController.fetchAllProducts)

//get single product
app.get('/productcard/:id', productsController.fetchSingleProduct)

//update a product
app.put('/productcard/:id', productsController.updateProduct)

//delete product
app.delete('/productcard/:id', productsController.deleteProduct)




//start the server
app.listen(process.env.PORT || PORT, () => {
    console.log(process.env.PORT)
} )