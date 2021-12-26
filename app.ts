import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send(`Hello ${process.env.env_user_name}!`)
  })

app.get('/hello', (req, res) => {
    res.send(`Hello World!`)
  })

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});