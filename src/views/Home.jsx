import React, { useContext } from "react";
import { myContext } from "../myContextPizza";
import ImgenHeader from '../assets/img/header.jfif';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const header = {
    backgroundImage: `url(${ImgenHeader})`
    , width: "100%",
    height: "300px",
    backgroundSize: 'cover',
    overflow: 'hidden',
    color: 'white'
}
const Home = () => {
    const { pizza, cart, setCart } = useContext(myContext);
    const navigate = useNavigate();

    const addCart = (value) => {
        setCart([
            ...cart,
            {
                idProduct: value.id,
                name: value.name,
                amount: 1,
                price: value.price,
                img: value.img,
            },
        ]);
    };
    return (
        <div>
            <div style={header}>

                <div className="container text-center w-50 mt-5">
                    <h1>Pizzería Mamma Mia!</h1>
                    <h5> Tenemos las mejores pizzas que podrás encontrar </h5>
                    <hr></hr>
                </div>

            </div>
            <Container className="mt-5">
                <Row xs={1} md={4} className="g-4">

                    {pizza.map((item) => (

                        <Col key={item.id}>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name.replace(/^./, item.name[0].toUpperCase())}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><strong>Ingredientes:</strong></ListGroup.Item>
                                    <ListGroup.Item >
                                        <div className="container text-left w-75 ">
                                            <p className="py-0 my-0 ">🍕{item.ingredients[0]}</p>
                                            <p className="py-0 my-0 ">🍕{item.ingredients[1]}</p>
                                            <p className="py-0 my-0 ">🍕{item.ingredients[2]}</p>
                                            <p className="py-0 my-0">🍕{item.ingredients[3]}</p>
                                        </div>

                                    </ListGroup.Item>
                                    <ListGroup.Item className=" text-center">
                                        <h3>$ {item.price}</h3>
                                    </ListGroup.Item>
                                </ListGroup>
                                <Card.Body className=" text-center">

                                    <Button variant="info" className="me-2"
                                        onClick={() => navigate(`/pizza/${item.id}`)}
                                    >Ver más <span>👀</span></Button>


                                    <Button variant="danger"
                                        // onClick={Añadir}
                                        onClick={() => addCart(item)}
                                    >Añadir <span>🛒</span></Button>

                                </Card.Body>
                            </Card>

                        </Col>


                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Home