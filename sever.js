import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 4000;

// 🧠 Middlewares
app.use(cors());
app.use(express.json());

// 🗄️ Conexión a MongoDB Atlas
mongoose.connect("mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/MaxOchoaBeltran}")
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error de conexión:", err));

// 📦 Rutas
import juegosRoutes from "./routes/juegos.js";
import reseñasRoutes from "./routes/reseñas.js";

app.use("/api/juegos", juegosRoutes);
app.use("/api/reseñas", reseñasRoutes);

// 🚀 Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
