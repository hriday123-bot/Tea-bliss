import {Row, Col} from 'react-bootstrap'
import Datadetails from '../components/Datareveal';

import {useGetDataQuery} from '../slices/dataApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Homescreen = () => {
  const { data, isLoading, isError } = useGetDataQuery();
  

  console.log('data details',data);  
  return (
   <>
    {isLoading ? (Loader): isError ? (<Message>{isError?.data?.message || isError.error}</Message>):(
      <>
        <Row style={{padding:'10px 10px',rowGap:'13px'}}>
        {data.map((value)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
                {Datadetails(value)}
            </Col>
        ))}
        </Row>
    </>

    )} 
   
   
   </>


   
  )
}

export default Homescreen;
