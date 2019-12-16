import apiDef from '~/constants/api';
import data, { ResponseFunc } from './data';
import { FetchOption, ResponseData } from '../http';

function fetch(option: FetchOption) {
  const { url, data: payload } = option;
  const delay = Math.floor(Math.random() * 1000);

  console.group('%c REQUEST', 'color: #aeda55');
  console.log('Url ->', url);
  console.log('Params ->', payload);
  console.groupEnd();

  return new Promise((resolve, reject) => {
    const key = Object.keys(apiDef).find(k => apiDef[k] === url) as string;
    setTimeout(() => {
      const res =
        typeof data[key] === 'function'
          ? (data[key] as ResponseFunc)(payload)
          : (data[key] as ResponseData);

      console.group('%c RECEIVE', 'color: #428df5');
      console.log('Url ->', url);
      console.log('Results -> ', res);
      console.groupEnd();

      if (res.errorCode === 200) {
        resolve(res);
      } else {
        reject({
          errorCode: res.errorCode,
          errorMessage: res.errorMessage,
        });
      }
    }, delay);
  });
}

export default {
  get(option: FetchOption) {
    return fetch(option);
  },
  post(option: FetchOption) {
    return fetch(option);
  },
};
