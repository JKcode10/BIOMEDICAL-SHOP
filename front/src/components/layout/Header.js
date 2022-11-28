import React, { Fragment } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
   <div>
      {/* Header */}
      <div className="Announcement">
        <div className="container">
          <div className="pc-header">
            <div className="row">
              <div className="col-md-4 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <div className="Logo">
                  <img alt="logo" src="/images/Instruhealth.jpg" />
                  </div>
                </Link>
              </div>
              <div className="col-md-5 col-8 d-flex align-items-center">
                <form className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Que producto esta buscando?"
                  />
                  <button type="submit" className="search-button">
                      Buscar
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Bienvenido, Adimin
                  </button>
                  <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                            <Link className="dropdown-item" to="/">Pedidos</Link>
                            <Link className="dropdown-item" to="/">Mi cuenta</Link>
                            <Link className="dropdown-item" to="/">Cerrar Sesion</Link>
                  </div>
                </div>

                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">2</span>
                </Link>

                <Link to="/Login">
                <i class="fa fa-user" aria-hidden="true"></i>
                </Link>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Header;
