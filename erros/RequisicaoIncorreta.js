import ErroBase from "./ErroBase.js";

class RequisiçaoIncorreta extends ErroBase {
  constructor(mensagem = "Um ou mais dados fornecidos estão incorretos") {
    super(mensagem, 400);
  }
}

export default RequisiçaoIncorreta;
