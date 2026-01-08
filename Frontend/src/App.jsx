import { Provider } from 'react-redux';
import './App.css'
import store from './core/store/store';
import HomePage from './pages/HomePage';
import RegisterComponent from './components/UserComponents/RegisterComponent';
import LoginComponent from './components/UserComponents/LoginComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PantheonComponent from './components/MythComponents/PantheonComponent';
import MythComponents from './components/MythComponents/MythComponents';
import WikiPage from './pages/WikiPage';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginComponent/>}/>
          <Route path="/register" element={<RegisterComponent/>}/>

          <Route element={<WikiPage/>}>
            <Route path="/wiki/:pantheon" element={<PantheonComponent/>}/>
            <Route path="/wiki" element={<MythComponents/>}/>
          </Route>
        </Routes>  
      </Router>
    </Provider>
  )
}

export default App
