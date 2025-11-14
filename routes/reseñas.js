import express from "express";
import Reseña from "../models/reseña.js";

const router = express.Router();

// Obtener todas las reseñas
router.get("/", async (req, res) => {
  const reseñas = await Reseña.find();
  res.json(reseñas);
});

// Agregar una reseña
router.post("/", async (req, res) => {
  const nuevaReseña = new Reseña(req.body);
  await nuevaReseña.save();
  res.json({ mensaje: "Reseña agregada correctamente" });
});

// Editar una reseña
router.put("/:id", async (req, res) => {
  await Reseña.findByIdAndUpdate(req.params.id, req.body);
  res.json({ mensaje: "Reseña actualizada" });
});

// Eliminar una reseña
router.delete("/:id", async (req, res) => {
  await Reseña.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Reseña eliminada" });
});

export default router;
