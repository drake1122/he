import express from 'express';
import { healthRouter } from './routes/health.route';

const app = express();
app.use(express.json());

app.use('/api/health', healthRouter);

const port = Number(process.env.PORT || 4000);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`[carematch-backend] listening on :${port}`);
  });
}

export { app };
