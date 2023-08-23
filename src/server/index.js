require('dotenv').config({ path: './w3s-dynamic-storage/.env' })
import { resolve } from 'path';
import express,{ static,json } from 'express';

const app = express();

app.use(static('dist'));
app.use(json());

app.get('/api/hello', async (req, res) => {
  res.send('Hello world');
});

const clientApp = express();
clientApp.use(static('dist'));
clientApp.use(json());

clientApp.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, '../../dist', 'index.html'));
});


app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}!`));

if (process.env.NODE_ENV !== 'development') {
  clientApp.listen(8000, () => console.log('client listening on port 8000'));
}
