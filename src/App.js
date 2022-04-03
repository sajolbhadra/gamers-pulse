import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Notfound from './Pages/NotFound/Notfound';
import Navigation from './Pages/Navigation/Navigation';
import Dashboard from './Pages/Dashboard/Dashboard';
import Reviews from './Pages/Reviews/Reviews';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews/>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
