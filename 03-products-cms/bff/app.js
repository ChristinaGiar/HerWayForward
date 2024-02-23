import express from "express";
import bodyParser from "body-parser";
import contentRoutes from './routes/content.js';
import cors from 'cors';

const app = express();
app.use(cors())

app.use(bodyParser.json());

const errorHandler = (error, req, res) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
};

app.use(contentRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Listening to " + PORT);
});