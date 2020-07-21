const app = require('./app')

const port = parseInt(process.env.PORT, 10) || 3000;

app.listen(port, () => console.log(`Live at ${port}`));