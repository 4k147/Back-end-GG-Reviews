import mongoose from "mongoose";

const reseñaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  juego: { type: String, required: true },
  comentario: { type: String, required: true },
  estrellas: { type: Number, min: 1, max: 5 }
});

export default mongoose.model("reseña", reseñaSchema);
