// index.js
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import adminRoutes from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

 connectDB();
(async () => {
  

  app.use(cors());
  app.use(express.json());

  app.get('/', (_req, res) => {
    res.send('API is working');
  });

  app.use('/api/admin', adminRoutes);
  app.use('/api/blog', blogRouter);

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();

export default app;