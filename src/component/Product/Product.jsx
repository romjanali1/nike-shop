

const Product = ({product}) => {
    const {image, price} = product;
    return (
        <div className="relative w-64 h-96 border-2 border-inherit rounded-md">
           <div className="m-2">
           <img className="rounded-md" src={image} alt="" />
            <p>Price: ${price}</p>
            <button className="bg-green-300 hover:bg-green-400 absolute inset-x-0 bottom-0 h-12">Detils</button>
           </div>
            
        </div>
    );
};

export default Product;