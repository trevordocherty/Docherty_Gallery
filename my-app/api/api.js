const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const port = process.env.PORT ? parseInt(process.env.PORT,10): 9000;
const hostname = process.env.API_HOST ? process.env.API_HOST: 'localhost';
const scheme = process.env.SECURE_API ? 'https' : 'http';
const api = express();
const origin = `${scheme}://${hostname}:${port}`

api.use(helmet());

api.use(cors({
origin: origin
}));

 api.get('/status', (req, resp) => {
resp.status(200).json({
    status: 'OK',
    message: 'The API is operating as expected'
});
 });
 api.get('/error',(req,resp) => {
     throw new Error('it broke');
 });
 
api.listen(port, () => {
console.log(`Server is running and listening on port ${origin}`);
});
