import express from "express";
import { getJuegos, crearJuego } from "../controllers/juegoControllers.js";

const router = express.Router();

router.get("/", getJuegos);
router.post("/", crearJuego);

export default router;