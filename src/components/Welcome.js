import { Link } from 'react-router-dom';
import './Welcome.css'

const Welcome = () => {
    return ( 
        <>
           <div className="welcome">
            <div className="container ">
                <div className="row">
                    <div className=" welcomeText1">
                        <div className="text1 ">
                            <div className="head1C">
                                <h1 className='head1'>
                                Expertise in Legal<br/>
                                Management Consulting
                                </h1>
                            </div>
                            <div className="pC">
                                    <p>spécialisé en Droit des Affaires avec toutes ses composantes,<br/>
                                         Droit Contractuel, Ingénierie et Audit Juridique.</p>
                            </div>        
                            <div className="welButtons">
                                <button className='btn1'><Link to={'/apropos'}>PLUS SUR NOUS</Link> </button>
                                <button className='btn2'><Link to={'/contactez-nous'}>CONTACTEZ-NOUS</Link> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
      
     );
}
 
export default Welcome;