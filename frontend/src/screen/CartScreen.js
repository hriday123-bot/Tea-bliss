import React from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { Card, Row, Col, Button, Image, ListGroup, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { FaTrash } from 'react-icons/fa'
import { addToCart, removeFromCart } from '../slices/cartSlice'

const CartScreen = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const location = useLocation()
    const { cartItems } = cart

    const addToCartHandler = async (product, qty) => {
        console.log('Adding to cart:', { ...product, qty });
        dispatch(addToCart({ ...product, qty }))
    }

    const removeFromCartHandler = (item) => {
        dispatch(removeFromCart({...item, qty: 0 }))
    }

    return (
        <>

            {cartItems.length === 0 ? (
                <div style={{ marginTop: '20px', width: '50%' }}>
                    <Message variant="info">Your TeaBliss cart is empty. Go to <Link to="/">Shop</Link> to add some items.</Message>
                </div>
            ) : (
                <>
                    <Row>
                        <Col md={8}>
                            <h1 className="shopping-cart-title">You are in your Shopping Cart</h1>
                            <ListGroup variant="flush">
                                {cartItems.map((item) => (
                                    <ListGroup.Item key={item._id}>
                                        <Row>
                                            <Col md={4}>
                                                <Image src={item.image} alt={item.name} fluid rounded />
                                            </Col>
                                            <Col md={3}>
                                                <Link to={`${location.pathname.includes('/teabags') ? `/teabags/${item._id}` : `/data/${item._id}`}`}>
                                                    {item.name}
                                                </Link>
                                            </Col>
                                            <Col md={2}>
                                                Price: {item.price} ₨
                                            </Col>
                                            <Col md={1}>
                                                <Form.Control
                                                    as="select"
                                                    value={item.qty}
                                                    onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                                                    style={{ color: 'dark' }}
                                                >
                                                    {[...Array(item.countInStock).keys()].map(x => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                            <Col md={2} style={{ padding: '0px 40px' }}>

                                                <Button type='button' variant='light' onClick={()=>removeFromCartHandler(item)}>
                                                    <FaTrash />
                                                </Button>

                                            </Col>

                                        </Row>
                                    </ListGroup.Item>
                                ))
                                }
                            </ListGroup>
                        </Col>
                        <Col md={4} style={{ marginTop: '50px' }}>
                            <Row className="cart-summary">
                                <h3 className="subtotal-text">Subtotal: {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)} ₨</h3>
                                <Button type='button' variant='primary' className="checkout-button"
                                    disabled={cartItems.length === 0}>
                                    Proceed to Buy
                                </Button>
                            </Row>

                        </Col>
                    </Row>
                </>

            )

            }
        </>
    )
}



export default CartScreen;