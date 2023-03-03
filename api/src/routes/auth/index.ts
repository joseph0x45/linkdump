import { Router } from "express";
import AuthService from "../../services/Auth";

const router = Router()

router.route("/register").post( AuthService.register )
router.route("/login").post( AuthService.login )

export default router