import Home from './pages/Home';
import SignIn from './pages/Signin';
import GuestRoute from './routes/GuestRoute';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './mock';
import Auth from './components/Auth';

import theme from './theme';
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <Route path="/" element={<Home />} />
              <GuestRoute path="/sign-in" element={<SignIn />} />
              <Route path="/*" element={<h1>Page Not Found - 404!</h1>} />
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
