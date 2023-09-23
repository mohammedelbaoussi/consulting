import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../pages/Root";
import BlogDetails from "../pages/BlogDetails";
import Blogs from "../pages/Blogs";
import AProposDeNous from "../pages/AProposDeNous";
import ContactezNous from "../pages/ContactezNous";
import FAQ from "../pages/FAQ";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AdminDashboard from "../Admin Dashboard/pages/AdminDashboard/AdminDashboard";
// import Blogs from "../Admin Dashboard/pages/Blogs/Blogs";
// import Blogs from '../Admin Dashboard/pages/Blogs/Blogs'
import BlogsTest from '../Admin Dashboard/pages/Blogs/Blogs'
import Users from "../Admin Dashboard/pages/Users/Users";
import Dashboard from "../Admin Dashboard/pages/Dashboard/Dashboard";
import Consultations from "../Admin Dashboard/pages/Consultations/Consultations";
import AddBlogs from "../Admin Dashboard/pages/AddBlogs/AddBlogs";
import UpdateBlog from "../Admin Dashboard/pages/UpdateBlog/UpdateBlog";
import Categories from "../Admin Dashboard/pages/Caregories/Categories";
import NotFound from "../pages/NotFound";
import CreateCategory from "../Admin Dashboard/components/Categories/CreateCategory";
import UpdateCategory from "../Admin Dashboard/components/Categories/UpdateCategory";
import User from "../Admin Dashboard/pages/Users/User";
import ConsultationDetails from "../Admin Dashboard/pages/Consultations/ConsultationDetails";
import DroitCommericial from "../components/ServiceDetails/DroitCommericial";
import DroitCivil from "../components/ServiceDetails/DroitCivil";
import DroitDesSocietes from "../components/ServiceDetails/DroitDesSocietes";
import DroitPenal from "../components/ServiceDetails/DroitPenal";
import DroitDeLaConcurrence from "../components/ServiceDetails/DroitDeLaConcurrence";
import DroitDuTravail from "../components/ServiceDetails/DroitDuTravail";
import DroitImmobilier from "../components/ServiceDetails/DroitImmobilier";
import DroitPublicDesAffaires from "../components/ServiceDetails/DroitPublicDesAffaires";
import DroitFiscal from "../components/ServiceDetails/DroitFriscal";
import DroitDesAssurances from "../components/ServiceDetails/DroitDesAssurances";
import AuditJuridique from "../components/ServiceDetails/AuditJuridique";
import PropIntellIndus from "../components/ServiceDetails/PropIntellcIndus";
import DataPivacy from "../components/ServiceDetails/DataPivacy";
import ServicesDesRecouveremnt from "../pages/ServicesDeRecouvrement";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <NotFound/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/blogs/:id',
                element: <BlogDetails/>
            },
            {
                path:'/blogs',
                element: <Blogs/>
            },
            {
                path: '/apropos',
                element: <AProposDeNous/>
            },
            {
                path: '/contactez-nous',
                element: <ContactezNous/>
            },
            {
                path: '/faq',
                element: <FAQ/>
            },
            {
                path: '/services-de-recouverement',
                element: <ServicesDesRecouveremnt/>
            },
            {
                path: '/',
                element: <Services/>,
                children:[
                            {
                                path: '/droit-commercial',
                                element: <DroitCommericial/>
                            },
                            {
                                path: '/droit-civil',
                                element: <DroitCivil/>
                            },
                            {
                                path: '/droit-des-sociétés',
                                element: <DroitDesSocietes/>
                            },
                            {
                                path: '/droit-pénal-des-affaires',
                                element: <DroitPenal/>
                            },
                            {
                                path: '/droit-de-la-concurrence',
                                element: <DroitDeLaConcurrence/>
                            },
                            {
                                path: '/droit-du-travail',
                                element: <DroitDuTravail/>
                            },
                            {
                                path: '/droit-immobilier',
                                element: <DroitImmobilier/>
                            },
                            {
                                path: '/Droit-Public-des-affaires-au-Maroc',
                                element: <DroitPublicDesAffaires/>
                            },
                            {
                                path: '/droit-fiscal',
                                element: <DroitFiscal/>
                            },
                            {
                                path: '/droit-des-assurances',
                                element: <DroitDesAssurances/>
                            },
                            {
                                path:'/audit-juridique',
                                element: <AuditJuridique/>
                            },
                            {
                                path: '/PROPRIÉTÉ-INTELLECTUELLE-et-industrielle',
                                element: <PropIntellIndus/>
                            },
                            {
                                path: '/data-pivacy',
                                element: <DataPivacy/>
                            }

                ]
                
            },
            
            {
                path:'/service',
                element: <ServiceDetails/>
            },
            {
                path:"/s'inscrire",
                element: <Register/>
            },
            {
                path: '/seconnecter',
                element: <Login/>
            },
            
        ] ,
    },
    {
        path: '/tableaudebord',
        element: <AdminDashboard/>,
        children: [
            {
                path: '/tableaudebord',
                element: <Dashboard/>
            },
            {
                path: '/tableaudebord/blogs',
                element: <BlogsTest/>
            },
            {
                path: '/tableaudebord/addblogs',
                element: <AddBlogs/>
            },
            {
                path: '/tableaudebord/consultations',
                element: <Consultations/>
            },
            {
                path: '/tableaudebord/consultation/:id',
                element: <ConsultationDetails/>
            },
            {
                path: '/tableaudebord/utilisateurs',
                element: <Users/>
            },
            {
                path: '/tableaudebord/utilisateur/:id',
                element: <User/>
            },
 
            {
                path: '/tableaudebord/blog/update/:id',
                element: <UpdateBlog/>
            },
            {
                path: '/tableaudebord/categories',
                element: <Categories/>
            },
            {
                path: '/tableaudebord/category/create',
                element: <CreateCategory/>
            },
            {
                path: '/tableaudebord/category/update/:id',
                element: <UpdateCategory/>
            },
            
        ]
    }




    
    
]);

export default router;

