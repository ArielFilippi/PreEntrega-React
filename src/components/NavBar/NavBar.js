import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Galeria</a></li>
                <li><a href="#">Contacto</a></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar;

