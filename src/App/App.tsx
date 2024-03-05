import './App.css';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Exchanger from '../Exchanger/Exchanger';
import History from '../History/History';
import ExchangeBlock from './ExchangeBlock';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path="exchanger" element={<ExchangeBlock/>} /> 
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
