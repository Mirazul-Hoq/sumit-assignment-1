import { Provider } from 'react-redux';
import Tour from './components/Tour';
import store from './redux/store';
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <header id="header">
        <div className="container">
          <img src="./img/lws-logo.svg" alt="logo" className="logo" />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">Home</a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>
      <Tour />
    </Provider>
  );
}

export default App;
