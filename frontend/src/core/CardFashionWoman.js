import React, { useState } from 'react';
import './styles/Card.css';
import ShowImage from './ShowImage';
import { Link } from 'react-router-dom';

const CardFashionWoman = ({ fashionWoman }) => {
    const [count, setCount] = useState(fashionWoman.count);

    return (
        <div className="card m-10 card-cont">
            <div>
                <ShowImage className="img" item={fashionWoman} url="fashionWoman" />
                <h2 className="product_name">{fashionWoman.name}</h2><hr />
                <h6>${fashionWoman.price} pesos</h6>
                <p>{fashionWoman.description}</p>
                <div class="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <p>{fashionWoman.status}</p>
                <Link to={`/fashionWoman/${fashionWoman._id}`}>
                    <button className="btn btn-info add"><i class="fas fa-info"/></button>
                    <button className="btn btn-secondary info"><i class="fas fa-shopping-cart" /></button>
                </Link>
                </div>
        </div>
    )
}

export default CardFashionWoman;