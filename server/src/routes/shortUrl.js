import express from "express";
import {
  createUrl,
  getAllUrl,
  getUrl,
  deleteUrl,
} from "../controllers/shortUrl.js";
const router = express.Router();

router.post("/", createUrl);
router.get("/info", getAllUrl);
router.get("/:id", getUrl);
router.delete("/:id", deleteUrl);

export default router;
