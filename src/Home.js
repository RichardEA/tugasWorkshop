import { useEffect, useState } from "react";
import './Home.css'
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Home(){

    const [product, setProduct] = useState([]);

    const cardStyle = {
        width: '18rem'
    }

    useEffect(() => {
        axios.get('https://dummyjson.com/product')
        .then(res => {
            console.log("res",res)
            setProduct(res.data.products)
        })
    },[])


    return(
        <div>
            

            <div class='row sm-2'>
                {product.map(data =>
                <div class='card'>
                    <img src={data.thumbnail} class='card-img-top' alt='picture'/>
                    <div class='card-body'>
                        <h5 class='card-title'>{data.title}</h5>
                        <p class='card-text'>{data.description}</p>
                        <a href='#' class='btn btn-primary'>add to</a>
                    </div>
                </div>
                )}
            </div>

        </div>
    )
}

export default Home;