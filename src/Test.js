import axios from 'axios';
import { useEffect, useState } from 'react';

const Test = ()=>{
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/product')
        .then(res => {
            console.log("res",res)
            setProduct(res.data.products)
        })
    },[])

    return(
           <div className='App'>
                {product.map(data =>
                <h2>{data.title} <br/> {data.description}</h2>)}
           </div>
        //    <div></div>
        )


}

// function Test(){
//     const [product, setProduct] = useState([]);

//     useEffect(() => {
//         axios.get('https://dummyjson.com/product')
//         .then(res => {setProduct(res.data.product)
//         })
//     })

    
//     return(
//     //    <div className='App'>
//     //         {product.map(data =><h2>{data.title}</h2>)}
//     //    </div>
//        <div></div>
//     )
// }

export default Test;