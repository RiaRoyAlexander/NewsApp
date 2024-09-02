import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const { format } = winston;

const logger = winston.createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new DailyRotateFile({
      filename: "logs/application-%DATE%.log",
      datePattern: "YYYY-MM-DD-HH-mm",
      maxFiles: "14d",
      zippedArchive: true,
      frequency: "10m",
    }),
  ],
});

export { logger };
