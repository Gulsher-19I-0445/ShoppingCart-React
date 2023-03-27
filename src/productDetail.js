import Image from 'react-bootstrap/Image'
import { useEffect, useState } from "react";
export default function MyProd(props) {
  //console.log(props.m1);

  const[cartState,setCart]=useState("")

  
  
    const fetchAPI = (id,myDate,quant) => {
        fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId:5,
                    date:2020-12-10,
                    products:quant
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/carts/11')
            .then(res=>res.json())
            .then(json=>console.log(json))
            
      };
     
      
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div>
        <div>
        <Image  className='container' style={{ float: "left",margin:"50px",height:"650px",width:"650px"}} src = {props.image} alt="productImage"></Image>
        </div>
        <div style={{height:"100%"}}>
        <h1 className = 'container' style={{marginTop:"130px"}}>{props.title}</h1>
        
        
        <p className='container' style={{marginTop:"100px"}}>{props.description}</p>
        <h2 style={{float:"left",margin:"20px"}}>Price: ${props.price}</h2>
       
        



        <button onClick={() => props.cart(props.id)}>Add to Cart</button>
        </div>
    </div>
  );
}
