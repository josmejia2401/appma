import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import CourseView from '../src/views/courses/view';

function App() {
  const [preloader, setPreloader] = React.useState(true);
  React.useEffect(() => {
    window.addEventListener('load', () => setPreloader(false));

    const navbarTogglerIcon = document.getElementById("navbar-toggler-icon");
    navbarTogglerIcon.addEventListener("click", function (event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
        const navbarNavDropdown = document.getElementById("navbarNavDropdown");
        console.log("TODO", navbarNavDropdown);
        navbarNavDropdown.classList.toggle("show");
      }

    });


    /*const timeoutId = setTimeout(() => {
      setPreloader(false);
    }, 2000);*/
    return () => {
      //clearTimeout(timeoutId);
      window.removeEventListener('load', () => setPreloader(false))
    }
  }, [document]);
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
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span id="navbar-toggler-icon" className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/auth/login">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/auth/login">Features</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/auth/login">Pricing</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/auth/login">Dropdown link</Link>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
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


        <Routes>
          <Route exact path="/auth/login" element={<CourseView></CourseView>} />
          <Route path="*" element={<Navigate to={"/auth/login"} replace></Navigate>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
