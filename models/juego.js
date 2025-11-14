import mongoose from "mongoose";

const juegoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String, required: true },
  descripcion: String,
  completado: { type: Boolean, default: false },
  horasJugadas: { type: Number, default: 0 },
  puntuacion: { type: Number, min: 0, max: 5 }
});

export default mongoose.model("juego", juegoSchema);
