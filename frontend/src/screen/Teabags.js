import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Row, Col} from'react-bootstrap'
import TeabagsDetails from '../components/Teabagsreveal'

const Teabags = () => {
    const [data,setData]=useState([]);
  
    useEffect(() => {
       const fetchdata=async()=>{
        try {
            const {data}=await axios.get('/api/teabags');
            console.log('checking teabgas is coming from backend',data);
            setData(data);
        } catch (error) {
            console.error('An error occurred');
        }
      }
      fetchdata();
    }, [])
    
  
    console.log('data details',data);  
    return (
      <>
      <Row style={{padding:'10px 10px',rowGap:'13px'}}>
          {data.map((value)=>(
              <Col sm={12} md={6} lg={4} xl={3}>
                  {TeabagsDetails(value)}
              </Col>
          ))}
      </Row>
      </>
    )
  
  
}

export default Teabags;
