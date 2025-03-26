
import { Routes, Route } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from './pages/ContactPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HomeAfterLogin from './pages/HomeAfterLogin';
import PreOrderProducts from './pages/PreorderPage';
import InstockPage from './pages/InstockPage';
import ItemDetail from './components/ItemDetail';
import ItemList from './components/ItemList';
import ItemManagement from './pages/ItemManagementPage';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/homee" element={<HomeAfterLogin />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/preord" element={<PreOrderProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/instock" element={<InstockPage/>} />
          <Route path="/keyboard_list" element={<ItemList/>} />
          <Route path="/keyboard:id" element={<ItemDetail/>} />
          <Route path="/item_management" element={<ItemManagement/>} />
      </Routes>
    </div>

  );
}

export default App;
