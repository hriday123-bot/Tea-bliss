import react from 'react';
import { Navbar, Nav, Container,Badge } from 'react-bootstrap'
import { FaShoppingCart, FaUser, FaCoffee, FaLeaf } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from'react-redux';

const Header = () => {
    const {cartItems}=useSelector((state)=>state.cart)

    return (
        <header>
            <div style={{
                backgroundColor: '#FFFFE0', 
                color: 'black', 
                padding: '5px 0',
                textAlign: 'center',
                fontWeight: 'light',
            }}>
                <h11>Free shipping on orders above ₹499. | Use Code TCWTEA10 and Get Flat 10% Off on All Products</h11>
            </div>

            <Navbar bg="primary" data-bs-theme="light" variant="dark" expand="md" collapseOnSelect style={{ background: '#87CEEB' }}>
                <Container>
                    
                    <Navbar.Brand href="/">
                        {/* <img src='images/navs.jpg' alt='navbar logo' width='30' height='30' style={{padding:'0px 2px'}}/> */}
                        <FaCoffee style={{ marginRight: '8px' }} />
                        Tea Bliss
                    </Navbar.Brand>
                    <Navbar.Brand href="/">
                        Home
                    </Navbar.Brand>
                   
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to='/teabags'>
                                <Nav.Link> <FaLeaf/>Tea-bags</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <FaShoppingCart />My Cart
                                    {
                                        cartItems.length > 0 && (
                                            <Badge variant="danger" >
                                                ({cartItems.reduce((acc,item)=>acc + Number(item.qty),0)})
                                            </Badge>
                                        )
                                    }
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/sigin'>
                                <Nav.Link>
                                    <FaUser />Sign In
                                </Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )

}

export default Header;