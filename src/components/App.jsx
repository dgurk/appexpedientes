import Navbar from "./Navbar";
import Header from "./Header";
import Jurisprudencia from "./Jurisprudencia";
import Home from "./Home";
import Formulario from "./Formulario";
import FormularioPadre from "./FormularioPadre";
import Audiencia from "./Audiencia";
import {Route, Routes} from 'react-router-dom';
import Footer from "./Footer";
import Comment from "./Comment";


function App () {
return (
<>
    <Navbar />
    <Header />
    <Routes>
        <Route path ='/Home' element = {<Home/>} />
        <Route path ='/FormularioPadre' element = {<FormularioPadre/>}/>
        <Route path ='/Formulario' element = {<Formulario/>} />
        <Route path ='/Jurisprudencia' element = {<Jurisprudencia/>} />
        <Route path ='/Audiencia' element = {<Audiencia/>} />
        <Route path ='/Comment' element = {<Comment/>} />
        <Route path ='/Header' element = {<Header/>} />

    </Routes>
    <Footer />    

</>

)

}
export default App;