import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", console.log.bind(console, "Erro de conexão"));
conexao.once("open", () => {
  console.log("Conexão feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

export default app;
