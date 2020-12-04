import axios from 'axios';
import consoleLog from './logger';

import { GLOBAL_ERROR_MESSAGE } from './constants';

export const route = (path) => (
  `${process.env.REACT_APP_API}${path}`
);

/**
 * [request Make XMLHttpRequests from the browser ]
 * @param  {[type]} options [All the data to be sent to server
 * The formate of options is below]
 * {
 *   method: 'GET',
 *   url: URL,
 *   data: {
 *     param1: 'x'
 *   }
 * };
 * @return {[type]} [It return the response or error object using Promise]
 * @example below
 * const { status, data } = await request({ url: route('/products'), method: 'GET' });
 */
export const request = async (options) => {
  let response = {
    status: 500,
    error: GLOBAL_ERROR_MESSAGE,
  };

  const startTime = new Date().getTime();

  // extract configuration
  let { data, headers } = options;
  const {
    url, method,
  } = options;

  if (!headers || !headers['Content-Type']) {
    headers = { 'Content-Type': 'application/json' };
  }
  /**
   * NOTE
   * In case of the below request header 'multipart/form-data'
   * axios doesn't expect the post request data in format `data: { formData }`
   * Instead formData should be sent directly as the payload
   */
  if (headers['Content-Type'] === 'multipart/form-data') {
    data = data.formData;
  }

  // make configuration
  const configuration = {
    url,
    headers,
    method,
    data,
    json: true,
    // indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    withCredentials: false,
  };

  // configuration.headers.Authorization = <token>;

  consoleLog.info(
    'Initiating Request for for API call:\n',
    configuration.url,
  );

  response = await axios(configuration).catch((error) => {
    if (!error.response) {
      // Something happened in setting up the request that triggered an Error
      // or there was no response.
      throw new Error(error.message || GLOBAL_ERROR_MESSAGE);
    }
    const { response: { status: errorStatus, headers: errorHeaders, data: errorData } } = error;
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx. Return to allow external handling.
    consoleLog.error('Error status code: \n', errorStatus ?? errorStatus);
    consoleLog.error('Error headers: \n', errorHeaders ?? errorHeaders);
    consoleLog.error('Error response: \n', errorData ?? errorData);

    return error.response;
  });

  const {
    status,
  } = response;

  if (status) {
    consoleLog.info(
      'Request for API call: ',
      configuration.url,
      '\n',
      'Completed with Status Code:',
      status,
    );
    // Only process request time when in DEBUG mode.
    const endTime = new Date().getTime();
    const delta = endTime - startTime;
    if (delta > 500) {
      consoleLog.warn(
        `Warning: Alert! API Call for ${configuration.url} took ${delta} ms !!!`,
      );
    }
  }

  return response;
};

export default {
  request,
  route,
};
