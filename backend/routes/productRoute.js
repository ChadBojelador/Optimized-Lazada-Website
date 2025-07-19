import express from 'express';
import { getAllProductcontroller, addProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/products', getAllProductcontroller);
router.post('/products', addProduct);

export default router;