const config = require('./config')
const app = require('./app')

app.get('/', (req, res) => {
    res.send(`Rodando no ambiente: ${config.nodeEnv}`);
});

app.listen(config.port, () => {
    console.log(`Servidor rodando na porta ${config.port}`);
});