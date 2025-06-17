import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./routes/authRoutes.js";
import gameRoutes from "./routes/gameRoutes.js";
import guessRoutes from "./routes/guessRoutes.js";
import rankingRoutes from "./routes/rankingRoutes.js";
import syncRoutes from "./routes/syncRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/guesses", guessRoutes);
app.use("/api/games", gameRoutes);
app.use("/api/ranking", rankingRoutes);
app.use("/api/sync", syncRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes)

app.get("/", (req, res) => res.send("API do Bolão no ar!"));

app.listen(3000, () => console.log("🚀 Servidor rodando em http://localhost:3000"));
