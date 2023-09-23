import { NavLink } from "react-router-dom";
import {BsFillHouseFill} from 'react-icons/bs'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {BsBagFill} from 'react-icons/bs'
import {BsFillBasketFill} from 'react-icons/bs'
import {BsFillGrid1X2Fill} from 'react-icons/bs'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {AiOutlineMenuFold} from 'react-icons/ai'
import {FaBlog, FaPlusCircle, FaQuestionCircle, FaStore} from 'react-icons/fa'


const NavSideBar = ({showSideBar, setShowSideBar}) => {
    return ( 
            <div  
            id= {showSideBar? 'hideSidebar': '' }
            
            className="sidebar col-2 admindashlinks px-0 show-sidebar " 
             >
                
               
                <div className="admin collapseIcon "><span>Admin</span> <button onClick={()=>setShowSideBar(true)}><i><AiOutlineMenuFold/></i></button>
                </div>
                
                <ul>
                    <li>
                        <NavLink className="link" to="/tableaudebord">
                             <div><i><BsFillHouseFill/></i></div> 
                             <div><span>Tableau de Bord</span></div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link"  to="/tableaudebord/blogs">
                            <div><i><FaBlog/></i></div> 
                            <div></div><span>Blogs</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/tableaudebord/addblogs">
                            <div><i><FaPlusCircle/></i></div> 
                            <div><span>Add Blog</span></div>
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink className="link" to="/tableaudebord/categories">
                            <div><i><BsFillGrid1X2Fill/></i></div> 
                            <div><span>Catégories</span></div>
                        </NavLink>
                    </li> */}
                    
                    <li>
                        <NavLink className="link" to="/tableaudebord/consultations">
                            <div><i><FaQuestionCircle/></i></div>
                            <div><span>Consultations</span></div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/tableaudebord/utilisateurs">
                            <div><i><BsFillPersonLinesFill/></i></div>
                            <div><span>Users</span></div> 
                        </NavLink>
                    </li>
                </ul>
   
            </div>
     );
}
 
export default NavSideBar;