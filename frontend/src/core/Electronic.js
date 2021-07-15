import React, { useEffect, useState } from 'react';
import  CardElectronic  from './CardElectronic';
import './styles/Card.css';
import { readelectronic } from './apiCore';
import Navigation from '../layout/Navigation';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navigation2 from '../layout/Navigation2';
import FooterPage from '../layout/FooterPage';


const Electronic = (props) => {
    const [electronic, setElectronic] = useState({});
    const [error, setError] = useState(false);

    const loadSingleElectronic = electronicId => {
        readelectronic(electronicId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setElectronic(data);
            }
        });
    }

    useEffect(() => {
        const electronicId = props.match.params.electronicId
        loadSingleElectronic(electronicId);
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
                    <h3>Electrónica, Audio & Video</h3>
                </div>
            </Jumbotron>
                <span class="clearfix"></span>
                <div className="centrarCaja row col-5 center-block">
                { electronic && <CardElectronic electronic={electronic}/> }
                <a href="https://www.paypal.com/mx/signin"><button className='btn btn-success buy col-12'>Comprar ahora</button></a>
                </div>
            </div>
                <FooterPage/>
        </div>
        </>
    )
}

export default Electronic;