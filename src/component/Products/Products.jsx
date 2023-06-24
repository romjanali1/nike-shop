import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
    const products = useLoaderData()
    return (
        <div className=" my-10 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {
                products.map(product => <Product
                key = {product.id}
                product = {product}
                ></Product>)
            }
        </div>
    );
};

export default Products;