
import './App.css';
import {BrowserRouter, Route ,Routes} from "react-router-dom";
import {Home} from './components/Home';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {About} from './components/About';
import {Contact} from './components/Contact';




function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
