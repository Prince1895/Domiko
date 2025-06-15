import express from 'express';
import 'dotenv/config';
import cors from 'cors'
import connectDB from './config/db.js';
import adminRoutes from './routes/adminroutes.js';
import blogRouter from './routes/blogRoutes.js';


const app = express();

(async () => {
    await connectDB();

    //middleware
    app.use(cors());
    app.use(express.json());
    //Routes
    app.get('/', function(_req, res) {
        res.send("api is working")
    })

    app.use('/api/admin', adminRoutes)
    app.use('/api/blog', blogRouter)

    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
        console.log('server is running on the port ' + PORT)
    });
})();

export default app;