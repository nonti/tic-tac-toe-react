import Router from './Router';
import { GlobalStyles } from './styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { ModalContextProvider } from './contexts/ModalContext';

const App = () => {
  
  const { theme } = useContext(ThemeContext);
  const mode = (theme === 'light' ? lightTheme : darkTheme);

  return (

      <ThemeProvider theme={mode}>
        <ModalContextProvider>
          <GlobalStyles/>
          <Router />
        </ModalContextProvider>
    </ThemeProvider>
 
  );
}

export default App;
