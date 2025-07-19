import Product from "../models/Product.js"



export const getAllProductcontroller = async(req,res) =>{

    try{
        const products = await Product.find();
            res.status(200).json({products});

    }catch(error){
        console.error("Products failed to load")
         res.status(500).json({message: "Failed to load"})
    }
}

export const addProduct = async(req,res) =>{
    try{
        const {products, imageURL} = req.body;

        const product = new Product({
            products,
            imageURL
        })
        
         if(!product){
            res.status(400).json({message:"No product was added"})
         }

        await product.save();
        res.status(200).json({message: `Product was added.`,
                              product: newProduct
        })

    }catch(error){
        res.status(500).json({message:"Failed to add"})
    }
}