export default function Header(){
    return (
        <header className="header">       
        <img height="34px" width="134px" class="logo" src="/bigLogo.svg" alt="logo"/>
        <div className="w-2/4">
            <input className="searcher-conteiner ml-4 focus:outline-none" type="text" name="searcher"
                        id="searcher" placeholder="Buscar Productos Android"/>
        </div>
        <nav className="mr-4">
            <ul className="flex flex-row items-center">
                <li>
                    Inicio
                </li>
                <li className="flex flex-col">
                    <span className="badge-style" id="cart-badge"></span>
                    <a href="pages/cart.html"><img src="/cart.svg" alt="carrito"/></a>
                </li>
            </ul>
        </nav>
        </header> 
    )
}