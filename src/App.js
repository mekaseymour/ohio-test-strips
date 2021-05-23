import ohioTSLogo from './assets/images/state-only-logo.png';
import './App.css';
import { Button, Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';
import styled from 'styled-components';
import ProductsWeBuy from './components/ProductsWeBuy';
import SchedulePickup from './components/SchedulePickup';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const StyledSiteContainer = styled(Container)`
  min-height: 100vh;
`;

const StyledButton = styled(Button)`
  margin-top: 15px;
`;

const StyledLogoAndNavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const StyledLogo = styled.img`
  height: 12vmin;
  pointer-events: none;
`;

const StyledHeader = styled.header`
  margin: 60px 0;
  max-width: 1000px;
`;

const HeaderText = styled.h1`
  font-weight: 800;
  font-size: 4em;
  margin: 30px 0;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Heading = () => {
  return (
    <Container>
      <StyledLogoAndNavigationWrapper>
        <StyledLogo src={ohioTSLogo} className="ohio-ts-logo" alt="logo" />
        <Navigation />
      </StyledLogoAndNavigationWrapper>
      <StyledHeader>
        <HeaderText>We Pay Cash for Diabetic Test Strips</HeaderText>
        <p>Serving central Ohio since 2016. Local pick-up available 7 days a week.</p>
        <StyledButton variant="contained" color="primary" disableElevation>Schedule Pick-up</StyledButton>
      </StyledHeader>
    </Container>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <StyledSiteContainer>
          <Heading />
          <ProductsWeBuy />
          <SchedulePickup />
        </StyledSiteContainer>
        <Footer />
      </StyledWrapper>
    </ThemeProvider>
  );
}

export default App;
