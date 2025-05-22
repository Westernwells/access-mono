import { Router } from "express";
import { exampleController } from "../controllers/exampleController";

const router = Router();

router.post("/user-sign-up", exampleController);

export default router;
