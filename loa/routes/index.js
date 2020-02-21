var express = require("express");
const {
  getLoa,
  createLoa,
  updateLoa,
  resetLoa,
  deleteLoa
} = require("../controllers/loaController");

var router = express.Router();

router.get('/loa',getLoa);
// router.post('/loa',createLoa);
// router.delete('/loa',deleteLoa);
// router.get('/loa/:id', updateLoa);
// router.put('/loa/:id',resetLoa);

module.exports = router;
