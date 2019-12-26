import React, {
  useState,
  useContext,
  createContext
} from 'react';
import ReactDOM from 'react-dom';
// 使用 useContext
// 1. 使用 createContext 创建上下文
const UserContext = new createContext();

// 2. 创建 Provider
const UserProvider = props => {
  let [username, handleChangeUsername] = useState('123');
  return (
    <UserContext.Provider value={{ username, handleChangeUsername }}>
      {props.children}
    </UserContext.Provider>
  );
};






const Pannel = () => {
  const { username, handleChangeUsername } = useContext(UserContext); // 3. 使用 Context
  return (
    <div>
      <div>user: {username}</div>
      <input value={username} onChange={e => handleChangeUsername(e.target.value)} />
    </div>
  );
};
const Pannel1 = () => {
  const { username, handleChangeUsername } = useContext(UserContext); // 3. 使用 Context
  return (
    <div>
      <div>user2: {username}</div>
      <input value={username} onChange={e => handleChangeUsername(e.target.value)} />
    </div>
  );
};

const App = () => (
  <div>
    <UserProvider>
      <Pannel></Pannel>
      <Pannel1></Pannel1>
    </UserProvider>
  </div>
);

export default App;
