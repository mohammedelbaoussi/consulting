import { useEffect, useState } from "react";
import AddBlogForm from "../../components/AddBlogs/AddBlogForm";
import AddBlogHead from "../../components/AddBlogs/AddBlogHead";
import './AddBlogs.css'
import ReactQuill from "../../components/AddBlogs/ReactQuil";
import { useCreateBlogMutation, useGetBlogQuery, useUpdateBlogMutation } from "../../../features/Blogs/BlogApiSlice";
import { ImageUpload } from "../../../utils/ImageUpload";
import UpdateBlogHead from "../../components/UpdateBlog/UpdateBlogHead";
import {getAPI} from '../../../utils/fetchData'
import NotFound from '../../../pages/NotFound'
import { Link, useNavigate } from "react-router-dom";

const AddBlogs = ({id}) => {

    const initialState  ={title: '', description: '',  thumbnail: '', categoryId: ''}

    const [Blog, setBlog] = useState(initialState)
    const [body, setBody] = useState('')

    const [createBlog,{data: createdData} ] = useCreateBlogMutation()
    const [updateBlog,{data: updatedData}] = useUpdateBlogMutation()



    const [oldData, setOldData] = useState('')
    const [error, setError] = useState('')

    useEffect(()=>{
        if(!id) return;

        async function fetchData() {
            const res = await getAPI(`blog/${id}`)
            .then(res =>{
                setBlog(res?.data?.blog)
                 setBody(res?.data?.blog?.description)
            })
            .catch(err => setError(err))
            
          }
          fetchData();
        // setOldData(data?.blog)


        const initData ={
            title: '',
            description: '',
            thumbnail: '',
            category: '',
        }

        return ()=>{
            setBlog(initData)
            setBody('')
            setOldData(initData)
        }

     },[id])
    
     const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let url= ''

        if(typeof(Blog.thumbnail !== 'string')){
            const photo = await ImageUpload(Blog.thumbnail)

            url = photo.url
        }else{
            url = Blog.thumbnail
        }
        const newData = {...Blog, thumbnail: url, description: body}

        if(id){
            await updateBlog({id, newData})
            
        }else{
            await createBlog(newData)
        }
    }
   
    if(error === "Blog does not exist") return <NotFound/>
    return ( 
        <div className="container">
            <div className="row">
                {
                    
               id? 
               
               <UpdateBlogHead/>
               :
               <AddBlogHead/>
                } 
                 <div className="container" style={{marginBottom: '300px'}}>
                    <div className="row ">
                        <div className="col-md-8 col-12">
                        {
                        createdData? 
                    
                        <div className="col-mg-6 col-12 mb-4 p-2 bg-success" style={{color: '#fff'}}>Blog Créé avec Succès 
                        <Link style={{color: '#fff', marginLeft: '0.4rem'}} to={'/tableaudebord/blogs'}>
                            Aller aux blogs
                        </Link> 
                    </div>
                        :
                        ''
                        }
                         {
                        updatedData? 
                    
                        <div className="col-mg-6 col-12 mb-4 p-2 bg-success" style={{color: '#fff'}}>Blog mis à jour avec succès
                        <Link style={{color: '#fff', marginLeft: '0.4rem'}} to={'/tableaudebord/blogs'}>
                            Aller aux blogs
                        </Link> 
                     </div>
                        :
                        ''
                        }

                           <AddBlogForm Blog={Blog} setBlog={setBlog}/> 
                        </div>
                        
                    </div>
                    <div className="row">
                    </div>
                    <div className="row mt-4">
                        <label className="form-label">Description</label>
                        <div className="col-12">
                            <ReactQuill className='w-100' body={body} setBody={setBody}/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="text-center">

                    <button className="btn mt-3" style={{backgroundColor: '#0160a0', color:'#fff'}} onClick={handleSubmit}>{id?"update": "Créer"}</button>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
     );
}
 
export default AddBlogs;