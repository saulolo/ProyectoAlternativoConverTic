import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux' //[168]
import { getProducts } from '../actions/productActions' //[169]
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

export const Home = () => {
  const { loading, products, error } = useSelector(state => state.products) //[171]
  const alert = useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
        <Fragment>
          <MetaData title="Lo mejor de la moda a tu medida"></MetaData>
          <h1 id="encabezado_productos">Ultimos Productos</h1>
          <section id="productos" className='container mt-5'>
            <div className='row'>
              {/*Ingreso de producto*/}
              {products && products.map(producto => (  //[172]
                  <div key={producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3'>{/*[173]*/}
                    <div className='card p-3 rounded'>
                      <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img>
                      {/*[174] Estableco la url del producto a guardar*/}
                      <div className='card-body d-flex flex-column'>
                        <h5 id="titulo_producto"><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
                        <div className='rating mt-auto'>
                          <div className='rating-outer'>
                            <div className='rating-inner' style={{ width: `${(producto.calificacion / 5) * 100}%` }}></div>
                          </div>
                          <span id="No_de_opiniones"> {producto.numCalificaciones} Reviews</span>
                        </div>
                        <p className='card-text'>${producto.precio}</p><Link to={`/producto/${producto._id}`} id="view_btn" className='btn btn-block'>
                          Ver detalle
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home
