import express from 'express';
import cors from 'cors';
import { produtoRouter } from './routes/produto.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Status
app.get('/status', (req, res) => {
  return res.json({ status: 'Api rodando' });
});

app.use('/produtos', produtoRouter);

const PORT = process.env.PORT || 5433;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
