import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import RestCard from './RestCard'
function AllRest() {
  const base_url='https://doctor-backend-qjn1.onrender.com/doctors'
  const[AllRestData,setAllRestData] = useState([])
  const fetchData=async()=>{
    const result = await axios.get(base_url)
    console.log(result.data);//array of 10 data
    setAllRestData(result.data)
  }
  console.log(AllRestData);
  useEffect(()=>{
    fetchData()
  },[])
  
    const backgroundStyle = {
      backgroundImage: 'url("https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=621&simg=/content/image/2023/07/10/20230710000622_0.jpg&u=")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '180vh', // Set the height as needed
      // Other styles as needed
    };
  return (
    <div style={backgroundStyle} >
      <Row>{
        AllRestData . map( item=>(
          <Col sm={62} md={6} lg={3} xl={3} style={{padding:'20px'}}>
          
          <RestCard doctors={item}/>
          </Col>
        ))
      }</Row>
      </div>
    
  )
}

export default AllRest