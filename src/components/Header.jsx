import NavLink from "./NavLink";
function Header(){
    return <header className="d-flex header">
        <img src="/imgs/dc-logo.png" alt="Logo DC" />
        <NavLink/>
    </header>; 
}

export default Header;