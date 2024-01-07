import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    //MDBCardHeader,
    //MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
  
function RestCard({doctors}) {
    console.log(doctors);
  return (
    <div>
 <MDBCard alignment='center' style={{padding:'30px'}}>
     
      <MDBCardBody style={{height:'260px',backgroundColor:'#DAF0FF'}}>
        <MDBCardTitle style={{fontSize:"26px"}} >{doctors.hospital}</MDBCardTitle>
        <MDBCardTitle>{doctors.name}</MDBCardTitle>
        <MDBCardText>{doctors.phone}</MDBCardText>
        <MDBCardText>Rating:<i class="fa-sharp fa-solid fa-star" style={{color:" yellow"}}></i>{doctors.rating}</MDBCardText>

        <Link to={`view/${doctors.id}`}><MDBBtn href='#'>MoreDetails</MDBBtn></Link>
      </MDBCardBody>
     
    </MDBCard>
    </div>
  )
}

export default RestCard