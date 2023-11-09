import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { createContext, useEffect, useState } from "react";

function Test(){


    return (
        <div style={{ marginLeft: 'auto', marginRight: 'auto',marginTop: '75px', width: '50em' }}>
            <Card style={{ textAlign: 'center', padding: '20px' }}>
                WELCOME
            </Card>
            <Card style={{ padding: '20px', marginTop:'20px' }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form> 
            </Card>
            
        </div>
    )
}

export default Test