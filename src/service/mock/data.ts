import apiDef from '~/constants/api';
import { ResponseData } from '../http';

export interface ResponseFunc {
  (payload: any): ResponseData;
}

type MockData = Record<string, ResponseData | ResponseFunc>;

const mockData: MockData = {
  [apiDef.login]: {
    errorCode: 200,
    errorMessage: 'success',
    data: {
      name: 'dpyzo0o',
      age: 100,
    },
  },
  [apiDef.test]: () => ({
    errorCode: 200,
    errorMessage: 'success',
    data: {
      greeting: 'hello taro-toolkit',
    },
  }),
};

export default mockData;
