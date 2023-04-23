import winston from 'winston';
require('winston-daily-rotate-file');
const logFile = 'socket'; //mircoservice name
const dateFormat = () => {
    return new Date(Date.now()).toUTCString()
}

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile({
            filename: `./logs/${logFile}-%DATE%.log`,
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        })
    ],
    format:
        winston.format.combine(
            winston.format.printf((info) => {
                let message = `${dateFormat()} | ${info.level.toUpperCase()} | ${logFile}.log | ${info.message} | `
                message = info.obj ? message + `data:${JSON.stringify(info.obj)} | ` : message
                // message = this.log_data ? message + `log_data:${JSON.stringify(this.log_data)} | ` : message
                return message
            }),
            winston.format.colorize())
});

const logError = function (message, obj) {
    logger.log('error', message, { obj });
}

const logInfo = function (message, obj) {
    logger.log('info', message, { obj });
}

const logDebug = function (message, obj) {
    logger.log('debug', message, { obj });
}
module.exports = {
    logError,
    logInfo,
    logDebug
};