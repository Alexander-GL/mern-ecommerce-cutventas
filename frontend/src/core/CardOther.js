import React, { useState } from 'react';
import './styles/Card.css';
import ShowImage from './ShowImage';
import { Link } from 'react-router-dom';

const CardOther = ({ other }) => {
    const [count, setCount] = useState(other.count);

    return (
        <div className="card m-10 card-cont">
            <div>
                <ShowImage className="img" item={other} url="other" />
                <h2 className="product_name">{other.name}</h2><hr />
                <h6>${other.price} pesos</h6>
                <p>{other.description}</p>
                <div class="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <p>{other.status}</p>
                <Link to={`/other/${other._id}`}>
                    <button className="btn btn-info add"><i class="fas fa-info"/></button>
                    <button className="btn btn-secondary info"><i class="fas fa-shopping-cart" /></button>
                </Link>
            </div>
        </div>
    )
}

export default CardOther;