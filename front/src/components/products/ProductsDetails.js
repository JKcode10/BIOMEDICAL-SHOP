import React, {Fragment, useEffect, useState} from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearErrors, getProductDetails } from '../../actions/productActions'
import MetaData from '../layout/MetaData'
import Header from '../layout/Header'
import Rating from '../homeComponents/Rating'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'


export const ProductsDetails = () => {
    const {loading,product,error}=useSelector(state => state.productDetails)
    const {id}=useParams();
    const alert = useAlert();
    const dispatch= useDispatch();
    const [quantity, setQuantity]=useState(1)

    useEffect(()=>{

        dispatch(getProductDetails(id)) 
        if (error){
            alert.error(error);
            dispatch(clearErrors())
        }
    },[dispatch, alert, error, id])

    const increaseQty = () => {
        const contador = document.querySelector('.count')
  
        if (contador.valueAsNumber>=product.inventario) return;
  
        const qty = contador.valueAsNumber+1;
        setQuantity(qty)
     }
  
     const decreaseQty = () => {
      const contador = document.querySelector('.count')
  
      if (contador.valueAsNumber <= 1) return;
  
      const qty = contador.valueAsNumber-1;
      setQuantity(qty)
   }

  return (
    <Fragment>
    {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
    <Fragment>
    <MetaData title="titulo del producto"></MetaData>
    <Header />
      <div className="container single-product">
        <div className="row">
          <div className="col-md-6">
          
            <div className="single-image">
              <Carousel pause='hover'>
              {product.imagen && product.imagen.map(img =>(
                  <Carousel.Item key={img.public_id}>
                    <img className="d-block w-100" src={"../"+img.url} alt={product.nombre}></img>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.nombre}</div>
              </div>

              <p>{product.descripcion}</p>

              <div className="product-count col-lg-7 ">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Precio</h6>
                  <span>${product.precio}</span>
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Estado</h6>
                  <p><span id="stock_stado" className={product.inventario>0 ? 'greenColor':'redColor'}>{product.inventario>0 ? "Disponible": "Agotado"}</span></p>
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Comentarios</h6>
                  <Rating
                    value={(product.calificacion/5)*100}
                    text={(product.numCalificaciones)}
                 
                  />
                   <span>Reviews</span>
                </div>  
                <div className="stockCounter d-inline">
                <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                <input type="number" className="form-control count d-inline" value={quantity} readOnly/>
                <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                
                </div>
                
                     <button className="round-black-btn"  disabled={product.inventario===0}>Añadir al carrito</button>
                     <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Comentarios</h6>
                  </div>
                  
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
    )}
    </Fragment>
  )
}
