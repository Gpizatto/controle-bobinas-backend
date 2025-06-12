const Bobina = require("../models/Bobina");

exports.getAll = async (req, res) => {
  const bobinas = await Bobina.find();
  res.json(bobinas);
};

exports.getById = async (req, res) => {
  const bobina = await Bobina.findById(req.params.id);
  if (!bobina) return res.status(404).json({ error: "Bobina não encontrada" });
  res.json(bobina);
};

exports.create = async (req, res) => {
  const dados = req.body;
  dados.codigoQR = `BOBINA-${Date.now()}`;
  dados.dataEntrada = new Date();
  const nova = await Bobina.create(dados);
  res.status(201).json(nova);
};

exports.saida = async (req, res) => {
  const { id } = req.params;
  const { peso, tipoMaquina, usuario, observacoes } = req.body;
  const bobina = await Bobina.findById(id);
  if (!bobina) return res.status(404).json({ error: "Bobina não encontrada" });
  if (peso > bobina.peso) return res.status(400).json({ error: "Peso maior que o disponível" });
  bobina.peso -= peso;
  bobina.dataSaida = new Date();
  bobina.status = "EM_USO";
  await bobina.save();
  res.json({ message: "Saída registrada", bobina });
};