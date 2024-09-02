
import { useParams,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button ,Form} from 'react-bootstrap';
import Rating from '../components/Rating';
import { useState } from 'react';
import { useGetDataByIdQuery } from '../slices/dataApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { addToCart } from '../slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';


const Productscreen = () => {
    const { id} = useParams();
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const {data:product,isLoading,isError}=useGetDataByIdQuery(id);

    const addToCartHandler=()=>{
        dispatch(addToCart({...product,qty}))
        navigate('/cart')
    }

    return (
        <>
       {isLoading ? (<Loader/>): isError ? ((<Message>{isError?.data?.message || isError.error}</Message>)) :(
                <>
                    <Link className='btn btn-light my-3' to='/'>Go Back</Link>
                    <Row>
                        <Col md={4}>
                            <Image src={`/${product.image}`} alt={product.name} fluid />
                            <Card.Text><h6 color='blue' style={{ textAlign: 'center' }}>{product.name}</h6></Card.Text>

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
                            <ListGroup variant="flush">
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
                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row className="align-items-center">
                                            <Col>Qty:</Col>
                                            <Col>
                                                <Form.Control
                                                    as="select"
                                                    value={qty}
                                                    onChange={(e) => setQty(e.target.value)}
                                                    style={{
                                                        borderRadius: '8px',
                                                        width:'50%',
                                                        borderColor: '#007bff',
                                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                    }}
                                                >
                                                    {[...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button
                                        onClick={addToCartHandler}
                                        disabled={!product.inStock}
                                        style={{
                                            backgroundColor: product.inStock ? '#007bff' : '#cccccc',
                                            borderColor: product.inStock ? '#007bff' : '#cccccc',
                                            color: '#fff',
                                            borderRadius: '8px',
                                            padding: '10px 15px',
                                            width: '50%',
                                            fontSize: '16px',
                                            cursor: product.inStock ? 'pointer' : 'not-allowed',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>

                    </Row>
                </>
            )}


        </>




    )
}

export default Productscreen;
