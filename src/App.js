import ohioTSLogo from './assets/images/state-only-logo.png';
import './App.css';
import { Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';
import styled from 'styled-components';
import ProductsWeBuy from './components/ProductsWeBuy';
import SchedulePickup from './components/SchedulePickup';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import SchedulePickupButton from './components/SchedulePickupButton';
import About from './components/About';

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

const StyledSubheaderText = styled.p`
  margin-bottom: 2.5em;
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
  min-height: 60px;
`;

const StyledHeader = styled.header`
  margin: 40px 0 60px;
  max-width: 1000px;
`;

const HeaderText = styled.h1`
  font-weight: 800;
  font-size: 4em;
  margin: 30px 0;

  @media(max-width: 768px) {
    font-size: 3em;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContainer = styled(Container)`
  p {
    line-height: 2em;
  }
`;

const Heading = () => {
  return (
    <StyledContainer>
      <StyledLogoAndNavigationWrapper>
        <StyledLogo src={ohioTSLogo} className="ohio-ts-logo" alt="logo" />
        <Navigation />
      </StyledLogoAndNavigationWrapper>
      <StyledHeader>
        <HeaderText>We Pay Cash for Diabetic Test Strips</HeaderText>
        <StyledSubheaderText>Local business serving central Ohio since 2016. Quick & easy pick-up available 7 days a week.</StyledSubheaderText>
        <SchedulePickupButton />
      </StyledHeader>
    </StyledContainer>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <StyledSiteContainer>
          <Heading />
          <About />
          <ProductsWeBuy />
          <SchedulePickup />
        </StyledSiteContainer>
        <Footer />
      </StyledWrapper>
    </ThemeProvider>
  );
}

export default App;
