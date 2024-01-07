import React, { useEffect,useState  } from 'react'
import axios from 'axios';
import Review from './Review'
import { useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  //MDBCardFooter,
  //MDBBtn
} from 'mdb-react-ui-kit';
function View() {
  const [restDetails,setRestDetails] = useState({})
  const {id} = useParams()
  console.log(id);
  const base_url='https://doctor-backend-qjn1.onrender.com/doctors'
  const fetchRest=async()=>{
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setRestDetails(result.data)
  }
  console.log(restDetails);
  useEffect(()=>{
    fetchRest()
  },[])
    return (
    <div>
      <MDBCard alignment='center' style={{backgroundColor:"#DAF0FF"}}>
      <MDBCardHeader style={{fontSize:"80px"}}>{restDetails.hospital}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle style={{fontSize:"40px"}}>{restDetails.name}</MDBCardTitle>
        <MDBCardText>{restDetails.specialty}</MDBCardText>
        <MDBCardText>{restDetails.phone}</MDBCardText><hr />
        <MDBCardTitle>Available days :{restDetails.available_days}</MDBCardTitle>
        
        <MDBCardText>{restDetails.available_hours}</MDBCardText>
        <MDBCardText>Address:{restDetails.address}</MDBCardText>
        <MDBCardText style={{fontSize:"13px"}}>email:{restDetails.email}</MDBCardText>
        <MDBBtn><Review tim={restDetails.reviews}/></MDBBtn>
        <MDBCardText>Rating:<i class="fa-sharp fa-solid fa-star" style={{color:" yellow"}}></i>{restDetails.rating}</MDBCardText>
      </MDBCardBody>
      
      
    </MDBCard>
    </div>
    
    )
  }
  
  export default View