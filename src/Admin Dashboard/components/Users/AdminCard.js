import { FaUserEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserCard = ({admin}) => {
    return ( 
        <div className="col-md-6 col-lg-4 col-12">
            <div className='UserCard mb-4'>
                <div className='imgContainer'>
                {/* <img src={require('../../productsImg/MyLogoJ-3.jpg')} alt="" /> */}
                <FaUserEdit  style={{fontSize: '4rem'}}/>
            </div>
            <div className='textContainer mt-2'>
                <h2 className='mb-0'><Link to={`/tableaudebord/utilisateur/${admin._id}`}>{admin.firstName}</Link></h2>
                <span>{admin.role}</span>
                <a className='mail' href="mailto: abc@exemple.com">{admin.email}</a>
            </div>
            </div>
            
        </div>
     );
}
 
export default UserCard;