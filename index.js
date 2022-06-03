const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const src = path.join(__dirname, '/src');
const indexHTMLFile = path.join(__dirname, '/src/index.html');

app.use(express.static(src));

app.get('/', (req, res) => res.sendFile(indexHTMLFile));
app.get('/strona-glowna', (req, res) => res.sendFile(indexHTMLFile));

app.listen(port, () => console.log(`Server listening on: http://localhost:${port}`));
