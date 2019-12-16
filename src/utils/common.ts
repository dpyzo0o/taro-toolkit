/* eslint-disable import/prefer-default-export */
export const delay = (sec: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, sec * 1000));
