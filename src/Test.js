import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { createContext, useEffect, useState } from "react";

function Test(){

    const [product, setProduct] = useState([]);

    

    useEffect(() => {
        axios.get('https://dummyjson.com/product')
        .then(res => {
            setProduct(res.data.products)
        })
    },[])

    return (
        <div>
            <Row xs={1} md={4} className="g-4">
            {product.map(data =>
                <Col> 
                    <Card style={{ width: '18rem', height: '35rem' }}>
                        <Card.Img variant="top" src={data.thumbnail} style={{ width:'250px',height:'200px' }} />
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>
                                {data.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )}
            </Row>
            
        </div>
    )
}

export default Test