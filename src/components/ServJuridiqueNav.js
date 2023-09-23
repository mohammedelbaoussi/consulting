import { NavLink } from "react-router-dom";

const ServJuridiqueNav = () => {
    return ( 
        <div className="col-3">
            <div className="headNav">
                <ul>
                    <li>
                        <NavLink className='link' to='/droit-commercial'>
                            DROIT COMMERCIAL
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/droit-civil">
                            DROIT CIVIL
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/droit-pénal-des-affaires">
                            Droit pénal des affaires
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/droit-du-travail">
                            DROIT DE TRAVAIL
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/droit-fiscal">
                            DROIT FISCAL
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/droit-immobilier">
                            DROIT IMMOBILIER
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/droit-des-assurances">
                            DROIT DES ASSURANCES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/droit-des-sociétés">
                            DROIT DES sociétés
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/droit-de-la-concurrence">
                            DROIT DE LA CONCURRENCE
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Droit-Public-des-affaires-au-Maroc">
                            Droit Public des affaires au Maroc
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/PROPRIÉTÉ-INTELLECTUELLE-et-industrielle">
                            PROPRIÉTÉ INTELLECTUELLE et industrielle
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/audit-juridique">
                            Audit Juridique ( Due Diligence)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/data-pivacy'>
                            DATA PIVACY « MISE EN CONFORMITÉ CNDP »
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default ServJuridiqueNav;