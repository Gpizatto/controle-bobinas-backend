const Historico = require("../models/Historico");

exports.getAll = async (req, res) => {
  const lista = await Historico.find().sort({ data: -1 });
  res.json(lista);
};

exports.create = async (req, res) => {
  const novo = await Historico.create(req.body);
  res.status(201).json(novo);
};