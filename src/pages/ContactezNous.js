import { useState } from 'react'
import './ContactezNous.css'
import { useAddConsultationMutation } from '../features/Consultations/ConsultationApiSlice'

const ContactezNous = () => {

    const initialState  ={name: '', email: '',  phone: '', sujet: '', message: ''}
    const [consultation, setConsultation] = useState(initialState)
    const [addConsultation, {data, isLoading, error}]= useAddConsultationMutation()

    const ChangeInput = (e)=>{
        const {value, name} = e.target
        setConsultation({...consultation, [name]: value})
        
    }

    const handleSubmit= async(e)=>{
     e.preventDefault()
    await addConsultation(consultation)
    
    } 
    return ( 
        <div className="contacteznous">
            <div className="headhead">
                <div className="container">
                    <div className="row">
                        <h2 style={{color: '#ffff'}}>Contactez-nous</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                        <h4 className='mb-5'>Découvrez les différentes formules tarifaires de notre cabinet</h4>
                    <div className="col-md-6 col-12">
                        <div className="">
                        <p>
                        Au sein de notre cabinet, nous basons le mode de calcul de nos <b>honoraires</b>  sur plusieurs critères. Nous ajustons le prix de nos prestations en fonction de la taille, la forme et le secteur d'activité de votre entreprise
                        </p>
                        <p>
                        Que ce soit en conseil juridique, formation, audit juridique, ou fiscalité des affaires, le coût de nos services est fixé selon la complexité, l’importance, l’urgence et la rapidité d’exécution du projet. 
                        </p>
                        <p>
                        Ainsi, nous mettons à votre disposition trois formules tarifaires :
                        </p>
                        <ul>
                            <li>
                               <span style={{color: '#0071BC', fontWeight: '700'}}> Le forfait :</span> ce type d’honoraire consiste à prédéfinir un montant fixe avant le démarrage de la mission. Dans certains cas, il est possible de prévoir des compléments d’honoraires selon l’avancement du projet ;  
                            </li>
                            <li>
                            <span style={{color: '#0071BC', fontWeight: '700'}}> Le temps passé :</span> cet honoraire est basé sur un taux horaire fixe. De ce fait, le budget du projet est défini en fonction du nombre d’heures travaillé par les équipes de notre cabinet ;
                            </li>
                            <li>
                            <span style={{color: '#0071BC', fontWeight: '700'}}>  Le contrat d’abonnement :</span> il permet de définir un honoraire forfaitaire sur une période déterminée (par exemple la domiciliation ou la gestion comptable).
                            </li>
                        </ul>
                        </div>
                        
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="imgContainer">
                            <img src={require('../images/[Downloader.la]-64fa0484efbca.jpg')} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container " style={{marginTop: '6rem', marginBottom: "14rem"}}>
                <div className="row">
                    {
                        isLoading? 
                        <div className="vh-100 d-flex align-items-center justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                        </div>
                        :
                        
                    <div className="">

                    {
                        data? 
                    
                        <div className="col-mg-6 col-12 mb-4 p-2 bg-success" style={{color: '#fff'}}>message envoyé avec succès </div>
                        :
                        ''
                        }
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 col-12 mb-4">
                                <input type='text' placeholder='nom' className='form-control'
                                name='name'
                                value={consultation?.name}
                                onChange={ChangeInput}
                                />
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <input type='text' placeholder='Adress e-mail' className='form-control'
                                name='email'
                                value={consultation?.email}
                                onChange={ChangeInput}
                                />
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <input type='text' placeholder='Numéro de téléphone' className='form-control'
                                name='phone'
                                value={consultation?.phone}
                                onChange={ChangeInput}
                                />
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <input type='text' placeholder='Sujet' className='form-control'
                                name='sujet'
                                value={consultation?.sujet}
                                onChange={ChangeInput}
                                />
                            </div>
                            <div className="col-12 mb-4">
                                <textarea placeholder='Votre message' className='form-control'style={{height: '9rem'}}
                                name='message'
                                value={consultation?.message}
                                onChange={ChangeInput}
                                />
                            </div>
                        </div>
                            <div className="col-12 text-center"><button className='btn' style={{backgroundColor: '#0071BC', color: '#ffff'}}>Envoyer</button></div>
                    </form>
                    </div>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default ContactezNous;