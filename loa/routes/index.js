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
router.post('/loa',createLoa);
router.delete('/loa',deleteLoa);
router.put('/signloa/:id', updateLoa);
// router.put('/resetloa/:id',resetLoa);

module.exports = router;
