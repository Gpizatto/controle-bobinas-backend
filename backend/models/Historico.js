const mongoose = require("mongoose");

const HistoricoSchema = new mongoose.Schema({
  idBobina: { type: mongoose.Schema.Types.ObjectId, ref: "Bobina" },
  tipoMovimentacao: String,
  tipoMaquina: String,
  quantidade: Number,
  usuario: String,
  observacoes: String,
  data: Date
}, { timestamps: true });

module.exports = mongoose.model("Historico", HistoricoSchema);