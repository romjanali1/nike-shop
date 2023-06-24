
import { Link} from "react-router-dom";
const Header = () => {
    return (
        <div className="bg-green-300 p-5 flex justify-center">
        <Link className="mr-4" to='/'>Home</Link>
        <Link className="mr-4" to='/products'>Products</Link>
        <Link className="mr-4" to='/about'>About</Link>
        {/* <Link className="mr-4" to='/product'>Product</Link> */}
        <Link className="mr-4" to='/login'>Log in</Link>
        <Link className="mr-4" to='/signin'>Sign in</Link>
    </div>
    );
};

export default Header;