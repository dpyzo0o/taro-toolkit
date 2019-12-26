import { useEffect, useCallback } from '@tarojs/taro';

/**
 * 页面/组件卸载时的回调
 *
 * @param callback
 */
function useUnload(callback: () => void) {
  const memoizedCb = useCallback(callback, []);

  useEffect(() => {
    return () => {
      memoizedCb();
    };
  }, [memoizedCb]);
}

export default useUnload;
