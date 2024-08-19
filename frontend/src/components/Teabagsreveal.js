import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Rating from './Rating'

const TeabagsDetails = (data) => {
  console.log(Rating(data.rating,data.numberOfReviews));
  const truncateDescription = (text, maxWords) => {
    const words = text.split(' ');
    return words.length > maxWords
      ? words.slice(0, maxWords).join(' ') + '...'
      : text;
  };
  return (
    <>
    <Card className='product-card'style={{ width: '18rem',heght:'18rem',paddingBottom:'0 10px'}}>
      
      <Link to={`/teabags/${data.id}`}>
        <Card.Img src={data.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/teabags/${data.id}`}>
          <Card.Title className='product-title'>
             <strong>{data.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text>
        {truncateDescription(data.description, 9)}
        </Card.Text>
        <Card.Text as='div'>Price: {data.price}₨</Card.Text>
        <Card.Text as='div'>{Rating(data.rating,data.numberOfReviews)}</Card.Text>
        
      </Card.Body>
    </Card>
    </>
  )
}

export default TeabagsDetails;
