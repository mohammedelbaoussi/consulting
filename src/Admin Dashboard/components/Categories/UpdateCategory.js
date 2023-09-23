import CategoriesHeader from "./CategoriesHeader";
import { Link, useParams } from "react-router-dom";
import CreateCategory from "./CreateCategory";

const UpdateCategory = () => {
    const {id} = useParams()

    
    return ( 
          <CreateCategory id={id}/> 
     );
}
 
export default UpdateCategory;