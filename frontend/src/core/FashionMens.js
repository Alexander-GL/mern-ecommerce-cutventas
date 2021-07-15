import React, { useEffect, useState } from 'react';
import Navigation from '../layout/Navigation';
import Navigation2 from '../layout/Navigation2';
import FooterPage from '../layout/FooterPage';
import './styles/Card.css';
import { getFashionMens } from './apiCore';
import CardFashionMen from './CardFashionMen';

const FashionMens = (req, res) => {

    const [fashionMens, setFashionMens] = useState([]);
    const [error, setError] = useState(false);

    const loadFashionMens = () => {
        getFashionMens().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFashionMens(data);
                console.log(data);
            }
        })
    }

    useEffect(() => {    // Al inicio ejecuta esta función (Trabaja en paralelo con el sitio a la hora de cargar todo)
        loadFashionMens();
    }, [])


    return (

        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
            <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
            <Navigation />
            <Navigation2 />

            <div className="container">
                <div className="row">
                    {fashionMens.map((fashionMen, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <CardFashionMen fashionMen={fashionMen} />
                        </div>
                    ))}
                </div>
            </div>
            <FooterPage />
        </div>

    )
}
 
export default FashionMens;