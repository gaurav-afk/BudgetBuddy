import { NextFunction, Request, Response } from "express";
import { createLogger, format, transports } from "winston"


export const logger = createLogger({
  level: 'silly',
  format: format.combine(
    format.colorize(),
    format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    format.printf((data) => {
        const { level, message, timestamp } = data;
        const extraData = data[Symbol.for('splat')];
        const separator = " | "

        let msg = `${timestamp} ${level}: ${message}`;
        if (extraData !== undefined) {
            extraData.forEach((info, index)=> {
                try {
                    msg += ` ${index !== 0 ? separator : ""} ${JSON.stringify(info)}`;
                }
                catch(error) {
                    msg += ` ${index !== 0 ? separator : ""} Cannot Stringify: ${info}`;
                }
            });
        }
        return msg;
    })
  ),
  transports: [
    new transports.Console(),
  ],
});


export const apiLogMiddleware = (req: Request, res: Response, next: NextFunction) => {
    logger.http(req.method, req.protocol + '://' + req.get('host') + req.originalUrl)
    next()
}
