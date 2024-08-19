import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import Datadetails from '../components/Datareveal';

const Homescreen = () => {
  const [data,setData]=useState([]);
  
  useEffect(() => {
    const fetchdata=async()=>{
      const {data}=await axios.get('/api/data');
      console.log('checking data is coming from backend',data);
      setData(data);
    }
    fetchdata();
  }, [])
  

  console.log('data details',data);  
  return (
    <>
    <Row style={{padding:'10px 10px',rowGap:'13px'}}>
        {data.map((value)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
                {Datadetails(value)}
            </Col>
        ))}
    </Row>
    </>
  )
}

export default Homescreen;
