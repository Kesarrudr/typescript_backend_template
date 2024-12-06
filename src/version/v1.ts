import { Router } from "express";
import { HealthCheckController } from "../controller/health.controller";

const router = Router();

router.use("/health", HealthCheckController);

export { router as V1Route };
