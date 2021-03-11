import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import DashboardIcon from 'assets/dashboard.svg';
import MainMenu from 'components/molecules/MainMenu/MainMenu';

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>Hello</h1>
          <ButtonIcon active icon={DashboardIcon}>
            Dashboard
          </ButtonIcon>
          <MainMenu />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
