import React, { Fragment } from "react";
import Header from "../layout/Header";
import Rating from "../homeComponents/Rating";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";

export const SingleProduct = () => {

  return (
    <>
    <Fragment>
    <MetaData title="titulo del producto"></MetaData>
    <Header />
      <div className="container single-product">
        <div className="row">
          <div className="col-md-6">
          
            <div className="single-image">
              <img src="../images/" alt="{product.name}" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">producto</div>
              </div>
              <p>descripcion</p>

              <div className="product-count col-lg-7 ">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Precio</h6>
                  <span>$24343555</span>
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Estado</h6>
                  {2 > 0 ? (
                    <span>Disponible</span>
                  ) : (
                    <span>No Disponible</span>
                  )}
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Comentarios</h6>
                  <Rating
                    value={5}
                    text="56"
                  />
                </div>  
                {5> 0 ? (
                  <>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Cantidad</h6>
                      
                    </div>
                    <button className="round-black-btn">Añadir al carrito</button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* RATING */}
        <div className="row my-5">
          <div className="col-md-6">
            <h6 className="mb-3">Comentarios</h6>
            <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
              <strong>Usurio</strong>
              <Rating />
              <span>Jan 12 2021</span>
              <div className="alert alert-info mt-3">
                Excelente producto
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6>Escriba un comentario sobre el producto</h6>
            <div className="my-4"></div>

            <form>
              <div className="my-4">
                <strong>Calificación</strong>
                <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                  <option value="">Seleccione...</option>
                  <option value="1">1 - Malo</option>
                  <option value="2">2 - Regular</option>
                  <option value="3">3 - Bueno</option>
                  <option value="4">4 - muy bueno</option>
                  <option value="5">5 - Excelente</option>
                </select>
              </div>
              <div className="my-4">
                <strong>Comentarios</strong>
                <textarea
                  row="3"
                  className="col-12 bg-light p-3 mt-2 border-0 rounded"
                ></textarea>
              </div>
              <div className="my-3">
                <button className="col-12 bg-black border-0 p-3 rounded text-white">
                  Enviar
                </button>
              </div>
            </form>
            <div className="my-3">
                Por favor{" "}
                <Link to="/login">
                  " <strong>Ingresar</strong> "
                </Link>{" "}
                para agregar una reseña del producto {" "}
            </div>
          </div>
        </div>
      </div>



    </Fragment>
     
    </>
  );
};

export default SingleProduct;
