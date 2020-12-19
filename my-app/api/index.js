const api = require('./api')

const port = process.env.PORT ? parseInt(process.env.PORT,10): 9000;
const hostname = process.env.API_HOST ? process.env.API_HOST: 'localhost';
const scheme = process.env.SECURE_API ? 'https' : 'http';
const origin = `${scheme}://${hostname}:${port}`

 
api.listen(port, () => {
console.log(`Server is running and listening on port ${origin}`);
});
