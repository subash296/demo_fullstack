import express from  'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import bodyParser from 'body-parser'
import productRoutes from "./routes/product.route.js";
import cors from 'cors'
import path from 'path'


dotenv.config()
const app=express()
const port=process.env.PORT || 5000


const __dirname = path.resolve();
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api/products",productRoutes)
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}
app.listen(port,()=>{
   connectDB()
    console.log(`app is listening on the port ${port}`);
    
})
// subashvj78
// 45e1Eomz3wfmDiXB
// mongodb+srv://subashvj78:zuTnR6tWhp8PAktr@cluster0.sh4wa.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0
