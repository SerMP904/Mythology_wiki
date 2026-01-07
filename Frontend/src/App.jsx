import { Provider } from 'react-redux';
import './App.css'
import store from './core/store/store';
import HomePage from './pages/HomePage';
import WikiPage from './pages/WikiPage';
import RegisterComponent from './components/UserComponents/RegisterComponent';
import LoginComponent from './components/UserComponents/LoginComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PantheonComponent from './components/MythComponents/PantheonComponent';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginComponent/>}/>
          <Route path="/register" element={<RegisterComponent/>}/>
          <Route path="/wiki/:pantheon" element={<PantheonComponent/>}/>
          <Route path="/wiki" element={<WikiPage/>}/>
        </Routes>  
      </Router>
    </Provider>
  )
}

export default App
