
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';

import { useGetDataByIdQuery } from '../slices/dataApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';


const Productscreen = () => {
    const { id} = useParams();
    const {data:product,isLoading,isError}=useGetDataByIdQuery(id);

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
       )}
       
       
       </> 



        
    )
}

export default Productscreen;
