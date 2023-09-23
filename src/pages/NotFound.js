import { useRouteError } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {

    const error = useRouteError();
    return ( 
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>please go back to home page</i>
            </p>
        </div>
     );
}
 
export default NotFound;