import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'


function Productcard({data}) {

    // console.log(data);

  return (
    <Col className='p-3' sm={12} md={6} lg={4} xl={3}>
            <Link style={{textDecoration:"none"}} to={`view-product/${data.id}`}>

        <Container>
      <Card className='mt-4 text-center' style={{ width: '100%', height:'400px' }}>
      <Card.Img className='p-2' style={{height:'220px'}} variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>$ {data.price}
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
    </Link>

    </Col>
  )
}

export default Productcard
