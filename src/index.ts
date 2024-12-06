import express from "express";
import cors from "cors";
import { V1Route } from "./version/v1";
import { errorHandler } from "./utilis";

const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use("/api/v1", V1Route);

  //Error Handler must be last
  app.use(errorHandler);
  return app;
};

export default createServer;
