import { Router } from "express";
import { userSignUpController } from "controllers/userSignUp";
import { requestSmsVerifCodeController } from "controllers/requestSmsVerifCode";
import { userSignInController } from "controllers/userSignIn";

const router = Router();

router.post("/user-sign-up", userSignUpController);
router.post("/user-sign-in", userSignInController);
router.post("/request-sms-verif-code", requestSmsVerifCodeController);

export default router;
