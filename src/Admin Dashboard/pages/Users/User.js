import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetUserQuery, useUpdateUserRoleMutation } from '../../../features/Auth/AuthApiSlice';
import { useState } from 'react';
import { FaUser, FaUserEdit } from 'react-icons/fa';

const User = () => {
    const {id} = useParams()

    const {data} = useGetUserQuery(id)
    const [role, setRole] = useState(data?.user?.role)
    const [updateUserRole, { error, loading}] = useUpdateUserRoleMutation()
    const navigate = useNavigate()

    const ChangeInput = (e)=>{
    const {value, name} = e.target
    setRole({[name]: value})
        
    }
   const handleUpdate = async()=>{
    if(window.confirm(`Do you want to change the role of this user?`)){
         await updateUserRole({id, role})
        navigate('/tableaudebord/utilisateurs')
    }
   }

    return ( 
        <div className="container user">
            <div className="row">
                <h1>User</h1>
            </div>
            <div className="row">
                   <div className="col-md-6 col-12 py-5">
                        <div className='UserCard mb-4 '>
                            <div className='imgContainer'>
                                {
                                    data?.user?.role === 'admin'? 
                                    <FaUserEdit  style={{fontSize: '4rem'}}/>
                                    :
                                    <FaUser style={{fontSize: '4rem'}}/>
                                }
                            {/* <img src={require('../../productsImg/MyLogoJ-3.jpg')} alt="" /> */}
                        </div>
                        <div className='textContainer mt-2'>
                            <h2 className='mb-0'>{data?.user?.firstName}</h2>
                            <span>{data?.user?.role}</span>
                            
                            <select className="form-select"
                                name='role'
                                //value={role}
                                onChange={ChangeInput}
                                 aria-label="Default select example"
                                 >
                                    <option defaultValue>change user role</option>
                                    <option value="user">user</option>
                                   
                                    <option value="admin">admin</option>
                                  
                                </select>
                            <a href="mailto: abc@exemple.com">{data?.user?.email}</a>
                        </div>
                         <button className='btn border mt-2' onClick={handleUpdate}>update</button>
                        </div>
                        
                    </div>
            </div>
        </div>
     );
}
 
export default User;