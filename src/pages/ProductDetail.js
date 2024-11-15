import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
    const params = useParams();

    return <> 
    <h1>Details about a product</h1>
    <p>{params.productId}</p>
    <p><Link to=".." relative="path">Back</Link></p>
    </>
}

export default ProductDetailPage;