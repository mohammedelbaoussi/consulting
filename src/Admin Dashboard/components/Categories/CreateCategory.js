import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddCategoryMutation, useUpdateCategoryMutation } from "../../../features/Categories/CategorySliceApi";
import { getAPI } from "../../../utils/fetchData";
const CreateCategory = ({id}) => {
    
    const initialState = {name: ''}
    const [category, setCategory]= useState(initialState)
    const [addCategory] = useAddCategoryMutation()
     const [updateCategory]= useUpdateCategoryMutation()
     const [error, setError] = useState('')
    
    const ChangeInput = (e)=>{
        const {value, name} = e.target
        setCategory({...category, [name]: value})
        
    }

    const navigate = useNavigate()
    useEffect(()=>{
        if(!id) return;

        async function fetchData() {
            await getAPI(`category/getcategory/${id}`)
            .then(res =>{
                setCategory(res?.data?.category)
            })
            .catch(err => setError(err))
            
          }
          fetchData();


        const initData ={
            title: '',
            description: '',
            thumbnail: '',
            category: '',
        }

        return ()=>{
            setCategory(initData)

        }

     },[id])
    const handleSumbit =async (e)=>{
        e.preventDefault()
        if(id){
           const {data}= await updateCategory({id, category})
           navigate('/tableaudebord/categories')
        }else{
            await addCategory(category)
            navigate('/tableaudebord/categories')
        }
    }
    return ( 
        <div className="container">
        <div className="row">
        <div className="productsHeader d-flex justify-content-between align-items-center py-4">
            <div><button><Link style={{textDecoration: 'none', color: '#fff'}} to={'/categories'}>Aller aux Catégories</Link> </button></div>
            <div><button onClick={handleSumbit}>Publier Maintenant </button></div>
        </div>
         <div className="Categories">
             <div className="row">
             <div className="createCateForm">
             <form action="">
            <div className="mb-3">
                <label className="form-label">Category Name:</label>
                <input className="form-control" type="text" placeholder="electronic forn exemple..."
                 name='name'
                 value={category.name}
                 onChange={ChangeInput}
                />
            </div>
            
        </form>
                 </div>
                 
             </div>
         </div>
        </div>
     </div>
        
     );
}
 
export default CreateCategory;