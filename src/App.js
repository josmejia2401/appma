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
      const navbarNavDropdown = document.getElementById("navbarNavDropdown");
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


        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">AppMa</Link>
            <button className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleClickOpenNav}>
              <span id="navbar-toggler-icon" className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className={`${currentPathName === '/auth/login' ? 'active' : ''} nav-link`} aria-current="page" to="/auth/login">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className={`${currentPathName === '/courses/view' ? 'active' : ''} nav-link`} aria-current="page" to="/courses/view">Cursos</Link>
                </li>
                <li className="nav-item">
                  <Link className={`${currentPathName === '/about/view' ? 'active' : ''} nav-link`} aria-current="page" to="/about/view">Acerca de</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className={`${currentPathName === '/about/view' ? 'active' : ''} nav-link dropdown-toggle`} role="button" data-bs-toggle="dropdown"
                    aria-expanded="false" to="/blogs/view">Blogs</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/auth/login">Action</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/auth/login">Action2</Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className={`${currentPathName === '/contact/view' ? 'active' : ''} nav-link`} aria-current="page" to="/contact/view">Contáctanos</Link>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-lg button-primary">Iniciar sesión</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-lg button-secondary">Unirme</button>
                </li>
              </ul>
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
