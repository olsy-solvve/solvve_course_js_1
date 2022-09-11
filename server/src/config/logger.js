// https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-pino-to-log-node-js-applications/#create-custom-destinations-based-on-log-level
// https://css-tricks.com/how-to-implement-logging-in-a-node-js-application-with-pino-logger/

import pino from "pino";
import pretty from "pino-pretty";
import path from "path";

const __dirname = path.resolve();

const streams = [
  {
    stream: pretty({
      colorize: true,
      levelFirst: true,
      translateTime: "yyyy-dd-mm, h:MM:ss TT",
    }),
  },
  { stream: pino.destination(path.resolve(__dirname, "src", "logger.log")) },
];

const logger = pino(
  {
    level: process.env.PINO_LOG_LEVEL || "info",
    formatters: {
      level: (label) => {
        return { level: label };
      },
    },
  },
  pino.multistream(streams),
);

export default logger;
