import { Provider } from 'react-redux';
import './App.css'
import store from './core/store/store';
import HomePage from './pages/HomePage';

function App() {

  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}

export default App
