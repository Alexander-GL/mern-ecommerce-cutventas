import React, { useEffect, useState } from 'react';
import Navigation from '../layout/Navigation';
import Navigation2 from '../layout/Navigation2';
import FooterPage from '../layout/FooterPage';
import './styles/Card.css';
import { getElectronics } from './apiCore';
import CardElectronic from './CardElectronic';

const Electronics = (req, res) => {

    const [electronics, setElectronics] = useState([]);
    const [error, setError] = useState(false);

    const loadElectronics = () => {
        getElectronics().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setElectronics(data);
                console.log(data);
            }
        })
    }

    useEffect(() => {    // Al inicio ejecuta esta función (Trabaja en paralelo con el sitio a la hora de cargar todo)
        loadElectronics();
    }, [])


    return (

        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="aonymous" />
            <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
            <Navigation />
            <Navigation2 />

            <div className="container">
                <div className="row">
                    {electronics.map((electronic, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <CardElectronic electronic={electronic} />
                        </div>
                    ))}
                </div>
            </div>
            <FooterPage />
        </div>

    )
}


export default Electronics;