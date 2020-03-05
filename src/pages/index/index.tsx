import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { useSelector, useDispatch } from 'react-redux';
import { View, Button, Input, Image } from '@tarojs/components';
import { CommonEventFunction } from '@tarojs/components/types/common';

import { AppDispatch } from '@/redux/store';
import useUnload from '@/hooks/useUnload';
import { RootState } from '@/redux/rootReducer';
import { increment, decrement, asyncIncrement, asyncDecrement } from '@/redux/slices/count';
import { addTodo, deleteTodo, toggleTodo } from '@/redux/slices/todos';
import warningIcon from '@/assets/warning.png';

import './index.scss';

const Index: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [input, setInput] = useState('');

  const count = useSelector((state: RootState) => state.count);
  const todos = useSelector((state: RootState) => state.todos);

  const handleInput: CommonEventFunction = e => {
    let text = e.detail.value.trim();
    if (text !== '') {
      setInput(text);
    }
  };

  const handleClick = () => {
    if (input !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  useUnload(() => {
    console.log('index unload');
  });

  return (
    <View className='index'>
      <Image className='icon' src={warningIcon} />
      <View>Count: {count}</View>
      <View className='buttons'>
        <Button type='primary' size='mini' plain onClick={() => dispatch(increment(1))}>
          +
        </Button>
        <Button type='primary' size='mini' plain onClick={() => dispatch(decrement(1))}>
          -
        </Button>
        <Button type='primary' size='mini' plain onClick={() => dispatch(asyncIncrement(1))}>
          *+
        </Button>
        <Button type='primary' size='mini' plain onClick={() => dispatch(asyncDecrement(1))}>
          *-
        </Button>
      </View>
      <View className='todos'>
        <Input placeholder='please enter' value={input} onInput={handleInput} />
        <Button type='primary' onClick={handleClick}>
          add todo
        </Button>
        {todos.map(todo => (
          <View
            key={todo.id}
            style={{
              display: 'flex',
            }}
          >
            <View
              style={{
                textDecoration: todo.completed ? 'line-through' : 'initial',
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.title}
            </View>
            <View style={{ marginLeft: '10px' }} onClick={() => dispatch(deleteTodo(todo.id))}>
              x
            </View>
          </View>
        ))}
      </View>
      <Button type='primary' onClick={() => Taro.navigateTo({ url: '/pages/demo/demo' })}>
        To Demo
      </Button>
    </View>
  );
};

export default Index;
