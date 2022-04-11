import React from 'react';
import icon from './icon.png';
import './App.css';
import { askForPermissioToReceiveNotifications } from './push-notification';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={icon} className="App-logo" alt="icon" />
      <h1 className="App-title">Тест firebase сообщений специально для tkbip!</h1>
    </header>
    <button onClick={askForPermissioToReceiveNotifications} >
      Нажмите сюда, что бы ачать получать уведомления!
    </button>
  </div>
);

export default App;
