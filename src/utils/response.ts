import { Request, Response } from 'express';
import { STATUS_CODE } from '../constants/status-code';
import { STATUS_MESSAGE } from '../constants/status-message';

export const sendResponse = (req: Request, res: Response, code?: number, message?: string, data?: any, errorCode?: string) => {
  try {
    let statusCode = code || STATUS_CODE.SUCCESS;
    message = message || STATUS_MESSAGE.SUCCESS;
    data = data || {};
    const response: any = {
      statusCode,
      status: true,
      message,
      data,
    };
    if (data === "error") {
      response.error_code = errorCode || "AU101";
    }
    return res.status(statusCode).send(response);
  } catch (error) {
    console.log("sendResponse", error);
    throw error;
  }
};

export const sendErrorResponse = async (req: Request, res: Response, code?: number, error?: any, log: any = {}) => {
  try {
    const statusCode = code || STATUS_CODE.BAD_REQUEST;
    const message: any = {
      message: error?.message || STATUS_MESSAGE.INTERNAL_SERVER_ERROR,
    };
    message.errorCode = error?.errorCode || "AU101";
    if (Object?.keys(log)?.length) {
      console.error(log);
    }
    return res.status(statusCode).send({
      status: false,
      statusCode,
      error: message,
    });
  } catch (error) {
    console.log("sendErrorResponse", error);
    throw error;
  }
};
