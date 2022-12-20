import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { GlobalStyle } from './styles/global';
import { ThemeContextProvider } from './contexts';

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeContextProvider>
  );
}

export default App;
