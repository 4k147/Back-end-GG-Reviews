import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
import juegoRoutes from "./routes/juegoRoutes.js";
import reseñaRoutes from "./routes/reseñaRoutes.js";

app.use("/api/juegos", juegoRoutes);
app.use("/api/reseñas", reseñaRoutes);

app.get("/", (req, res) => {
  res.send("GGReviews API - Backend corriendo");
});

// Conexión DB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB Atlas - GGReviews"))
  .catch(err => console.error("Error MongoDB:", err));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});