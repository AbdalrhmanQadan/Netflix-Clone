import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <>
            <nav className="nav">
                <Link className="nav-link" to={{ pathname: '/' }}>Home</Link>
                <Link className="nav-link" to={{ pathname: 'model' }}>model</Link>
            </nav>
        </>
    )
}
export default Nav;