import { Router } from "express";
import { exampleController } from "../controllers/exampleController";

const router = Router();

router.post("/example-route", exampleController);

export default router;
