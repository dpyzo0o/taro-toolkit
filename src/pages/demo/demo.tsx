import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import { RootState } from '~/redux/rootReducer';
import { increment } from '~/redux/slices/count';
import useUnload from '~/hooks/useUnload';

const Demo: Taro.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.count);

  useUnload(() => {
    console.log('demo unload');
  });

  return (
    <View>
      <View>{count}</View>
      <Button type='primary' onClick={() => dispatch(increment(2))}>
        +
      </Button>
    </View>
  );
};

export default Demo;
