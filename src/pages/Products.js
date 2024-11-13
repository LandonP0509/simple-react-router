import { Link } from "react-router-dom";
import productList from "../data/productList.json"

function ProductsPage() {
    return ( 
    <> 
        <h1>The Products Page</h1>
        <ul>
            {productList.products.map((prod) => (
                <li key={prod.id}>
                    <Link to={`/products/${prod.id}`}>{prod.name}</Link>
                </li>
            ))}
        </ul>
    </>
    );
}

export default ProductsPage;