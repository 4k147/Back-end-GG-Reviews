import express from "express";
import { crearReseña, getReseñas } from "../controllers/reseñaControllers.js";

const router = express.Router();

router.get("/", getReseñas);
router.post("/", crearReseña);

export default router;