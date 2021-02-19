import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import GuestRoute from './routes/GuestRoute';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './mock';
import Auth from './components/Auth';

//import theme from './theme';
import createTheme from './theme';
import { useSettings } from './context/SettingsContext';

function App() {
  const { settings } = useSettings();

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <BrowserRouter>
        <Auth>
          <Routes>
            <GuestRoute path="/sign-in" element={<SignIn />} />
            <GuestRoute path="/sign-up" element={<SignUp />} />
            <Route path="//*" element={<Home />} />
          </Routes>
        </Auth>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
