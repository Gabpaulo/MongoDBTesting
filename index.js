

const express = require('express')
const mongoose=require('mongoose');
const Product = require('./models/product.model.js')

const app = express()
app.use(express.json());




app.get('/',(req,res)=> {
    res.send("Server is On");
})

app.get('/hello',(req,res)=> {
    res.send("Hotdog")
})
app.get('/api',async(req,res)=> {
        res.send("go to products to see list")
})
app.get('/api/products',async(req,res)=> {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    }   
    catch(error){
        res.status(500).json({meesage:error.message});
    } 
})




app.get('/api/products/:id',async(req,res)=> {
    try {
       const {id}=req.params;
       const product =await Product.findById(id);
       res.status(200).json(product)
    }   
    catch(error){
        res.status(500).json({meesage:error.message});
    } 
})


app.post ('/api/products',async(req,res)=>{
    try {
         product = await  Product.create(req.body);
         res.status(200).json(product);
    }catch (error){
        res.status(500).json({message:error.message});
    }
})




mongoose.connect('mongodb+srv://paulogabriel232323:potanginamo123@backenddb.4kr4e.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackEndDB')
.then(()=>{
    console.log("Connected to The Server");
    app.listen(3000,()=>{
    console.log("Server is Running on Port 3000")
    })
})
.catch(()=>{
    console.log("Connection Failed");
});



async function addProduct(name,qty,imgSrc,price) {
    try {
        const newProduct = new Product({
            name: `${name}`,
            quantity: qty,
            price: price,
            image: `${imageSrc}`
        });

        await newProduct.save();

        console.log("New Product Added:", newProduct);
    } catch (error) {
        console.error("Error adding product:", error.message);
    }
}
