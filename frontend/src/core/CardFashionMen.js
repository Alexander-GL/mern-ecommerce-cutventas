import React, { useState } from 'react';
import './styles/Card.css';
import ShowImage from './ShowImage';
import { Link } from 'react-router-dom';

const CardFashionMen = ({ fashionMen }) => {
    const [count, setCount] = useState(fashionMen.count);

    return (
        <div className="card m-10 card-cont">
            <div>
                <ShowImage className="img" item={fashionMen} url="fashionMen" />
                <h2 className="product_name">{fashionMen.name}</h2><hr />
                <h6>${fashionMen.price} pesos</h6>
                <p>{fashionMen.description}</p>
                <div class="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <p>{fashionMen.status}</p>
                <Link to={`/fashionMen/${fashionMen._id}`}>
                    <button className="btn btn-info add"><i class="fas fa-info"/></button>
                    <button className="btn btn-secondary info"><i class="fas fa-shopping-cart" /></button>
                </Link>
            </div>
        </div>
    )
}

export default CardFashionMen;