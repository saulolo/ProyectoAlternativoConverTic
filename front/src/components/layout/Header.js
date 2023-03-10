import React, { Fragment } from 'react'  //[127]
import "../../App.css"
import { Link } from "react-router-dom"
import { Search } from './Search'

//[128]
const Header = () => {
  return (
    <Fragment>  
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <Link to="/" ><img src="../images/logo.png" alt="ConvetTic Shop Logo"></img></Link>
                </div> 
            </div>    

            <div className='col-12 col-md-5 mt-2 mt-md-0'>
                {/*Aqui va buscar*/}
                <Search />

            </div>
            {/*Botón inicio sesión*/}
            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
            <Link to="/login" className='btn ml-4' id='login_btn'>Login</Link>
            
                <div className="ml-4 dropdown d-inline">
                    <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                    id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>Panel de Control</span></Link>
                        <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                            <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                            <Link className="dropdown-item" to="/">Pedidos</Link>
                            <Link className="dropdown-item" to="/">Mi cuenta</Link>
                            <Link className="dropdown-item" to="/">Cerrar Sesión</Link>
                        </div>
                </div>

                <Link to="/admin/listaProductos"> <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i>
                <span className="ml-1" id="cart_count">2</span></Link>
            </div>
        </nav>

    </Fragment>
  )
}

export default Header