import express from 'express';

const app = express();
const port = 8080;
//To solve the bug: No 'Access-Control-Allow-Origin' header is present on the requested resource
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/', (_req, res) => {
    res.send(`Hello ${process.env.env_user_name}!`)
  })

app.get('/hello', (_req, res) => {
    res.send(`Hello World!`)
  })

app.get('/helloTo/:userName', function (req, res) {
    res.send(`Hello ${req.params.userName}!`)
  })

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});