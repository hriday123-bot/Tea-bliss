import {Container} from 'react-bootstrap'

import Header from '../src/components/Header.js';
import Footer from '../src/components/Footer.js';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Container>
          <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;
