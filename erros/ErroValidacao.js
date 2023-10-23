import RequisiçaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisiçaoIncorreta {
  constructor(erro) {
    const mensagensErro = Object.values(erro.errors)
      .map((erro) => erro.message)
      .join("; ");
    super(`Os seguintes erros foram encontrados:  ${mensagensErro}`);
  }
}

export default ErroValidacao;
