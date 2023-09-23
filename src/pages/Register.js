import { useState } from "react"
import './Register.css'
import { Link, Navigate } from "react-router-dom"
import { useRegisterMutation } from "../features/Auth/AuthApiSlice"
import { useDispatch } from "react-redux"
import { setCredentials } from "../features/Auth/AuthSlice"

const Register = () => {

    const initialState  ={firstName: '', lastName: '',  email: '', password: '', c_password: ''}
    const [userRegister, setUserRegister] = useState(initialState)
    const {firstName, lastName, email, password, c_password} = userRegister

    const [register, {isLoading, error, data}] = useRegisterMutation()

    const [errorsList, setErrorsList] = useState({})
    const [typePass, setTypePass] = useState(false)
    const [typePassC, setTypePassC] = useState(false)
    
    const dispatch = useDispatch()

    const ChangeInput = (e)=>{
        const {value, name} = e.target
        setUserRegister({...userRegister, [name]: value})
        
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
       const {data, error} = await register(userRegister)
       const accessToken = data?.access_token
       const user = data?.savedUser
       console.log(error)
       if(error?.data?.msg!== "Le mot de passe de confirmation ne correspond pas au mot de passe"){

           setErrorsList(error?.data?.msg)
       }
      dispatch(setCredentials({accessToken, user}))
    }

    return ( 
        <div className="container">
                <div className="row">
                <div className="register">
                <form className="registerForm rounded-2" onSubmit={handleSubmit}>
            <div>
            {
             isLoading? <div className="loginlaoding"> Loading... </div>: ''
            
            }
            {
              data?.access_token ? <Navigate to={'/'}/> : ''
            }

            <div className="row mb-3 ">
                <label htmlFor="inputName" className="col-lg col-form-label">Prénom</label>
                <div className="col-sm-12">
                <input type="text" className="form-control" id="inputName" name='firstName'
                value={firstName}
                onChange={ChangeInput}
                placeholder="prénom"
                />
                {
                    errorsList?.firstName ? 
                    <div className="loginerrors col-lg-12 mt-1">{error?.data?.msg?.firstName}</div>
                    :
                    ""
                }
                </div>
            </div>
            <div className="row mb-3 ">
                <label htmlFor="inputName" className="col-lg col-form-label">Nom</label>
                <div className="col-sm-12">
                <input type="text" className="form-control" id="inputName" name='lastName'
                value={lastName}
                onChange={ChangeInput}
                placeholder="nom"
                />
                {
                        errorsList?.lastName ? 
                        <div className="loginerrors col-lg-12 mt-1">{error?.data?.msg?.lastName}</div>
                        :
                        ""
                    }
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputEmail" className="col-lg col-form-label">Adresse Email</label>
                <div className="col-sm-12">
                <input type="email" className="form-control" id="inputEmail" name='email'
                value={email}
                onChange={ChangeInput}
                placeholder="exemple@gmail.com"
                />
                {
                        errorsList?.email ? 
                        <div className="loginerrors col-lg-12 mt-1">{error?.data?.msg?.email}</div>
                        :
                        ""
                    }
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword" className="col-lg col-form-label"> Mot de Passe</label>
                <div className="col-sm-12 smallC">
                <input type={typePass?"text":"password" } className="form-control"  name='password'
                value={password}
                onChange={ChangeInput}
                placeholder="Password"
                id="inputPassword"/>
                 <small onClick={() => setTypePass(!typePass)}>
                        {typePass ? 'Hide' : 'Show'}
                    </small>
                {
                        errorsList?.password ? 
                        <div className="loginerrors col-lg-12 mt-1">{error?.data?.msg?.password}</div>
                        :
                        ""
                    }
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputCPassword" className="col-lg col-form-label"> Confirmer Votre mot de Passe</label>
                <div className="col-sm-12 smallC">
                <input type={typePassC?"text":"password" } className="form-control"  name='c_password'
                value={c_password}
                placeholder="Confirm Password"
                onChange={ChangeInput}
                id="inputCPassword"/>
                 <small onClick={() => setTypePassC(!typePassC)}>
                        {typePassC ? 'Hide' : 'Show'}
                    </small>
                {
                        error?.data?.msg === "Le mot de passe de confirmation ne correspond pas au mot de passe"? 
                        <div className="loginerrors col-lg-12 mt-1">{error?.data?.msg}</div>
                        :
                        ""
                    }
                </div>
            </div>
            </div>
            <button className="btn mb-3"> S'inscrire</button>
            <span className="dejaCompte">Avez vous déjà un compte? <Link className="dejaCompte" to="/seconnecter">SE CONNECTER</Link></span>

        </form>
                </div>
            </div>
        </div>
     );
}
 
export default Register;