import React, { useState } from 'react';
import { Table } from 'reactstrap';
import './styles/Card.css';
import ShowImage from './ShowImage';
import { Link } from 'react-router-dom';

const TableProducts = ({ food }) => {
    const [count, setCount] = useState(food.count);

    return (   
        <div className="card m-10 card-cont">
            <div>
                <Table hover>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre del producto</th>
                    <th>Estado</th>
                    <th>Cantidad</th>
                    <th>Detalles</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th>Editar/Eliminar</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">{food._id}</th>
                    <td><h2 className="product_name">{food.name}</h2><hr /></td>
                    <td><p>{food.status}</p></td>
                    <td><p>{food.quantity}</p></td>
                    <td><p>{food.description}</p></td>
                    <td><p>${food.price} pesos</p></td>
                    <td><p>{food.category}</p></td>
                    <td>
                        <button className='btn btn-outline-warning m-1' href="/">Editar</button>
                        <button className='btn btn-outline-danger m-1' href="/">Eliminar</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td><p>{food.description}</p></td>
                    <td><p>${food.price} pesos</p></td>
                    <td><p>{food.category}</p></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
                </Table>
            </div>
        </div>
    )
}

export default TableProducts;