import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res, next) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      next(erro);
    }
  }

  static async listarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarLivro(req, res, next) {
    const novoLivro = req.body;
    try {
      const autorEcontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEcontrado._doc } };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({
        message: "criado com sucesso",
        livro: livroCriado,
      });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado" });
    } catch (erro) {
      next(erro);
    }
  }

  static async apagarLivro(req, res, next) {
    const id = req.params.id;
    try {
      await livro.findByIdAndDelete(id, req.body);
      res.status(200).json({ message: "livro deletado" });
    } catch (erro) {
      next(erro);
    }
  }

  static async listarLivrosPorEditora(req, res, next) {
    const editora = req.query.editora;

    try {
      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json({ livrosPorEditora });
    } catch (erro) {
      next(erro);
    }
  }
}

export default LivroController;
