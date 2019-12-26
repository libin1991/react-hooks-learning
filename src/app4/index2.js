import React, { useState, createContext, useContext } from 'react';

import ReactDOM from 'react-dom';
// 未使用 useContext
// 1. 使用 createContext 创建上下文
const UserContext = new createContext();

// 2. 创建 Provider
const UserProvider = props => {
  let [username, handleChangeUsername] = useState('888');
  return (
    <UserContext.Provider value={{ username, handleChangeUsername }}>
      {props.children}
    </UserContext.Provider>
  );
};

// 3. 创建 Consumer
const UserConsumer = UserContext.Consumer;

// 4. 使用 Consumer 包裹组件
const Pannel = () => (
  <UserConsumer>
    {({ username, handleChangeUsername }) => (
      <div>
        <div>user: {username}</div>
        <input value={username} onChange={e => handleChangeUsername(e.target.value)} />
      </div>
    )}
  </UserConsumer>
);

const Form = () => <Pannel />;


const Pannel1 = () => {
  const { username, handleChangeUsername } = useContext(UserContext); // 3. 使用 Context
  return (
    <div>
      <div>user2: {username}</div>
      <input value={username} onChange={e => handleChangeUsername(e.target.value)} />
    </div>
  );
};


export default function () {
  return (
    <div>
      <UserProvider>
        <Pannel />
        <Pannel1 />
      </UserProvider>
    </div>
  );
}
