import './Footer.css'
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaClock} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const FooterPage = () => {
    return ( 
        <div className="footer">
                <div className="container ">
                    <div className="row infofooterbarRow">
                        <div className="infofooterbar">
                            <div className="row">

                        <div className="col-md-4 col-12 d-flex infoC">
                            <div className="infoFIcon"><FaMapMarkerAlt/></div>
                            <div className="">
                                <span>Adresse:</span>
                                <h5>259 boulevard Abdelemoumn Casablanca</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 d-flex infoC">
                        <div className="infoFIcon"><BiPhoneCall/></div>
                            <div className="">
                                <span>Numéro de Téléphone:</span>
                                <h5>+212 661 356 956</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 d-flex infoC">
                        <div className="infoFIcon"><FaClock/></div>
                            <div className="">
                                <span>Heures de travail:</span>
                                <h5>MON - FRI: 8AM - 5PM</h5>
                            </div>
                        </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row footerRow mt-5">
                    
                    <div className="col-md-4 col-12">
                        <h1><img src={require('../images/logoWhite.png')}/>  ELMC</h1>
                        <p>
                        Nos formations sont assurées par des experts expérimentés qui combinent entre pédagogie, expertise et savoir faire. Nous ciblons votre besoin, et personnalisant la formation avec le domaine juridique approprié.
                        <br/>
                        <br/>
                        Qu’il s’agisse d’Hygiène et Sécurité,  Droit de travail, Data Pravacy ou protection du consommateur ou tout autre domaine, nos formateurs vous accompagnent dans les règles d’art.
                        </p>
                        <div className="social-media-icons d-flex">
                            <a href='#'><FaFacebookF className='me-2'/></a>
                            <a href='#'><FaInstagram className='me-2'/></a>
                            <a href='#'><FaTwitter className='me-2'/></a>
                            <a href='#'><FaLinkedin className='me-2'/></a>
                        </div>
                    </div>
                    <div className="col-md-4 col-12"></div>
                    <div className="col-md-4 col-12 linsUtiles ">
                        <h1>Liens Utiles</h1>
                        <ul className="px-0"><Link to="/apropos">À propos de nous</Link></ul>
                        <ul className="px-0"><Link to="/contactez-nous">Contacter-nous</Link></ul>
                        <ul className="px-0"><Link to="blogs">Nos blogs</Link></ul>
                        <ul className="px-0"><Link to="/droit-commercial">Nos Services Juridique</Link></ul>
                        <ul className="px-0"><Link to="/services-de-recouverement">Nos services de Recouverement</Link></ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FooterPage;