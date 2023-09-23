import {AiOutlineMenuUnfold} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useLogoutQuery } from '../../features/Auth/AuthApiSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const DashNav = ({showSideBar, setShowSideBar}) => {

    const {token} = useSelector(state => state.Auth)

    const [skip, setSkip] = useState(true);
    useLogoutQuery('logout',{skip:skip});
   


   const handleLogout = () => {
    if(!token) return;
    setSkip(false)    
   }
   
    return ( 

        <div className="container">
            <div className="row align-items-center w-100 pe-4">
                <div className="col-2 collapseIcon" id={showSideBar? '': 'hidbutton' }>
                    <button className="me-1"   
                    onClick={()=>setShowSideBar(false)}><i className='collapseIcon'><AiOutlineMenuUnfold/></i></button>
                </div>
                <div className="dropdown col-1 profile-drop ms-auto">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className='myLogo' src={require('../../images/LOGO.png')} alt="profile picture" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" to={'/'}>Home</Link></li>
                        <li><Link onClick={handleLogout} className="dropdown-item" to={'/'}>Logout</Link></li>
                    </ul>
                </div>
         
            </div>
        </div>
     );
}
 
export default DashNav;