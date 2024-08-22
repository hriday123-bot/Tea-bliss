import {Row, Col} from'react-bootstrap'
import TeabagsDetails from '../components/Teabagsreveal'
import {useGetTeabagsQuery} from '../slices/teabagApiSlice.js'
import Loader from '../components/Loader';
import Message from '../components/Message';

const Teabags = () => {
    const { data, isLoading, isError } = useGetTeabagsQuery();
   
    return (
      <>
      {isLoading ? (<Loader/>) : isError ? ((<Message>{isError?.data?.message || isError.error}</Message>)) :(
        <>
        <Row style={{padding:'10px 10px',rowGap:'13px'}}>
            {data.map((value)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                    {TeabagsDetails(value)}
                </Col>
            ))}
        </Row>
        </>
      )}
      
      
      </>
    )
  
  
}

export default Teabags;
