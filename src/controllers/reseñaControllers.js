import Reseña from "../models/Reseña.js";
import Juego from "../models/Juego.js";

// POST /api/resenas
export const crearReseña = async (req, res) => {
  try {
    const { juegoId, nombreJuego, comentario, puntuacion } = req.body;

    const nuevaReseña = new Reseña({
      juegoId,
      nombreJuego,
      comentario,
      puntuacion
    });

    await nuevaReseña.save();

    // Actualizar rating promedio del juego
    const reseñas = await Reseña.find({ juegoId });
    const promedio = reseñas.reduce((sum, r) => sum + r.puntuacion, 0) / reseñas.length;

    await Juego.findByIdAndUpdate(juegoId, { 
      $push: { reseñas: nuevaReseña._id },
      rating: Math.round(promedio * 2) / 2  // redondear a .0 o .5
    });

    res.status(201).json({ mensaje: "Reseña enviada con éxito", reseña: nuevaReseña });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al enviar reseña" });
  }
};

// GET /api/reseñas
export const getReseñas = async (req, res) => {
  try {
    const reseñas = await Reseña.find().sort({ createdAt: -1 });
    res.json(reseñas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener reseñas" });
  }
};