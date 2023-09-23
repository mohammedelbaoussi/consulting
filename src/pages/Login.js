import { useState } from "react"
import './Login.css'
import { Link, Navigate } from "react-router-dom"
import { useLoginMutation } from "../features/Auth/AuthApiSlice"
import { useDispatch, useSelector } from "react-redux"
import { setCredentials } from "../features/Auth/AuthSlice"

const Login = () => {

    const initialState = {email: '', password: ''}
    const [userLogin, setUserLogin] = useState(initialState)
    const [typePass, setTypePass] = useState(false)
    const {email, password} = userLogin
    const {token} = useSelector(state => state.Auth)

    const [login, {isLoading, error}] = useLoginMutation()

    const [errorsList, setErrorsList] = useState({})



    const dispatch = useDispatch()

    const ChangeInput = (e)=>{
        const {value, name} = e.target
        setUserLogin({...userLogin, [name]: value})
    }

    const handleSumbit = async(e)=>{ 
        e.preventDefault()
        const {data, error} = await login(userLogin)
         const accessToken = data?.access_token
         const user = data?.user
         
       setErrorsList(error?.data?.msg)
         
        dispatch(setCredentials({accessToken, user}))
    }
    return ( 
        <div className="container">
            <div className="row">
               <div className="login">
               <form className="LoginForm rounded-2" onSubmit={handleSumbit}>
            <div>
                {
                isLoading ? <div className="loginlaoding"> Loading... </div>: ''
                
                }
                {/* {
               error !== "Please login now!" && error ?  <div className="loginerrors">{error?.data?.msg}</div> : ''
                } */}
                {
                token ? <Navigate to={'/'}/> : ''
                }
            
                <div className="row mb-3">
                    <label htmlFor="inputEmail" className="col-lg col-form-label">Adresse Email</label>
                    <div className="col-sm-12">
                    <input type="email" name='email' className="form-control" id="inputEmail"
                    placeholder="Exemple@gmail.com"
                    value={email}
                    onChange={ChangeInput}/>
                     {
                        error?.data?.msg === "veuillez ajouter un email"? 
                        <div className="loginerrors col-lg-12 mt-1">{error?.data?.msg}</div>
                        :
                        ""
                    }
                    {
                        error?.data?.msg === "Ce compte n'existe pas"? 
                        <div className="loginerrors col-lg-12 mt-1">{error?.data?.msg}</div>
                        :
                        ""
                    }
                    </div>
                </div>
            
                <div className="row mb-3">
                    <label htmlFor="inputPassword" className="col-lg col-form-label"> Mot de Passe </label>
                    <div className="col-sm-12 smallC">
                    <input 
                    type={typePass?"text":"password" } name='password' className="form-control" 
                    placeholder="mot de passe"
                    id="inputPassword"
                    value={password} 
                    onChange={ChangeInput}/>
                    <small onClick={() => setTypePass(!typePass)}>
                        {typePass ? 'Hide' : 'Show'}
                    </small>
                      {
                        error?.data?.msg === "Le mot de passe est incorrect"? 
                        <div className="loginerrors col-lg-12 mt-1">{error?.data?.msg}</div>
                        :
                        ""
                    }
                    </div>
                </div>
                </div>
                <button className="btn mb-3"> Se Connecter</button>
                <span>Vous n'avez pas de compte? <Link to="/s'inscrire">S'INSCRIRE</Link></span>
                </form>
                    </div>
                    </div>
                </div>
     );
}
 
export default Login;