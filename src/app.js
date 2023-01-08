import express from 'express';
import config from './config/index.js';

const app = express();

app.listen(3000, () => console.log(`
🟢  Server listening on port: ${config.port}
`));
