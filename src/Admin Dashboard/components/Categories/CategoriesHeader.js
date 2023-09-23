import { Link } from "react-router-dom";

const CategoriesHeader = () => {
    return ( 
        <div className="catHeader productsHeader d-flex justify-content-between align-items-center py-4">
            <div><h2>Categories</h2></div>
            <div><button><Link to={'/tableaudebord/category/create'}>Créer une Category</Link> </button></div>
        </div>
     );
}
 
export default CategoriesHeader;