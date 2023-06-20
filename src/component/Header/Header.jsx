
import { Link} from "react-router-dom";
const Header = () => {
    return (
        <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        <Link to='/product'>Product</Link>
        <Link to='/login'>Log in</Link>
        <Link to='/signin'>Sign in</Link>
    </div>
    );
};

export default Header;