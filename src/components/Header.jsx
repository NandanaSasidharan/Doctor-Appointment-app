import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  
function Header() {
  return (
    <div style={{backgroundColor:'#7CB9E8'}}>
     <MDBNavbar >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' style={{color:'white',fontSize:'30px',marginLeft:"100px"}}>
            <i class="fa-solid fa-user-doctor fa-bounce me-2"></i>
            DOCTOR APPOINTMENT
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header