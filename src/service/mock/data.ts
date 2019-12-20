import apiDef from '~/constants/api';
import { IResponse } from '../http';

export interface ResponseFunc {
  (payload: any): IResponse;
}

type MockData = Record<string, IResponse | ResponseFunc>;

const mockData: MockData = {
  [apiDef.login]: {
    code: 200,
    message: 'success',
    data: {
      name: 'dpyzo0o',
      age: 100,
    },
  },
  [apiDef.test]: () => ({
    code: 200,
    message: 'success',
    data: {
      greeting: 'hello taro-toolkit',
    },
  }),
};

export default mockData;
