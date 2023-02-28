import React, { Fragment, useEffect } from "react";
import MetaData from "./layout/MetaData";
import {useDispatch} from 'react-redux';  //[168]
import { getProducts } from "../actions/productActions"; //[169]

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  
  return (
    <Fragment>
        <MetaData title="Lo mejor de la moda a tu medida"></MetaData>
      <h1 id="encabezado_productos">Ultimos Productos</h1>
      <section id="productos" className="container mt-5">
        <div className="row">
            {/*Producto 1*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/buso1.png"
                alt="Imagen de Buso"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000/"> Buso Hoodie Negro Para Hombre</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$ 119.990</p>
                <a
                  href="http://localhost:3000/"
                  id="view_btn"
                  className="btn btn-block">Ver detalle
                </a>
              </div>
            </div>
          </div>

             {/*Producto 2*/}
             <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/camisa1.png"
                alt="Imagen de Camisa"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000/"> Camisa Manga Corta para Hombre</a>
                </h5>
                <div className='rating mt-auto'>
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 2 reviews</span>
                </div>
                <p className="card-text">$ 61.990</p>
                <a
                  href="http://localhost:3000/"
                  id="view_btn"
                  className="btn btn-block">Ver detalle
                </a>
              </div>
            </div>
          </div>

           {/*Producto 3*/}
           <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/vestido1.png"
                alt="Imagen de Vestido"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000/"> Vestido Rosa Cuello Tortuga Para Mujer</a>
                </h5>
                <div className='rating mt-auto'>
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 12 reviews</span>
                </div>
                <p className="card-text">$ 39.990</p>
                <a
                  href="http://localhost:3000/"
                  id="view_btn"
                  className="btn btn-block">Ver detalle
                </a>
              </div>
            </div>
          </div>

            {/*Producto 4*/}
            <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/botas1.png"
                alt="Imagen de Botas"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000/"> Botas Formales En Cuero Para Hombre</a>
                </h5>
                <div className='rating mt-auto'>
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 7 reviews</span>
                </div>
                <p className="card-text">$ 269.990</p>
                <a
                  href="http://localhost:3000/"
                  id="view_btn"
                  className="btn btn-block">Ver detalle
                </a>
              </div>
            </div>
          </div>
          

        </div>
      </section>
    </Fragment>
  );
};

export default Home;
