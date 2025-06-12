const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/bobinaController");

router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);
router.post("/", ctrl.create);
router.put("/:id/saida", ctrl.saida);

module.exports = router;