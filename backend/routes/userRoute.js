import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import { productListing } from "../controllers/productController.js";

const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/products',productListing);
export default router;