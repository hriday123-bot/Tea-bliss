import {Container} from 'react-bootstrap'

import Header from '../src/components/Header.js';
import Footer from '../src/components/Footer.js';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
      <Header/>
      <Container>
          <Outlet />
      </Container>
      <Footer />
    </div>
    </>
  );
}

export default App;
