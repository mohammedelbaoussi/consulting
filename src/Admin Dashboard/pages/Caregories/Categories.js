import CategoriesHeader from "../../components/Categories/CategoriesHeader";
import './Categories.css'
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "../../../features/Categories/CategorySliceApi";
import {BiEditAlt} from 'react-icons/bi' 
import {BsFillTrashFill} from 'react-icons/bs'
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
       
    const {data, isLoading} = useGetCategoriesQuery()
    const [deleteCategory]= useDeleteCategoryMutation()
    
    const navigate = useNavigate()

    const handleDelete = async(id)=>{

        if(window.confirm("Do you want to delete this Category?")){
            await deleteCategory(id)
            window.location.reload(false)
          }
    }

    return ( 
        <div className="container">
           <div className="row">
            <CategoriesHeader/>
            <div className="Categories border py-3">
                <div className="row">
                {
                    isLoading? 
                    <div className="vh-100 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                    </div>
                    
                    :
                    <>
                    {
                        data?.categoryList.map((category)=>(
                                <div className="col-md-3 col-6 mt-3"  key={category._id}>
                                    <div className="p-2">
                                    <h3 className="categoryName">{category.name}</h3>
                                    <div className="buttons">
                                        <Link to={`/tableaudebord/category/update/${category._id}`}><button className='edit'><BiEditAlt/> </button></Link>
                                        <button className='delete' onClick={()=> handleDelete(category._id)}><BsFillTrashFill/></button>
                                    </div>
                                    </div>
                                
                                </div>
                              
                            
                        ))
                    }
                    </>
                    }
                </div>
            </div>
           </div>
        </div>
     );
}
 
export default Categories;