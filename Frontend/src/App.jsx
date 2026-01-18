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
import SettingsComponent from './components/UserComponents/SettingsComponent';
import AboutUsComponent from './components/InfoComponents/AboutUsComponent';
import ContactComponent from './components/InfoComponents/ContactComponent';
import LearnMoreComponent from './components/InfoComponents/LearnMoreComponent';
import UserManagement from './components/AdminComponent/UserManagement';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginComponent/>}/>
          <Route path="/register" element={<RegisterComponent/>}/>

          <Route element={<WikiPage/>}>
            <Route path="/user/settings" element={<SettingsComponent/>}/>
            <Route path="/wiki/:pantheon" element={<PantheonComponent/>}/>
            <Route path="/wiki/aboutUs" element={<AboutUsComponent/>}/>
            <Route path="/wiki/contact" element={<ContactComponent/>}/>
            <Route path="/wiki/learnMore" element={<LearnMoreComponent/>}/>
            <Route path="/userManagement" element={<UserManagement/>}/>
            <Route path="/wiki" element={<MythComponents/>}/>
          </Route>
        </Routes>  
      </Router>
    </Provider>
  )
}

export default App
