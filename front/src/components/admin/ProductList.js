import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { getProducts } from '../actions/productActions' 
import { useAlert } from 'react-alert'
import Sidebar from './Sidebar'
import { MDBDataTable } from "mdbreact"

export const ProductList = () => {
    const { loading, products, error } = useSelector(state => state.products) 
    const alert = useAlert();
  
    const dispatch = useDispatch();
    useEffect(() => {
      if (error) {
        return alert.error(error)
      }
      dispatch(getProducts());
    }, [dispatch]);

    const setProducts=() =>{
        const data = {
            columns:[
                {
                    label: "Nombre",
                    field: "nombre",
                    sort: "asc"
                },
                {
                    label: "Precio",
                    field: "precio",
                    sort: "asc"
                },
                {
                    label:"Inventario",
                    field: "inventario",
                    sort: "asc"
                },
                {
                    label:"Vendedor",
                    field: "vendedor",
                    sort: "asc"
                },  
            ],
            row:[]
        }
        productos.forEach(producto => {
            data.rows.push({
                nombre: producto.nombre,
                precio:`$${producto.precio}`,
                invetario:producto.invetario,
                vendedor:producto.vendedor,
            })
        })
        return data;
    }

  return (
    <Fragment>
        <Metadata tittle={"Todos los productos"}></Metadata>
        <div className='row'>
            <div className='col-12 col-md-2'>
                <Sidebar />
            </div>

            <div className='col-12 col-md-10'>
                <Fragment>
                    <h1 className='my-5'>Productos Registrados</h1>
                    {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                        <MDBDataTable 
                        data={setProducts()}>
                            className="px-3"
                            bordered
                            striped
                            hover
                        </MDBDataTable>
                    )}

                </Fragment>
            </div>
        </div>

    </Fragment>

  )
}
