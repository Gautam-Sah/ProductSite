import express from "express";
const router = express.Router()
import { getProducts, createProduct, deleteProduct, updateProduct } from "../controllers/product.controller.js";
router.get('/', getProducts)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.patch('/:id', updateProduct)
export default router
