import React, { useState } from 'react';
import './styles/Card.css';
import ShowImage from './ShowImage';
import { Link } from 'react-router-dom';

const CardSmartphone = ({ smartphone }) => {
    const [count, setCount] = useState(smartphone.count);

    return (
        <div className="card m-10 card-cont">
            <div>
                <ShowImage className="img" item={smartphone} url="smartphone" />
                <h2 className="product_name">{smartphone.name}</h2><hr />
                <h6>${smartphone.price} pesos</h6>
                <p>{smartphone.description}</p>
                <div class="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <p>{smartphone.status}</p>
                <Link to={`/smartphone/${smartphone._id}`}>
                    <button className="btn btn-info add"><i class="fas fa-info"/></button>
                    <button className="btn btn-secondary info"><i class="fas fa-shopping-cart" /></button>
                </Link>
            </div>
        </div>
    )
}

export default CardSmartphone;