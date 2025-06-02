import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home'
// import About from './about'
import Blog from './blog'
import Contact from './contact'
import Header from './header'
import Footer from './footer'
import Education from './Education';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='about' element={<About />} /> */}
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
          <Route path='Education' element={<Education />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
