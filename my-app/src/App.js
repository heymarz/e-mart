import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from "./components/static/LoginForm"
import Home from "./components/pages/Home"

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="login"
            element={<LoginForm />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
