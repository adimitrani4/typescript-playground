import express from 'express';

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});