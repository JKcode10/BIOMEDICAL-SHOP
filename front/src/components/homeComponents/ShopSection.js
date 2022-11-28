import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import products from "../../data/Products";
import MetaData from "../layout/MetaData";
import { getProducts } from "../../actions/productActions";
import { useDispatch } from "react-redux";


const ShopSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  },[dispatch])
  return (
    <>
    <Fragment>
    <MetaData>Lo mejor en tecnologia biomedica</MetaData>
    
      <div className="imagen-header bg-with-black">
        <div className="container">
          <div className="imagen-text">
            <h2>Ultimos productos</h2>
          </div>
        </div>
        
      </div>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {products.map((product) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
                    key={product._id}
                  >
                    <div className="border-product">
                      <Link to={`/products/${product._id}`}>
                        <div className="shopBack">
                          <img src={product.image} alt={product.name} />
                        </div>
                      </Link>

                      <div className="shoptext">
                        <p>
                          <Link to={`/producto/${product._id}`}>
                            {product.name}
                          </Link>
                        </p>

                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                        />
                        <h3>$ {product.price} COP</h3>
                        <Link to="/pr">
                        <button type="button" class="btn btn-outline-warning" to="">Ver detalles</button>
                        </Link>
                        
                      </div>   
                    </div>
                  </div>
                ))}
                {/* Pagination */}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
   
    </>
  );
};

export default ShopSection;
