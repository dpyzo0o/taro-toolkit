import Taro from '@tarojs/taro';

const log = Taro.getRealtimeLogManager();

export default {
  info(...args: any[]) {
    if (!log) {
      return;
    }
    log.info(...args);
  },
  warn(...args: any[]) {
    if (!log) {
      return;
    }
    log.warn(...args);
  },
  error(...args: any[]) {
    if (!log) {
      return;
    }
    log.error(...args);
  },
  /**
   *
   * @param msg
   * @since 2.7.3
   */
  setFilterMsg(msg: string) {
    if (!log || !log.setFilterMsg) {
      return;
    }
    log.setFilterMsg(msg);
  },
  /**
   *
   * @param msg
   * @since 2.8.1
   */
  addFilterMsg(msg: string) {
    if (!log || !log.addFilterMsg) {
      return;
    }
    log.addFilterMsg(msg);
  },
};
