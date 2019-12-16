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
  },
  [apiDef.test]: () => ({
    errorCode: 200,
    errorMessage: 'success',
  }),
};

export default mockData;
