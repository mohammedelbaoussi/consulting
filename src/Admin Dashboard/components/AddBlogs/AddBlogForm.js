
import { useGetCategoriesQuery } from '../../../features/Categories/CategorySliceApi';


const AddBlogForm = ({Blog, setBlog}) => {
   //const [selectedImages, setSelectedImages] = useState([]);

    const ChangeInput = (e)=>{
        const {value, name} = e.target
        setBlog({...Blog, [name]: value})
        
    }


    const {data} = useGetCategoriesQuery()
   

    const handleChangeThumbnail = (e) =>{
        const target = e.target
        const files = target.files

        if(files){
            const file = files[0]
            setBlog({...Blog, thumbnail: file})
        }
        
    }

    return ( 
                    <div className="container border py-4">
                        <div className="row">
                        <form className="col-12">
                            <div className="row mb-3">
                                <div className="col-12">
                                <label htmlFor="" className="form-label">Titre du Blog</label>
                                <input type="text" id="" className="form-control" 
                                name='title'
                                value={Blog?.title}
                                onChange={ChangeInput}
                                placeholder="Titre du Blog"/>
                            </div>
                            </div>
                           <div className="row my-3">
                             <div className="form-group my-3">
                                <input type="file" className="form-control"
                                accept="image/*" onChange={handleChangeThumbnail} />
                            </div>
                            <span style={{backgroundColor: '#cccc' ,fontSize: '0.7rem'}}>pour une présentation parfaite de votre image réglez la taille sur [ largeur : 1920px - hauteur : 650px ]</span>
                           </div>
                            {/* <div className="row my-3">
                                <div className="col-12">
                                <label htmlFor="" className="form-label">Catégorie</label>
                                <select className="form-select"
                                name='categoryId'
                                value={Blog?.categoryId}
                                onChange={ChangeInput}
                                 aria-label="Default select example"
                                 >
                                    <option value="">Sélectionnez la catégorie du blog</option>
                                    {
                                        data?.categoryList.map((category)=>(
                                            <option key={category?._id} value={category?._id}>
                                                {category?.name}
                                            </option>
                                        )) 
                                    }
                                  
                                </select>
                            </div>
                            </div> */}
                            
                        </form>
                        </div>
                    
                    </div>
                
                

     );
}
 
export default AddBlogForm;