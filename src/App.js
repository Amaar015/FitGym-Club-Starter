import './App.css';
import Hero from './Component/Hero/Hero';
import Program from './Component/Program/program';
import Reason from './Component/Reasons/resons';
import Price from './Component/Price/price';
import Testnomial from './Component/Testnomials/Testnomial';
import Join from './Component/Join/Join';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
    
    <Hero/>
    <Program/>
    <Reason/>
    <Price/>
    <Testnomial/>
    <Join/>
    <Footer/>
    </div>
  );
}

export default App;
