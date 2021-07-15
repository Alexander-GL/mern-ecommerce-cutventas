import React from 'react';
import Navigation from '../layout/Navigation';
import Navigation2 from '../layout/Navigation2';
import FooterPage from '../layout/FooterPage';
import './styles/Card.css';
import Carousel from 'react-bootstrap/Carousel'
import model1 from '../images/model1.jpg';
import model2 from '../images/model2.jpg';
import model3 from '../images/model3.jpg';
import model4 from '../images/model4.jpg';
import model5 from '../images/model5.jpg';
import EcommercePage from '../layout/EcommercePage';

const Home = (req, res) => {

    return (

        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
            <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
            <Navigation />
            <Navigation2 />
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="models d-block w-100"
                        src={model1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Libros, Revistas & Comics</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="models d-block w-100"
                        src={model2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Ropa de Dama</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="models d-block w-100"
                        src={model3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Deportes & Fitness</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="models d-block w-100"
                        src={model4}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>Laptops, Computadoras & Smartphones</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="models d-block w-100"
                        src={model5}
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        <h3>Ropa de Caballero</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            <EcommercePage />

            <FooterPage />
        </div>


    )
}


export default Home;