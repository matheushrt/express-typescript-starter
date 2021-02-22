import pino from 'pino';
import expressPinoLogger from 'express-pino-logger';

const isProductionEnv = process.env.NODE_ENV === 'production';

const logger = pino({
  prettyPrint: !isProductionEnv && {
    levelFirst: true,
    colorize: true,
    translateTime: true,
  },
  level: !isProductionEnv && 'debug',
});

const pinoLogger = pino(
  pino.destination({
    dest: './api-logs.log',
    sync: false,
  })
);

const expressLogger = expressPinoLogger({
  logger: !!isProductionEnv && pinoLogger,
  autoLogging: !!isProductionEnv,
});

export { expressLogger, logger };
