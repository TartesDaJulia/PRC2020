var express = require("express");
var router = express.Router();
var Filmes = require("../controllers/filmes");

/* GET home page. */
router.get("/filmes", function(req, res) {
  Filmes.getLista()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de filmes: ${e}`));
});

router.get("/filmes/:id/atores", function(req, res) {
  Filmes.getAtoresDoFilme(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e =>
      res
        .status(500)
        .send(`Erro na listagem de atores do filme${req.params.id}: ${e}`)
    );
});

router.get("/filmes/:id/generos", function(req, res) {
  Filmes.getGenerosDoFilme(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e =>
      res
        .status(500)
        .send(`Erro na listagem dos generos do filme${req.params.id}: ${e}`)
    );
});

router.get("/filmes/:id/personagens", function(req, res) {
  Filmes.getPersonagensDoFilme(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e =>
      res
        .status(500)
        .send(`Erro na listagem das personagens do filme${req.params.id}: ${e}`)
    );
});

router.get("/filmes/:id", function(req, res) {
  Filmes.getFilme(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e =>
      res
        .status(500)
        .send(`Erro na listagem dos detalhes do filme${req.params.id}: ${e}`)
    );
});

module.exports = router;
