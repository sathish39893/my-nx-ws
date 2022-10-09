// import styles from './app.module.scss';
import Home from '../pages/Home';
import Header from './header';
import { Provider } from 'react-redux';
import { store } from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
};

export default App;
