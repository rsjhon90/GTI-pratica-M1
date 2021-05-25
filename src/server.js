import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('🌠 Server trabalho prático 1 started! on port 3000')
});

export default app;