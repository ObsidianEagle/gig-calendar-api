require('dotenv').config();
const axios = require('axios').default;
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;
const sheetId = process.env.SHEET_ID;

app.get('/', (_, res) => {
  axios
    .get(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A:E?key=${apiKey}`)
    .then((r) => res.send(r.data))
    .catch((e) => res.status(500).send(`Failed to retrieve sheet data: ${JSON.stringify(e)}`))
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
