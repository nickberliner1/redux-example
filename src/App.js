import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';

import store from './store';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <div className="new-logo">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
