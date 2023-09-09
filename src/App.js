import Navbar from "./Bars/Navbar";
import Footbar from "./Bars/Footbar";
import Faq from './Pages/Faq';
import FinanceOptions from './Pages/FinanceOptions';
import HomePage from './Pages/HomePage';
import Howitworks from './Pages/Howitworks';
import Products from './Pages/Products';
import Portal from "./Pages/Portal";
import { useSelector } from "react-redux";




function App() {
    const showPortal = useSelector((state)=>{
        return state.portal;
    })
    return (
        <div> {showPortal && (<div className="overlay"><Portal /> </div>)}
            <div id="nav" className=" w-full top-0 z-50 " > <Navbar /> </div>
            <div id="home" className="" > <HomePage /> </div>
            <div id="howitworks" className="mx-auto"> <Howitworks /> </div>
            <div id="foptions"> <FinanceOptions /> </div>
            
            <div id="faq"> <Faq /> </div>
            
            <div id="products"><Products /></div>
            <div><Footbar/></div>
          
        
            
        </div>
    )
}

export default App;