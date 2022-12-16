import React from 'react';
import Navbar from './Navbar';
import Audiencia from './Audiencia';
import Jurisprudencia from './Jurisprudencia';
import Formulario from './Formulario';
import Footer from './Footer';
import Comment from './Comment';


const Home = () => {
    return (
           <>
           <Navbar />
           <Audiencia />
           <Jurisprudencia />
           <Formulario />
           <Footer />
           <Comment />
           
           </> 

    )

}
export default Home;