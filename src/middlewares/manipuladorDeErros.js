import mongoose from "mongoose";
import ErroBase from "../../erros/ErroBase.js";
import RequisiçaoIncorreta from "../../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../../erros/ErroValidacao.js";
import NaoEncontrado from "../../erros/naoEncotrado.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new RequisiçaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarResposta(res);
  } else if (erro instanceof NaoEncontrado) {
    erro.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;
