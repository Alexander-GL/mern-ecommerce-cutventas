import React, { useState } from 'react';
import './styles/Card.css';
import ShowImage from './ShowImage';
import { Link } from 'react-router-dom';

const CardBook = ({ book }) => {
    const [count, setCount] = useState(book.count);

    return (
        <div className="card m-10 card-cont">
            <div>
                <ShowImage className="img" item={book} url="book" />
                <h2 className="product_name">{book.name}</h2><hr />
                <h6>${book.price} pesos</h6>
                <p>{book.description}</p>
                <div class="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <p>{book.status}</p>
                <Link to={`/book/${book._id}`}>
                    <button className="btn btn-info add"><i class="fas fa-info"/></button>
                    <button className="btn btn-secondary info"><i class="fas fa-shopping-cart" /></button>
                </Link>
            </div>
        </div>
    )
}

export default CardBook;