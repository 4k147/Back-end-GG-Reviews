import mongoose from "mongoose";

const reseñaSchema = new mongoose.Schema({
  juegoId: { type: mongoose.Schema.Types.ObjectId, ref: "Juego", required: true },
  nombreJuego: { type: String, required: true },
  comentario: { type: String, required: true, minlength: 10 },
  puntuacion: { type: Number, required: true, min: 1, max: 10 },
  autor: { type: String, default: "Anónimo" }
}, { timestamps: true });

export default mongoose.model("Reseña", reseñaSchema);