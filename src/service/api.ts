import apiDef from '~/constants/api';
import http from './http';

export const login = () => http.get({ url: apiDef.login });

export const test = () => http.post({ url: apiDef.test, showErrorToast: false });
