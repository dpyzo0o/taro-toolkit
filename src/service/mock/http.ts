import apiDef from '~/constants/api';
import data from './data';
import { IFetchOption } from '../http';

function fetch(option: IFetchOption) {
  const { url, data: payload } = option;
  const delay = Math.floor(Math.random() * 1000);

  console.group('%c REQUEST', 'color: #aeda55');
  console.log('Url ->', url);
  console.log('Params ->', payload);
  console.groupEnd();

  return new Promise((resolve, reject) => {
    const key = Object.keys(apiDef).find(k => apiDef[k] === url) as string;
    const result = data[apiDef[key]];

    setTimeout(() => {
      const res = typeof result === 'function' ? result(payload) : result;

      console.group('%c RECEIVE', 'color: #428df5');
      console.log('Url ->', url);
      console.log('Results -> ', res);
      console.groupEnd();

      if (res.code === 200) {
        resolve(res);
      } else {
        reject({
          code: res.code,
          message: res.message,
        });
      }
    }, delay);
  });
}

export default {
  get(option: IFetchOption) {
    return fetch(option);
  },
  post(option: IFetchOption) {
    return fetch(option);
  },
};
