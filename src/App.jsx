import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import AppWrapper from './AppWrapper';
import { ThemeProvider } from './ThemeContext';
import UnderConstruction from './pages/UnderConstruction';
import About from './pages/About';
import Pikadex from './pages/Pikadex';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Favourites from './pages/Favourites';
import Account from './pages/Account';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import CustomAlertTemplate from './components/CustomAlertTemplate';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './AuthContext';
import NeedToLoginPage from './pages/NeedToLoginPage';
import Browse from './pages/Browse';
import { FavouritesProvider } from './FavouritesContext';

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <FavouritesProvider>
          <ThemeProvider>
            <AlertProvider template={CustomAlertTemplate} {...options}>
              <Routes>
                <Route path="/" element={<Layout><AppWrapper><Home /></AppWrapper></Layout>} />
                <Route path="/about" element={<Layout><AppWrapper><About /></AppWrapper></Layout>} />
                <Route path="/broken" element={<Layout><AppWrapper><UnderConstruction /></AppWrapper></Layout>} />
                <Route path="/pikadex" element={<Layout><AppWrapper><Pikadex /></AppWrapper></Layout>} />
                <Route path="/contact" element={<Layout><AppWrapper><Contact /></AppWrapper></Layout>} />
                <Route path="/login" element={<Layout><AppWrapper><LoginPage /></AppWrapper></Layout>} />
                <Route path="/need-login" element={<Layout><AppWrapper><NeedToLoginPage /></AppWrapper></Layout>} />
                <Route path="/register" element={<Layout><AppWrapper><RegisterPage /></AppWrapper></Layout>} />
                <Route path="/logout" element={<Layout><AppWrapper><Logout /></AppWrapper></Layout>} />
                <Route path="/browse" element={<Layout><AppWrapper><Browse /></AppWrapper></Layout>} />
                <Route 
                  path="/account" 
                  element={
                    <PrivateRoute>
                      <Layout>
                        <AppWrapper>
                          <Account />
                        </AppWrapper>
                      </Layout>
                    </PrivateRoute>
                  } 
                />
                <Route 
                  path="/favourites" 
                  element={
                    <PrivateRoute>
                      <Layout>
                        <AppWrapper>
                          <Favourites />
                        </AppWrapper>
                      </Layout>
                    </PrivateRoute>
                  } 
                />
                <Route path="/*" element={<Layout><AppWrapper><NotFound /></AppWrapper></Layout>} />
              </Routes>
            </AlertProvider>
          </ThemeProvider>
        </FavouritesProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
