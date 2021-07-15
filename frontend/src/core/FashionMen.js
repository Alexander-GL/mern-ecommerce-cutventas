import React, { useEffect, useState } from 'react';
import  CardFashionMen  from './CardFashionMen';
import './styles/Card.css';
import { readfashionmen } from './apiCore';
import Navigation from '../layout/Navigation';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navigation2 from '../layout/Navigation2';
import FooterPage from '../layout/FooterPage';


const FashionMen = (props) => {
    const [fashionMen, setFashionMen] = useState({});
    const [error, setError] = useState(false);

    const loadSingleFashionMen = fashionMenId => {
        readfashionmen(fashionMenId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFashionMen(data);
            }
        });
    }

    useEffect(() => {
        const fashionMenId = props.match.params.fashionMenId
        loadSingleFashionMen(fashionMenId);
    }, [props])

    return (
        <>
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
                <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
            <Navigation/>
            <Navigation2 />
            <div className="container col-8">
                    <Jumbotron>
                        <div className="m-1">
                            <h3>Ropa de Caballero</h3>
                        </div>
                    </Jumbotron>
                    <span class="clearfix"></span>
                <div className="centrarCaja row col-5 center-block">
                { fashionMen && <CardFashionMen fashionMen={fashionMen}/> }
                <a href="https://www.paypal.com/mx/signin"><button className='btn btn-success buy col-12'>Comprar ahora</button></a>
                </div>
            </div>
                <FooterPage/>
        </div>
        </>
    )
}

export default FashionMen;