import mongoose from "mongoose";

const juegoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  plataforma: { type: String, enum: ["pc", "consola", "movil"], required: true },
  categoria: { type: String, required: true },
  imagen: { type: String, default: "/img/default.jpg" },
  rating: { type: Number, min: 0, max: 5, default: null },
  reseñas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reseña" }]
}, { timestamps: true });

export default mongoose.model("Juego", juegoSchema);