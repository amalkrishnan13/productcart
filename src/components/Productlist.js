import React, { useState,useEffect } from 'react'
import Productcard from './Productcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Productlist() {
  const[searchTerm, setSearchTerm]=useState('')
  


    const [allproduct, setallproducts] = useState([])

    const productdata= async () =>{
       await fetch ('https://fakestoreapi.com/products')
       .then (data=>{ data.json().then(result=>{
        setallproducts(result)
    }) })
}
// console.log(allproduct);
    useEffect(()=>{
        productdata()
    },[])

  return (
  


    <Row>
      <div className='templateContainer' style={{marginLeft:"200px",marginTop:"10px"}}>
        <div className='searchInput_Container'>
          <input style={{width:"400px"}} id='searchInput' type='text' placeholder='search here'/>

        </div>
      

      </div>

      {allproduct.map(item =>(
      <Productcard data={item}/>
      ))
      }
    </Row>
  )
}

export default Productlist
