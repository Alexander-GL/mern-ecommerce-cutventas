import React, { useState } from 'react';
import './styles/Card.css';
import ShowImage from './ShowImage';
import { Link } from 'react-router-dom';

const CardElectronic = ({ electronic }) => {
    const [count, setCount] = useState(electronic.count);

    return (
        <div className="card m-10 card-cont">
            <div>
                <ShowImage className="img" item={electronic} url="electronic" />
                <h2 className="product_name">{electronic.name}</h2><hr />
                <h6>${electronic.price} pesos</h6>
                <p>{electronic.description}</p>
                <div class="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <p>{electronic.status}</p>
                <Link to={`/electronic/${electronic._id}`}>
                    <button className="btn btn-info add"><i class="fas fa-info"/></button>
                    <button className="btn btn-secondary info"><i class="fas fa-shopping-cart" /></button>
                </Link>
            </div>
        </div>
    )
}

export default CardElectronic;