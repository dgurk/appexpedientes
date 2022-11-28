import Navbar from "./components/Navbar";
import Jurisprudencia from "./components/Jurisprudencia";
import Home from "./components/Home";
import Formulario from "./components/Formulario";
import FormularioPadre from "./components/FormularioPadre";
import Audiencias from "./components/Audiencias";
import {Route, Routes} from 'react-router-dom';
import Footer from "./components/Footer";
import Comment from "./components/Comment";


function App () {
return (
<>
    <Navbar />
    <Routes>
        <Route path ='/Home' element = {<Home/>} />
        <Route path ='/FormualrioPadre' element = {<FormularioPadre/>}/>
        <Route path ='/Formulario' element = {<Formulario/>} />
        <Route path ='/Jurisprudencia' element = {<Jurisprudencia/>} />
        <Route path ='/Audiencias' element = {<Audiencias/>} />
        <Route path ='/Comment' element = {<Comment/>} />
    </Routes>
    <Footer/>    

</>

)

}
export default App;