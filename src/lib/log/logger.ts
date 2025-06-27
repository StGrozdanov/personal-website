import { format, createLogger, transports } from 'winston';

const logFormat = format.combine(
  format.timestamp(),
  format.errors({ stack: true }),
  format.printf(info => {
    return `timestamp: ${info.timestamp} level: ${info.level} message: ${info.message}`;
  }),
);

const logger = createLogger({
  level: 'info',
  format: format.combine(logFormat, format.json(), format.colorize()),
  transports: [new transports.Console()],
});

export default logger;
