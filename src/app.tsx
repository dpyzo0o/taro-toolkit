import React from 'react';
import Taro from '@tarojs/taro';
import { Provider } from 'react-redux';
import store from './redux/store';

import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends React.Component {
  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      const updateManager = Taro.getUpdateManager();

      updateManager.onCheckForUpdate(res => {
        console.log(res);
      });

      updateManager.onUpdateReady(() => {
        Taro.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function (res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          },
        });
      });

      updateManager.onUpdateFailed(res => {
        console.log(res);
      });
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError(error) {
    console.log(error);
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
