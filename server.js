import app from "./src/app.js";
import database from './src/database/config_bd.js';

const porta = 3000;

database.sync();

app.listen(porta, () => console.log(`Aplicação rodando em http://localhost:${porta}`));