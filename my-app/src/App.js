import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {DataProvider} from './DataContext';
import LoginForm from "./components/static/LoginForm"
import Home from "./components/pages/Home";
import MenuNav from "./components/Navigation/MenuNav";
import SignupForm from './components/static/SignupForm';
import PostInput from './components/pages/Posts/PostInput';
import ErrorPage from "./components/static/ErrorPage";
import Favorites from "./components/pages/Favorites";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostDetails from './components/pages/Posts/PostDetails';
import EditPost from './components/pages/Posts/EditPost';
import Contact from './components/static/Contact';
import About from './components/static/About';

function App() {
  return (
    <DataProvider>
      <Router>
        <MenuNav />
        <main>
          <Routes>
            <Route
              path="/" element={<Home/>}
            />
            <Route
              path="/login"
              element={<LoginForm />}
            />
            <Route
              path="/signup"
              element={<SignupForm/>}
            />
            <Route
              path="/posts"
              element={<PostInput/>}
            />
            <Route
              path="/favorites"
              element={<Favorites/>}
            />
            <Route
              exact path="/for_sale_items/:forSaleItemId"
              element={<PostDetails/>}
            />
            <Route
              exact path="/for_sale_items/:forSaleItemId/edit"
              element={<EditPost/>} 
            />
            <Route
              exact path="/contact"
              element={<Contact />} 
            />
            <Route
              exact path="/about"
              element={<About />} 
            />
            <Route 
              path="*"
              element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>
    </DataProvider>
  );
}

export default App;
