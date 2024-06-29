import Router from './Router';
import { GlobalStyles } from './styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

const App = () => {
  
  const { theme } = useContext(ThemeContext);
  
  const mode = (theme === 'light' ? lightTheme : darkTheme);

  return (
    <div>
      <ThemeProvider theme={mode}>
        <GlobalStyles/>
        <Router />
    </ThemeProvider>
    </div>
    
  );
}

export default App;
