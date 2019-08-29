import express from 'express';
import router from './server/routes/routes';

const app = express();
app.use(express.json());
app.use(router);
const port = process.env.PORT || 3211;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${port}`);
});

module.exports = app;
