require('dotenv').config();
const express = require('express');
const cors = require('cors');
const employeeRoute = require('./routes/employeeRoute');

const app = express();
app.use(cors());

app.use(express.json());
app.use('/employees', employeeRoute);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
