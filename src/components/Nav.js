import { Link} from 'react-router-dom';
import './Nav.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useLogoutQuery } from '../features/Auth/AuthApiSlice';


const Nav = () => {

    const {token} = useSelector(state => state.Auth)
    const {user} = useSelector(state => state.Auth)

    const [skip, setSkip] = useState(true);
    useLogoutQuery('logout',{skip:skip});
   


   const handleLogout = () => {
    if(!token) return;
    setSkip(false)    
   }

    return (                
        <nav className="navbar navbar-expand-lg navbar-light nav ">
            <div className="container px-1">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" id='link' aria-current="page" to="/blogs">BLOGS</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" id='link' to="/services-de-recouverement">SERVICES RECOUVREMENT</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" id='link' to="/droit-commercial">SERVICES JURIDIQUE</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" id='link' to="apropos">À PROPOS</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" id='link' to="contactez-nous">CONTACTEZ-NOUS</Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link className="nav-link" id='link' to="faq">FAQ</Link>
                    </li> */}

                </ul>
                <div className="">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            token? 
                            <>
                            <li className="nav-item" >
                            <Link className="nav-link" id='link' to="/" onClick={handleLogout}>
                                 SE DÉCONNECTER
                            </Link>
                           
                            </li>
                            {
                            user.role === 'admin'? 
                            <li className="nav-item">
                            <Link className="nav-link" id='link' to="/tableaudebord" target="_blank">TABLEAU DE BORD</Link>
                            </li>
                            :
                            ''
                            }
                            </>
                            :
                            <>
                            <li className="nav-item">
                            <Link className="nav-link" id='link' aria-current="page" to="s'inscrire">S'INSCRIRE</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" id='link' to="seconnecter">SE CONNECTER</Link>
                            </li>
                            </>
                        }

                    </ul>
                </div>
                </div>
            </div>
            </nav>
     )
}
 
export default Nav;