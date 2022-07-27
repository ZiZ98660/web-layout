import './App.css';
import {Container} from './components/styles/Container.styled'
import { Header } from './components/styles/Header/Header';
import Section from './components/styles/Section/Section';
import {ThemeProvider} from 'styled-components'

function App() {
  
  const theme = {
    bgColor: 'white'
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header/>
        <Section />
      </Container> 
    </ThemeProvider> 
  );
}

export default App;
 