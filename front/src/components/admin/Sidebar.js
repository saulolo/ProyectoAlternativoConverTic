import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
        <nav id="sidebar">
            <ul className="list-unstyled components">
                <li>
                    <Link to="/admin/Dashboard"><i className="fa fa-tachometer"> Administración</i></Link>
                </li>

                {/*Botones de Productos*/}
                <li>
                    <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                    className="fa fa-product-hunt"></i> Productos</a>
                    <ul className="collapse list-unstyled" id="productSubmenu">
                        <li>
                            <Link to="/admin/listaProductos"><i className="fa fa-clipboard"></i> Lista de Productos</Link>
                        </li>
                        <li>
                            <Link to="/"><i className="fa fa-plus"></i> Crear Producto</Link>
                        </li>
                    </ul>
                </li>

                {/*Botones de Pedidos*/}
                <li>
                    <Link to="/"><i className="fa fa-shopping-basket"></i> Pedidos</Link>
                </li>

                {/*Botones de Usuarios*/}
                <li>
                    <Link to="/"><i className="fa fa-users"></i> Usuarios</Link>
                </li>

                {/*Botones de Opiniones*/}
                <li>
                    <Link to="/"><i className="fa fa-star"></i> Reviews</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar
