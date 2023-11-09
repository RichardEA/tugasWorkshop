import { createContext, useEffect, useRef, useState } from "react";
import './Home.css'
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const DataContext = createContext({});

function Home(){

    const [product, setProduct] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [tes] = useState("tes");

    const cardStyle = {
        width: '18rem'
        
    }

    const imgStyle = {
        
    }

    useEffect(() => {
        axios.get('https://dummyjson.com/product')
        .then(res => {
            console.log("res",res)
            setProduct(res.data.products)
        })
    },[])


    const showArray = () => {
        console.log(cartItem);
    }

    const testId = event => {
        alert(event.currentTarget.id)
    }

    const addItem = data => {
        setCartItem(cartItem.concat(data))
    }

    const contextData = {
        cartItem,
        tes
    }



    return(
        <DataContext.Provider value={contextData}>
            <div>
                <div class='row sm-6'>
                    {product.map(data =>
                    <div class="card" style={{ width:"18rem",height:'35rem' }}>
                        <img src={data.thumbnail} class="card-img-top" style={{ width:'250px',height:'200px' }}></img>
                        <div class="card-body">
                            <h5 class="card-title">{data.title}</h5>
                            <p class="card-text">{data.description}</p>
                            <p class="card-text">${data.price}</p>
                            <button class="btn btn-primary" id={data.id} onClick={e => addItem(data)}>
                            Add to cart
                            </button>
                        </div>
                    </div>
                    )}
                </div>
                {/* <input placeholder='insert new product' onChange={event => setTextboxValue(event.target.value)}/> */}
                <br/>
                <button onClick={showArray}>
                    show cart
                </button>
            </div>
        </DataContext.Provider>
       
    )
}

export default Home;