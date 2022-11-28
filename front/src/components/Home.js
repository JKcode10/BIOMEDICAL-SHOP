import React, { Fragment, useEffect } from "react";
import MetaData from "./layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import Rating from "./homeComponents/Rating";
import Pagination from "./homeComponents/pagination";

export const Home = () => {
  const { loading, productos, error } = useSelector((state) => state.products);
  const alert = useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts());
    alert.success("OK")
  }, [alert, dispatch, error])

  return (
    <Fragment>
      {loading ? (
        <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
      ) : (
        <Fragment>
          <MetaData>Lo mejor en tecnologia biomedica</MetaData>
          <div className="imagen-header bg-with-black">
            <div className="container">
              <div className="imagen-text">
                <h2> </h2>
              </div>
            </div>
          </div>
          <h1>Ultimos productos</h1>
          <div className="container">
            <div className="section">
              <div className="row"></div>

              <section id="productos" className="container mt-5">
                <div className="shopcontainer row">
                  {productos &&
                    productos.map((producto) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={producto._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${producto._id}`}>
                            <div className="shopBack">
                              <img
                                src={producto.imagen[0].url}
                                alt={producto.nombre}
                              />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${producto._id}`}>
                                {producto.nombre}
                              </Link>
                            </p>

                            <Rating
                              value={producto.calificacion}
                              text={`${producto.numCalificaciones} reviews`}
                            />
                            <h3>$ {producto.precio} COP</h3>
                            <Link to="/pr">
                              <button
                                type="button"
                                class="btn btn-outline-warning"
                                to=""
                              >
                                {" "}
                                Ver detalles{" "}
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}

                  {/* Pagination */}
                  <Pagination />
                </div>
              </section>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
export default Home;
