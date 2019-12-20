import Taro from '@tarojs/taro';

export interface IFetchOption {
  /**
   * 请求资源地址
   */
  url: string;

  /**
   * http 请求方法
   */
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'TRACE' | 'CONNECT';

  /**
   * 请求头
   */
  header?: Record<string, any>;

  /**
   * 请求的参数
   */
  data?: Record<string, any>;

  /**
   * 错误时是否显示 toast
   * @default true
   */
  showErrorToast?: boolean;
}

export interface IResponse {
  /**
   * 后台定义的状态码
   */
  code: number;

  /**
   * 后台定义的 message
   */
  message: string;

  /**
   * 实际返回数据
   */
  data?: any;
}

/**
 * 这里只是简单的判断请求是否成功, 实际业务中后台会返回不同的状态码, 最好将状态码定义
 * 放到单独的 constant 文件中
 */
const CODE_SUCCESS = 200;

Taro.addInterceptor(Taro.interceptors.logInterceptor);

async function fetch(option: IFetchOption) {
  const { url, data, header, method, showErrorToast = true } = option;

  // 这里可以根据业务需求对 header 进行改造

  /**
   * 根据后台实现做相应的修改, 小程序只要成功接收到服务器返回, 无论 statusCode 是多少
   * 都会成功返回, 不会抛出错误, 所以需要根据后台实际返回的状态码来判断请求是否成功
   */
  return Taro.request<IResponse>({
    url,
    method,
    header,
    data,
  })
    .then(res => {
      const { code } = res.data;

      if (code !== CODE_SUCCESS) {
        return Promise.reject(res.data);
      }

      return res.data;
    })
    .catch(err => {
      console.error(err.error || err.message || '请求异常');

      if (showErrorToast) {
        Taro.showToast({
          title: err.error || err.message || '请求异常',
          icon: 'none',
          duration: 2000,
        });
      }

      // 继续抛出错误, 便于后续逻辑的处理
      return Promise.reject(err);
    });
}

export default {
  get(option: IFetchOption) {
    return fetch({ ...option, method: 'GET' });
  },
  post(option: IFetchOption) {
    return fetch({ ...option, method: 'POST' });
  },
};
