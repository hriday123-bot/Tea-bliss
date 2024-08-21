import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';



const Teabagscreen = () => {
    const { id: productId } = useParams();
    
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`/api/teabags/${productId}`);
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product', error.message);
            }
        }
        fetchProduct();
    }, [productId])


    return (
        <>
            <Link className='btn btn-light my-3' to='/teabags'>Go Back</Link>
            <Link className='btn btn-light my-3' to='/'>Go To Home</Link>
            <Row>
                <Col md={4}>
                    <Image src={`/${product.image}`} alt={product.name} fluid />
                    <Card.Text><h6 style={{ textAlign: 'center',padding:'10px 10px', color:'green' }}>{product.name}</h6></Card.Text>

                </Col>
                <Col md={4}>
                    <ListGroup variant='flush' width='5rem'>
                        <ListGroup.Item>Price: {product.price} ₨</ListGroup.Item>
                        <ListGroup.Item>Rating:{Rating(product.rating, product.numberOfReviews)}</ListGroup.Item>
                        <Card.Text style={{ padding: '10px 5px', color: 'blue' }}>{product.description}</Card.Text>
                        <Card.Text>Origin from {product.origin}</Card.Text>
                    </ListGroup>
                </Col>

                <Col md={4}>
                    
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h6 style={{color:'blue'}}>Stock Status</h6>
                                <p
                                    style={{
                                        color: product.inStock ? 'green' : 'red',
                                        fontWeight: 'bold',
                                    }}
                                >   
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Link  to={`/cart`} >
                                <Card.Title>
                                    {product.inStock ? 'Add to Cart' : ''}
                                </Card.Title>
                            </Link>    
                            </ListGroup.Item>
                        </ListGroup>
                    
                </Col>

            </Row>
        </>

    )
}

export default Teabagscreen;
