import React, {useEffect, useState} from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import axios from "axios";

const ReadUsers = () => {
    const getAllUsersUrl = 'http://localhost:3000/v1/user/all';
    const [users, setUsers] = useState();

    const fetchUsers = async () => {
        const res = await axios.get(`${getAllUsersUrl}`)
        setUsers(res.data);
    }


    useEffect (() => {
        fetchUsers();
    }, []);


    const renderedUsers = Object.values(users).map(user =>{
        return (
            <>
                <h3 className ='text-center'>Users</h3>
                <Row className= 'justify-content-center'>
                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    });

    return (
        <Container>
            <Row className ='d-flex flex-row flex-wrap justify-content-between'>
                {renderedUsers}
            </Row>
        </Container>
    )
}


export default ReadUsers;