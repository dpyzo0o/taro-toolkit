import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import { AppDispatch } from '~/redux/store';
import { RootState } from '~/redux/rootReducer';
import { increment } from '~/redux/slices/count';
import useUnload from '~/hooks/useUnload';
import useBoolean from '~/hooks/useBoolean';

const Demo: Taro.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.count);
  const { state, toggle, setTrue, setFalse } = useBoolean(false);

  useUnload(() => {
    console.log('demo unload');
  });

  return (
    <View>
      <View>{count}</View>
      <Button type='primary' onClick={() => dispatch(increment(2))}>
        +
      </Button>
      <View>isOn: {state}</View>
      <Button onClick={toggle}>toggle</Button>
      <Button onClick={setTrue}>open</Button>
      <Button onClick={setFalse}>close</Button>
    </View>
  );
};

export default Demo;
