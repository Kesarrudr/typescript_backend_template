import { Response } from "express";

enum StatusEnum {
  success = "success",
  error = "error",
}

const sendResponse = (
  res: Response,
  statusCode: number,
  status: StatusEnum,
  message: string,
  data: any = null,
) => {
  res.status(statusCode).json({
    status,
    message,
    data,
  });
};
export { sendResponse, StatusEnum };
