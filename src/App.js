import ohioTSLogo from './assets/images/state-only-logo.png';
import './App.css';
import { Button, Container, List, ListItem, Link } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';
import styled from 'styled-components';

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

const StyledButton = styled(Button)`
  margin-top: 15px;
`;

const StyledNavigationWrapper = styled.div`
  font-size: 0.8em;
  
  a:not(:last-child) {
    margin-right: 20px;
  }
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
  margin-top: 25px;
  max-width: 600px;
`;

const HeaderText = styled.h1`
  font-weight: 800;
  font-size: 3em;
  margin: 30px 0;
`;

const items = [
  'Accu-chec',
  'One touch',
  'G6 sensors',
  'Nicoderm',
  'Diabetic pump supplies',
  'Alli weight loss aid',
]

const Navigation = () => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <StyledNavigationWrapper>
      <Link href="#" onClick={preventDefault} color="inherit">
        About
      </Link>
      <Link href="#" onClick={preventDefault} color="inherit">
        Products We Buy
      </Link>
      <Link href="#" onClick={preventDefault} variant="inherit">
        Schedule Pick-up
      </Link>
    </StyledNavigationWrapper>
  )
}

const ItemsList = () => {
  return (
    <Container>
      <List>
        { items.map(item => <ListItem>{item}</ListItem>) }
      </List>
    </Container>
  )
}

const Heading = () => {
  return (
    <Container>
      <StyledLogoAndNavigationWrapper>
        <StyledLogo src={ohioTSLogo} className="ohio-ts-logo" alt="logo" />
        <Navigation />
      </StyledLogoAndNavigationWrapper>
      <StyledHeader>
        <HeaderText>We pay cash for diabetic test strips</HeaderText>
        <p>Serving central Ohio since 2016. Local pick-up available 7 days a week.</p>
        <StyledButton variant="contained" color="primary" disableElevation>Schedule Pick-up</StyledButton>
      </StyledHeader>
    </Container>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Heading />
        <ItemsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
