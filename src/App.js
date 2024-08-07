
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Mainlayout from './components/Mainlayout';
import Dashboard from './pages/Dashboard';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import Blogcatlist from './pages/Blogcatlist';
import Orders from './pages/Order';
import Customers from './pages/Customers';
import Colorlist from './pages/Colorlist';
import Categorylist from './pages/Categorylist';
import Brandlist from './pages/Brandlist';
import Productlist from './pages/Productlist';
import AddBlog from './pages/AddBlog';
import Addblogcat from './pages/Addblogcat';
import AddColor from './pages/AddColor';
import Addcat from './pages/Addcat';
import Addbrand from './pages/Addbrand';
import Addproduct from './pages/Addproduct';

function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/reset-password' element={ <Resetpassword /> } />
        <Route path='/forgot-password' element={ <Forgotpassword /> } />
        <Route path='/admin' element={ <Mainlayout /> } >
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='blog-list' element={<Bloglist />} />
          <Route path='blog' element={<AddBlog />} />
          <Route path='blog-category-list' element={<Blogcatlist />} />
          <Route path='blog-category' element={<Addblogcat />} />
          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} />
          <Route path='color-list' element={<Colorlist />} />
          <Route path='color' element={<AddColor />} />
          <Route path='category-list' element={<Categorylist />} />
          <Route path='category' element={<Addcat />} />
          <Route path='list-brand' element={<Brandlist />} />
          <Route path='brand' element={<Addbrand />} />
          <Route path='product-list' element={<Productlist />} />
          <Route path='product' element={<Addproduct />} />
        </Route>
      </Routes>
   </Router>
  );
}

export default App;
