// import styles from './app.module.scss';
import Deals from '../pages/Deals';
import Header from './header';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="deals" element={<Deals />} />
      </Routes>
    </Provider>
  );
};

export default App;
