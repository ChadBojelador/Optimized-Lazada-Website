import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    productName: {type:String, required: true},
    Stock: {type:Number, required: true},
    imageURL:{type:String, required: true}
})

export const Product = mongoose.model('Product', productSchema);