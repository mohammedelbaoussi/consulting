import { useGetAllUsersQuery } from '../../../features/Auth/AuthApiSlice';
import UserCard from '../../components/Users/UserCard';
import UsersSeachBar from '../../components/Users/UsersSearchBar';
import AdminCard from '../../components/Users/AdminCard'
import './Users.css'

const Users = () => {

    const {data, isLoading} = useGetAllUsersQuery()
    return ( 
        <div className="container ordersContainer">
            <div className="row ">
                <div className="Orders">
                        <div className="row">
                            <h1 style={{fontWeight: 'bold', margin: '20px 0px'}}>Utilisateurs</h1>
                        </div>
                        <div className="row dashlatestorders">
                            <div className="col-12">
                            <div>
                                <UsersSeachBar/>
                                </div>
                                <div className="p-3 border">
                                    <div className="container">
                                    {
                                        isLoading? 
                                        <div className="vh-100 d-flex align-items-center justify-content-center">
                                        <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                        </div>
                                        
                                        :
                                        <>
                                            <div className="row">
                                                <h2>Admins</h2>
                                                {
                                                data?.map((user)=>(
                                                    user?.role === 'admin'? 
                                                        <AdminCard admin={user} key={user?._id}/>  
                                                    :
                                                    ''   
                                                ))
                                                }
                                            </div>
                                            <div className="row">
                                                <h2>User</h2>
                                                {
                                                data?.map((user)=>(
                                                    user?.role === 'admin'? 
                                                    ''
                                                    :
                                                    <UserCard user={user} key={user?._id}/>   
                                                ))
                                                }
                                            </div>
                                        </>
                                    }
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
         

                </div>
               
            </div>
        </div>
     );
}
 
export default Users;