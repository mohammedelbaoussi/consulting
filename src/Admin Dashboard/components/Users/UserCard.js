import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserCard = ({user}) => {
    return ( 
        <div className="col-md-6 col-lg-4  col-12">
            <div className='UserCard mb-4'>
                <div className='imgContainer'>
                {/* <img src={require('../../productsImg/MyLogoJ-3.jpg')} alt="" /> */}
                <FaUser style={{fontSize: '4rem'}}/>
            </div>
            <div className='textContainer mt-2'>
                <h2 className='mb-0'><Link to={`/tableaudebord/utilisateur/${user._id}`}>{user.firstName}</Link></h2>
                <span>{user.role}</span>
                <Link className='mail' to="mailto: abc@exemple.com">{user.email}</Link>
            </div>
            </div>
            
        </div>
     );
}
 
export default UserCard;