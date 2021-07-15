import React, { useState } from 'react';
import './styles/Card.css';
import ShowImage from './ShowImage';
import { Link } from 'react-router-dom';

const Card = ({ food }) => {
    const [count, setCount] = useState(food.count);

    return (
        
        <div className="card m-10 card-cont">
            <div>
                <ShowImage className="img" item={food} url="food" />
                <h2 className="product_name">{food.name}</h2><hr />
                <h6>${food.price} pesos</h6>
                <p>{food.description}</p>
                <div class="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <p>{food.status}</p>

                <Link to={`/food/${food._id}`}>
                    <button className="btn btn-info add"><i class="fas fa-info"/></button>
                    <button className="btn btn-secondary info"><i class="fas fa-shopping-cart" /></button>
                </Link>
            </div>
        </div>
    )
}

export default Card;