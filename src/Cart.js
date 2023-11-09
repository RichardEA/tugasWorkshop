import { useContext } from "react";
import { DataContext } from "./App";
import { useNavigate } from "react-router";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cart(){

    const navigate = useNavigate();

    const {cartItem, tes} = useContext(DataContext)

    const navBack = () => {
        navigate('/home');
    }

    console.log("cartItem",cartItem)
    return (
        <div>
            <div>
                <Row xs={1} md={4} className="g-4">
                {cartItem.map(data =>
                    <Col> 
                        <Card style={{ width: '18rem', height: '35rem' }}>
                            <Card.Img variant="top" src={data.thumbnail} style={{ width:'250px',height:'200px' }} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                    {data.description}
                                </Card.Text>
                                <Card.Text>
                                    ${data.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
                </Row>
                <br/>
                <Button onClick={navBack}>
                    Back
                </Button>
            </div>
        </div>
    )
}

export default Cart;