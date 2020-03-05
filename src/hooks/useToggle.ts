import { useState, useCallback } from 'react';

/**
 * 切换 boolean 状态值
 *
 * @param initialValue
 */
function useToggle(initialValue: boolean): [boolean, (nextValue?: any) => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(
    (nextValue?: any) => {
      if (typeof nextValue === 'boolean') {
        setValue(nextValue);
      } else {
        setValue(currentValue => !currentValue);
      }
    },
    [setValue]
  );

  return [value, toggle];
}

export default useToggle;
