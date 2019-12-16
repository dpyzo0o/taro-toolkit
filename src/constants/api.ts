const HOST =
  process.env.NODE_ENV === 'development' ? 'https://develop.com' : 'https://production.com';

export default {
  /**
   * 登陆
   */
  login: `${HOST}/login`,

  /**
   * 测试
   */
  test: `${HOST}/test`,
};
