import winston from 'winston';

//Using the printf format and colorizing level.
const customFormat = winston.format.printf(({level, message}) => {
  const logLevel = winston.format.colorize().colorize(level, level.toUpperCase());
  return `[${logLevel}] : ${message}`;
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL,
  format: customFormat,
  transports: [new winston.transports.Console()],
});

export default logger;
