import React, { useState } from 'react';
import './styles/Card.css';
import ShowImage from './ShowImage';
import { Link } from 'react-router-dom';

const CardFit = ({ fit }) => {
    const [count, setCount] = useState(fit.count);

    return (
        <div className="card m-10 card-cont">
            <div>
                <ShowImage className="img" item={fit} url="fit" />
                <h2 className="product_name">{fit.name}</h2><hr />
                <h6>${fit.price} pesos</h6>
                <p>{fit.description}</p>
                <div class="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <p>{fit.status}</p>
                <Link to={`/fit/${fit._id}`}>
                    <button className="btn btn-info add"><i class="fas fa-info"/></button>
                    <button className="btn btn-secondary info"><i class="fas fa-shopping-cart" /></button>
                </Link>
            </div>
        </div>
    )
}

export default CardFit;