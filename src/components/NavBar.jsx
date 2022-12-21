import { useContext } from "react";
import Nav from 'react-bootstrap/Nav';
import NavbarHeader from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { myContext } from "../myContextPizza";
const Navbar = () => {
    const { cart } = useContext(myContext);

    return (
        <>
            <NavbarHeader expand="lg" bg="info" variant="dark">
                <Container  >
                    <NavbarHeader.Toggle aria-controls="navbarScroll" />
                    <NavbarHeader.Collapse id="navbarScroll">
                        <Nav className="me-auto" >
                            <NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? "red " : 'white',
                                    opacity: isActive ? 1 : ""
                                })}
                                className=" text-decoration-none"
                                to='/'>
                                <NavbarHeader.Brand  ><span>🍕</span> Pizzería Mamma Mia! </NavbarHeader.Brand>
                            </NavLink>
                        </Nav>
                        <Nav >
                            <NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? "red " : 'white',
                                    opacity: isActive ? 1 : ""
                                })}
                                className=" text-decoration-none"
                                to='/carrito'>
                                <NavbarHeader.Brand  ><span>🛒</span> $
                                    <strong>
                                        {cart
                                            .map((item) => item.price * item.amount)
                                            .reduce((a, b) => a + b, 0)
                                        }
                                    </strong>
                                </NavbarHeader.Brand>
                            </NavLink>
                        </Nav>
                    </NavbarHeader.Collapse>
                </Container>
            </NavbarHeader>
        </>
    )
}

export default Navbar 