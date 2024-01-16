import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";
import Error from "./components/Error";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";

function App() {
  const user = false;
  return (
   <div> 
      <Navbar />
      <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='posts' element={<Home />} />
          <Route path='register' element={user ? <Home /> : <Register /> } />
          <Route path='login' element={user ? <Home /> : <Login />} />
          <Route path='post/:id' element={<Single />} />
          <Route path='write' element={user ? <Write /> : <Login />} />
          <Route path='settings' element={user ? <Settings /> : <Login />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error/>} />
      </Routes>
      <Footer />
   </div>
  
  );
}

export default App;
