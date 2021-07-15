import React, { useState } from 'react';
import './styles/Card.css';
import ShowImage from './ShowImage';
import { Link } from 'react-router-dom';

const CardLaptop = ({ laptop }) => {
    const [count, setCount] = useState(laptop.count);

    return (
        <div className="card m-10 card-cont">
            <div>
                <ShowImage className="img" item={laptop} url="laptop" />
                <h2 className="product_name">{laptop.name}</h2><hr />
                <h6>${laptop.price} pesos</h6>
                <p>{laptop.description}</p>
                <div class="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <p>{laptop.status}</p>
                <Link to={`/laptop/${laptop._id}`}>
                    <button className="btn btn-info add"><i class="fas fa-info"/></button>
                    <button className="btn btn-secondary info"><i class="fas fa-shopping-cart" /></button>
                </Link>
            </div>
        </div>
    )
}

export default CardLaptop;