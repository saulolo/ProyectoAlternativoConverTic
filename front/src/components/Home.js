import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux' //[168]
import { getProducts } from '../actions/productActions' //[169]
import { useParams, Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import Pagination from 'react-js-pagination'
import Slider from "rc-slider"
import 'rc-slider/assets/index.css'



export const Home = () => {
  const params = useParams();
  const keyword = params.keyword;
  const [precio, setPrecio] = useState([1000, 1000000])
  const [currentPage, setCurrentPage] = useState(1)
  const { loading, products, error, resPerPage, productsCount } = useSelector(state => state.products) //[171]
  const alert = useAlert();
  

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    dispatch(getProducts(currentPage, keyword, precio));
  }, [dispatch, alert, error, currentPage, keyword, precio])

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber)
  }

  return (
    <Fragment>
      {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
        <Fragment>
          <MetaData title="Lo mejor de la moda a tu medida"></MetaData>
          <br/>
          <br/>
          <h1 id="encabezado_productos">Ultimos Productos</h1>
          <h4>Únase a nuestra misión de interrumpir la cadena de la moda con prendas significativas hechas a mano, que aportan un espíritu de elegancia y coraje a la vida cotidiana.</h4>
 
          <section id="productos" className='container mt-5'>
            <div className='row'>
              <Slider
              range
              className='t-slider'
              marks={{
                1000: `$1000`,
                1000000: `$1000000`
              }}
              min={1000}
              max={1000000}
              defaultValue={[1000, 1000000]}
              tipFormatter={value => `$${value}`}
              tipProps={{
                placement: 'top',
                prefixCls: 'rc-slider-tooltip',
                visible: true
              }}
              value={precio}
              onChange={precio => setPrecio(precio)}
              ></Slider>
              <br/>
              <br/>

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

          <div className='d-flex justify-content-center mt-5'>

            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText={'Siguiente'}
              prevPageText={'Anterior'}
              firstPageText={'Primera'}
              lastPageText={'Ultima'}
              itemClass='page-item'
              linkClass='page-link'
            />
          </div>

          <br/>
          <br/>
          <hr/>

          <section class="principal">
                <h2 class="titulo-principal">Sobre ConverTic Shop</h2> 

                <img class="convertic" src="images/LogoConverTIC.png" alt="Logo ConverTic"></img>

                 <p>Somos uno de los lideres en la industria de la moda que hace que las últimas tendencias sean accesibles para todos mientras inspira confianza y un estilo único. Con un enfoque renovado en la experiencia del cliente, la marca ofrece diseños de alto estilo, conceptos básicos de moda con valores convincentes y un ambiente de tienda dinámico. Mientras impulsa la innovación en el comercio electrónico y digital para expandir el acceso y la conveniencia, <strong> ConverTic Shop</strong> continúa fortaleciendo su posicionamiento como el destino preferido de hoy para el consumidor de moda.</p>
            </section>

            <section class="fondoMisionVision">
                <p id="misionVision"><em>Nuestra misión es:<strong>"Ofrecer a nuestros clientes que gustan del buen vestir, ropa de la más alta calidad al mejor precio del mercado, siempre tratando de tener modelaje que este al corriente con lo último de la moda, para que así pueda desarrolar sus actividad cotidianas luciendo su belleza y resaltando su elegancia.".</strong> </em> </p> 
            
                <p id="misionVision"><em>Nuestra visión es:<strong>"Posicionarnos en el mercado como una empresa exitosa y socialmente responsable con gran reconocimiento a nivel nacional gracias a nuestros productos, calidad, precios y servicio, siempre respetando los derechos y el trabajo tanto de nuestros colaboradores como de nuestros clientes, para asi seguir creciendo y poder ofrecer nuestros productos en todo el interior del país.".</strong> </em> </p> 
            </section>

            <section class="mapa">
            <h3 class="titulo-principal" >Nuestra Ubicación</h3>
            <p>Nuestro establecimiento se encuentra ubicado en el corazón de la ciudad de Medellín</p>

            <div className='mapaContenido'>
              <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.233642064373!2d-75.60723688541115!3d6.2329007954881845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442947e427cce1%3A0x458e4102db638c00!2sI.A.S.%20Ingenier%C3%ADa%2C%20Aplicaciones%20y%20Software!5e0!3m2!1ses!2sco!4v1673997960308!5m2!1ses!2sco' title='mapa de ubicacion de ConverTic Shop' width='100%' height='300' allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
            </div>
        </section>

        <section class="diferenciales">
          <h3 class="titulo-principal">Diferenciales</h3>
          <div class="contenido-diferenciales">
              <ul class="lista-diferenciales">
                  <li class="items">Atención personalizada con profesionales calificados.</li>
                  <li class="items">Puedes elegir el tipo de tela, la calidad y el color.</li>
                  <li class="items">Nos acomodamos a tu presupuesto y tus preferencias.</li>
                  <li class="items">Tu prenda será unica diseñada especialmente para ti.</li>
              </ul>
              <img class='imagen-diferenciales' alt='Imagen de diferencial' src="images/elegancia.png"></img>
          </div>

          <br/>
          <br/>

          <div class="video">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/z4S6FA-o0pg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

         </section>
         
        </Fragment>
      )}
    </Fragment>

    
  )
}

export default Home
