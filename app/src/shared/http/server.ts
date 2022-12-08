import express from 'express';
import cors from 'cors';
import routes from './routes';
import { AppDataSource } from 'src/database/datasource';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server listen on port 3333.');
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err);
  });

