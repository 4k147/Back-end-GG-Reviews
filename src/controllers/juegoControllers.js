import Juego from "../models/Juego.js";

// GET /api/juegos
export const getJuegos = async (req, res) => {
  try {
    const juegos = await Juego.find().sort({ createdAt: -1 });
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener juegos" });
  }
};

// POST /api/juegos
export const crearJuego = async (req, res) => {
  try {
    const nuevo = new Juego(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};