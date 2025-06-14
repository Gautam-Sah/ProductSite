import mongoose from "mongoose"
import Product from "../models/product.model.js"

export const getProducts = async (req, res) => {

    try {
        const products = await Product.find({})
        res.status(200).json({ success: true, products: products })
    } catch (error) {
        res.status(500).json({ success: false, message: "server error" })
        console.error(error.message)
    }
}

export const createProduct = async (req, res) => {

    const { name, price, image } = req.body

    if (!name || !price || !image) {
        res.status(400).json({ success: false, message: "Please provide all fields" })
    }
    try {
        const newProduct = await Product.create(req.body)
        res.status(200).json({ success: true, newProduct: newProduct })
    } catch (error) {
        res.status(500).json({ success: false, message: "server error" })
        console.error(error.message)
    }

}


export const deleteProduct = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "Invalid id " })
    }
    try {

        await Product.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: `deleted the product by ${id}` })


    } catch (error) {
        res.status(500).json({ success: false, message: "server error" })
        console.error(error.message)
    }
}

export const updateProduct = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "Invalid id " })
    }
    try {

        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            runValidators: true,
            new: true,
        })
        res.status(200).json({ success: true, updatedProduct })


    } catch (error) {
        res.status(500).json({ success: false, message: "server error" })
        console.error(error.message)
    }
}
