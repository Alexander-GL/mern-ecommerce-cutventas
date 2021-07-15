import React, { useEffect, useState } from 'react';
import  Card  from './Card';
import './styles/Card.css';
import { read } from './apiCore';
import Navigation from '../layout/Navigation';
import FooterPage from '../layout/FooterPage';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navigation2 from '../layout/Navigation2';

const Food = (props) => {
    const [food, setFood] = useState({});
    const [error, setError] = useState(false);

    const loadSingleFood = foodId => {
        read(foodId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFood(data);
            }
        });
    }

    useEffect(() => {
        const foodId = props.match.params.foodId
        loadSingleFood(foodId);
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
                            <h3>Alimentos & Bebidas</h3>
                        </div>
                    </Jumbotron>
                    <span class="clearfix"></span>
                <div className="centrarCaja row col-5 center-block">
                { food && <Card food={food}/> }
                <a href="https://www.paypal.com/mx/signin"><button className='btn btn-success buy col-12'>Comprar ahora</button></a>
                </div>
            </div>
                <FooterPage/>
        </div>
        </>
    )
}

export default Food;