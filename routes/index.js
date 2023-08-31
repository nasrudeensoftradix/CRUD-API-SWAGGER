import express from "express";
import heroRoutes from "./routes.js";
const router = express.Router();

router.use(heroRoutes);

export default router;
