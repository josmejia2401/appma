import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import CourseView from '../src/views/courses/view';

function App(props) {
  const [preloader, setPreloader] = React.useState(true);
  const [currentPathName, setCurrentPathName] = React.useState(null);

  const handleClickOpenNav = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
      const navbarNavDropdown = document.getElementById("navbarResponsive");
      navbarNavDropdown.classList.toggle("show");
    }
  }
  React.useEffect(() => {
    setCurrentPathName(window.location.pathname);
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

        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
          <div className="container px-5">
            <Link className="navbar-brand fw-bold">AppMa</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
              onClick={handleClickOpenNav}>
              Menú
              <i className="fa-solid fa-bars ms-2"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                <li className="nav-item"><Link className="nav-link me-lg-3" to={"#features"}>Features</Link></li>
                <li className="nav-item"><Link className="nav-link me-lg-3" to={"#download"}>Download</Link></li>
              </ul>
              <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                <span className="d-flex align-items-center">
                  <i className="fa-solid fa-door-closed me-2"></i>
                  <span className="small">Iniciar sesión</span>
                </span>
              </button>
            </div>
          </div>
        </nav>

        <main>
          <Inner {...props} />
        </main>
      </div>
    </Router>
  );
}


function Inner(props) {
  return (
    <Routes location={useLocation()} {...props}>
      <Route exact path="/auth/login" element={<CourseView {...props} location={useLocation()}></CourseView>} />
      <Route path="*" element={<Navigate to={"/auth/login"} replace></Navigate>} />
    </Routes>
  )
}

export default App;
