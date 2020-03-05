import { useCallback } from 'react';
import useToggle from './useToggle';

/**
 * useToggle 别名, 为方便使用导出 setTrue, setFalse 函数
 *
 * @param initialValue
 */
function useBoolean(
  initialValue: boolean
): {
  state: boolean;
  toggle: (nextValue?: any) => void;
  setTrue: () => void;
  setFalse: () => void;
} {
  const [state, toggle] = useToggle(initialValue);

  const setTrue = useCallback(() => toggle(true), [toggle]);

  const setFalse = useCallback(() => toggle(false), [toggle]);

  return {
    state,
    toggle,
    setTrue,
    setFalse,
  };
}

export default useBoolean;
