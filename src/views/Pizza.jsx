import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import { myContext } from "../myContextPizza";

const Pizza = () => {
    const { pizza } = useContext(myContext);
    const { id } = useParams()

    return (
        <div className="container w-75 border mt-5">
            <div className="row ">
                <div className="col ps-0" >
                    {pizza.filter((element) => element.id === id).map((element) => (
                        <img width='100%' height='100%' src={element.img} alt="Pizza" />
                    ))}
                </div>
                <div className="col">
                    <div className="text-left mt-5" >
                        {pizza.filter((element) => element.id === id).map((item) => (
                            <div >
                                <div className="mt-3 ">
                                    <h2 >{item.name.replace(/^./, item.name[0].toUpperCase())}</h2>
                                    <hr></hr>
                                </div>
                                <div >
                                    <p>{item.desc}</p>
                                </div>
                                <h3>Ingredientes</h3>
                                <div className="container text-left w-75 ">
                                    <p>🍕{item.ingredients[0]}</p>
                                    <p>🍕{item.ingredients[1]}</p>
                                    <p>🍕{item.ingredients[2]}</p>
                                    <p>🍕{item.ingredients[3]}</p>
                                </div>
                                <div className="d-flex  justify-content-between mb-2" >
                                    <h2>Precio: ${item.price}</h2>
                                    <Button variant="danger">Añadir <span>🛒</span></Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pizza

