import {BiPhoneCall, BiEnvelope} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import './Header1.css'


const Header1 = () => {
    return ( 
        <div className="header1 pt-3" style={{height: '5rem'}}>
            <div className="row w-100">
                <div className="logo col-sm-4 col-lg-6  col-12">
                    <Link to='/'>
                        <img src={require('../images/LOGO.png')} alt='logo'/> 
                    </Link>
                    </div>
                <div className="leftHeader1 col-md-6 col-12 d-flex justify-contnt-between align-items-center">
                    <div className="phone me-1 d-flex align-items-center">
                        <div className="phoneLogo">
                            <BiPhoneCall/>
                        </div>
                        <div className="phoneText">
                            <div className='mainText' style={{fontWeight: '600'}}>
                                Appelez-nous
                            </div>
                            <div className='mainText' style={{color: '#CCCCCC'}}>
                                +212661356956
                            </div>
                        </div>
                    </div>
                    <div className="email me-1 d-flex align-items-center">
                        <div className="emailLogo">
                            <BiEnvelope/>
                        </div>
                        <div className="emailText">
                            <div className='mainText' style={{fontWeight: '600'}}>
                                Envoyer un e-mail
                            </div>
                            <div className='mainText' style={{color: '#CCCCCC'}}>
                                elmclawconsulting@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="btnConsultion" style={{fontWeight: '600'}}>
                        <Link to='/contactez-nous'>Consultation</Link> 
                    </div>
                </div>

            </div>
                        
        </div>
     );
}
 
export default Header1;