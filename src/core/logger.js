const LOG_LEVEL = process.env.REACT_APP_DEBUG && (process.env.LOG_LEVEL || 'debug');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const consoleLog = {
  info: (...msg) => {
    if (LOG_LEVEL === 'log' || LOG_LEVEL === 'debug') {
      // eslint-disable-next-line no-console
      console.info(new Date().toISOString(), ...msg);
    }
  },

  warn: (...msg) => {
    if (LOG_LEVEL === 'warn' || LOG_LEVEL === 'debug') {
      console.warn(new Date().toISOString(), ...msg);
    }
  },

  error: (...err) => {
    if (LOG_LEVEL === 'error' || LOG_LEVEL === 'debug') {
      console.error(new Date().toISOString(), ...err);
    }
  },
};

export default consoleLog;
