import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';

function Viewcard() {

  const params = useParams()
  // console.log(params.id);

  const [allproduct, setallproducts] = useState([])

  const productdata = async () => {
    await fetch('https://fakestoreapi.com/products')
      .then(data => {
        data.json().then(result => {
          setallproducts(result)
        })
      })
  }
  // console.log(allproduct);
  const restdata=allproduct.find(item=> item.id==params.id)
  console.log(restdata);

  useEffect(() => {
    productdata()
  }, [])


  return (
    <>
    {restdata?(
  <Row>
    <Col>
    <Image className='p-5' src={restdata.image} fluid/>
    </Col>
    <Col className='mt-5'>
    <h2>{restdata.title}</h2>
    <p>{restdata.description}</p>
    <h6> Price: $ {restdata.price}</h6>
    <h6 className='mt-3'> Rating: {restdata.rating.rate}★  </h6>
    <p>{restdata.rating.count} left</p>
    </Col>
  </Row>
):'null'}
    </>
  )
}


export default Viewcard
