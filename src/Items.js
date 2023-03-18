import { useEffect, useState } from "react"
import MyCards from "./card";

export default function Items(){
    const [products,setproducts]=useState([]);
    const fetchAPI = ()=>{
        return fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setproducts(data));

    }
    useEffect(( ) =>{
        fetchAPI();
    },[]

    )
    console.log(products)
    const tifOptions = Object.keys(products).map(key => 
        <option value={key}>{products[key]}</option>
    )  
    console.log(tifOptions[1])
    return(
        <div>
      {products.length > 0 && (
        <>
          {products.map(user => (
            
            <MyCards key={user.id} title = {user.title} image={user.image} description={user.description}></MyCards>
          ))}
        </>
      )}
    </div>
        
    )
    
}