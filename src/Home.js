import { createContext, useContext, useEffect, useRef, useState } from "react";
import './Home.css'
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DataContext } from "./App";
import { useNavigate } from "react-router";
import Test from "./Test";

export const DataContext2 = createContext({});


function Home(){

    // const contextData2 = {
    //     setCartItem
    // }

    const [product, setProduct] = useState([]);
    
    const {cartItem,setCartItem, tes} = useContext(DataContext)

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

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/home');
    }

    const navigateToCart = () => {
        navigate("/cart")
    }

    console.log(cartItem);
    const testId = event => {
        alert(event.currentTarget.id)
    }

    const addItem = data => {
        setCartItem(cartItem.concat(data))
        alert("Item added")
    }

    return(
        // <DataContext.Provider value={contextData2}>
           <div>
                <Test/>
                <br/>

                <Row xs={1} md={4} className="g-4">
                {product.map(data =>
                    <Col> 
                        <Card style={{ width: '18rem', height: '35rem' }}>
                            <Card.Img variant="top" class='mx-auto' src={data.thumbnail} style={{ width:'250px',height:'200px' }} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                    {data.description}
                                </Card.Text>
                                <Card.Text>
                                    ${data.price}
                                </Card.Text>
                                <Button variant="primary" id={data.id} onClick={e => addItem(data)}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
                </Row>
            </div>
        // </DataContext.Provider>
       
    )
}

export default Home;