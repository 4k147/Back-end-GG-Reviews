import express from "express";
import Juego from "../models/juego.js";

const router = express.Router();

// Obtener todos los juegos
router.get("/", async (req, res) => {
  const juegos = await Juego.find();
  res.json(juegos);
});

// Agregar un nuevo juego
router.post("/", async (req, res) => {
  const nuevoJuego = new Juego(req.body);
  await nuevoJuego.save();
  res.json({ mensaje: "Juego agregado correctamente" });
});

// Editar un juego
router.put("/:id", async (req, res) => {
  await Juego.findByIdAndUpdate(req.params.id, req.body);
  res.json({ mensaje: "Juego actualizado" });
});

// Eliminar un juego
router.delete("/:id", async (req, res) => {
  await Juego.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Juego eliminado" });
});

export default router;
