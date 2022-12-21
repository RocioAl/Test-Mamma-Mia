import React, { useContext } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { myContext } from "../myContextPizza";
import Button from 'react-bootstrap/Button';

const Carrito = () => {
    const { cart, setCart } = useContext(myContext);

    const changeAmount = (ac, id, am) => {
        setCart((item) =>
            item.map((obj) => {
                if (obj.idProduct === id) {
                    if (ac === "increase") {
                        return { ...obj, amount: am * 1 + 1 };
                    } else if (ac === "diminish" && am > 1) {
                        return { ...obj, amount: am * 1 - 1 };
                    }
                }
                return obj;
            })
        );
    };
    return (
        <div className="container w-75 border p-3 mt-5">
            <h4>Detalles del pedido:</h4>
            {cart.map(item =>
                <ListGroup key={item.id}>
                    <ListGroup.Item className="mt-1 d-flex  justify-content-between">
                        <div>
                            <img src={item.img} width='50px' height='40px' alt="Pizza" />
                            <strong className="ms-2">{item.name.replace(/^./, item.name[0].toUpperCase())}</strong>
                        </div>
                        <div>
                            <strong className="mx-2">${item.price * item.amount}</strong>
                            <Button onClick={() => changeAmount("diminish", item.idProduct, item.amount)} variant="danger">-</Button>
                            <strong className="mx-2">{item.amount}</strong>
                            <Button onClick={() => changeAmount("increase", item.idProduct, item.amount)} variant="primary">+</Button>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            )
            }
            <hr />
            <h2>Total: $
                {cart
                    .map((item) => item.price * item.amount)
                    .reduce((a,b) => a + b, 0)
                }
            </h2>
            <Button variant="success">Ir a pagar</Button>
        </div>
    )
}

export default Carrito
