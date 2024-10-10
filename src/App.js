import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import CourseView from '../src/views/courses/view';

function App() {
  const [preloader, setPreloader] = React.useState(true);
  React.useEffect(() => {
    window.addEventListener('load', () => setPreloader(false));
    /*const timeoutId = setTimeout(() => {
      setPreloader(false);
    }, 2000);*/
    return () => {
      //clearTimeout(timeoutId);
      window.removeEventListener('load', () => setPreloader(false))
    }
  }, []);
  return (
    <Router>
      <div>

        <div id="preloader-active" style={{ 'overflow': preloader ? 'visible' : '', 'display': preloader ? 'block' : 'none' }}>
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle"></div>
              <div className="preloader-img">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg shadow-sm dropstart">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link className="nav-link active li-nav-item" aria-current="page" to="/auth/login">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link li-nav-item" aria-current="page" to="/auth/login#1">Link</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link li-nav-item" aria-current="page" to="/auth/login#2">Categories</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link li-nav-item disabled" aria-current="page" to="/auth/login#2" aria-disabled="true">Disabled</Link>
                </li>

                <li className="button-header margin-left "><a href="#" className="btn">Join</a></li>
                <li className="button-header"><a href="login.html" className="btn btn3">Log in</a></li>
              </ul>
            </div>
          </div>
        </nav>


        <Routes>
          <Route exact path="/auth/login" element={<CourseView></CourseView>} />
          <Route path="*" element={<Navigate to={"/auth/login"} replace></Navigate>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
