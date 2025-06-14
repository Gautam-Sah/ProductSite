import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import { connectDB } from './config/connectDB.js'
import router from './routes/product.route.js'
import path from 'path'

const __dirname = path.resolve()

app.use(express.json())

app.use('/api/product', router)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "frontend", "dist")))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })

}

app.listen(process.env.PORT, async () => {
    await connectDB()
    console.log("server is listening on port 3000.......")
})
