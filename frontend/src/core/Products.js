import React, { useEffect, useState } from 'react';
import  Card  from './Card';
import  CardBook  from './CardBook';
import  CardFashionWoman  from './CardFashionWoman';
import  CardFashionMen  from './CardFashionMen';
import  CardFit  from './CardFit';
import  CardLaptop  from './CardLaptop';
import  CardSmartphone  from './CardSmartphone';
import  CardElectronic  from './CardElectronic';
import  CardOther  from './CardOther';
import './styles/Card.css';
import Navigation from '../layout/Navigation';
import Navigation2 from '../layout/Navigation2';
import { getFoods, getBooks, getFashionWomans, getFashionMens, getFitness, getLaptops, getSmartphones, getElectronics, getOthers } from './apiCore';
import FooterPage from '../layout/FooterPage';
import { Link } from 'react-router-dom';
import { remove, removeBook, removeFashionWoman, removeFashionMen, removeFit, removeLaptop, removeSmartphone, removeElectronic, removeOther } from "./apiCore";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Pagination from 'react-bootstrap/Pagination';

const Products = (req, res) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [foods, setFoods] = useState([]);
    const [books, setBooks] = useState([]);
    const [fashionWomans, setFashionWomans] = useState([]);
    const [fashionMens, setFashionMens] = useState([]);
    const [fitness, setFitness] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [smartphones, setSmartphones] = useState([]);
    const [electronics, setElectronics] = useState([]);
    const [others, setOthers] = useState([]);
    const [error, setError] = useState(false);

    const loadFoods = () => {
        getFoods().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFoods(data);
                console.log(data);
            }
        })
    }

    const loadBooks = () => {
        getBooks().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setBooks(data);
                console.log(data);
            }
        })
    }

    const loadFashionWomans = () => {
        getFashionWomans().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFashionWomans(data);
                console.log(data);
            }
        })
    }

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

    const loadFitness = () => {
        getFitness().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFitness(data);
                console.log(data);
            }
        })
    }

    const loadLaptops = () => {
        getLaptops().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setLaptops(data);
                console.log(data);
            }
        })
    }

    const loadSmartphones = () => {
        getSmartphones().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setSmartphones(data);
                console.log(data);
            }
        })
    }

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

    const loadOthers = () => {
        getOthers().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setOthers(data);
                console.log(data);
            }
        })
    }

    useEffect(() => {    // Al inicio ejecuta esta función (Trabaja en paralelo con el sitio a la hora de cargar todo)
        loadFoods();
        loadBooks();
        loadFashionWomans();
        loadFashionMens();
        loadFitness();
        loadLaptops();
        loadSmartphones();
        loadElectronics();
        loadOthers();
    }, [])

    return (
        <>
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
                <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
            <Navigation/>
            <Navigation2/>
            <div className="container">
            <Jumbotron>
                <h1>¡Gestiona tu inventario!</h1>
                <p>
                    Aquí podrá analizar los productos que tiene actualmente en venta, así como tambien actulizar algún dato o eliminar un producto...
                </p>
            </Jumbotron>
                <div className="row">
                    {foods.map((food, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <Card food={food} />
                            <Link to={`/food/${food._id}`}>
                            <button className='btn btn-warning edit m-1' href="/">Editar</button>
                            </Link>   
                            {/* <button className='btn btn-danger delete m-1' href="/" onClick={()=> remove(food._id)}>Eliminar</button> */}
                            <button className='btn btn-danger delete m-1' href={`/${food._id}`} onClick={() => setModalOpen(!modalOpen)}>Eliminar</button>
                                <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                                    <div className=" modal-header">
                                    <h5 className=" modal-title" id="exampleModalLabel">
                                        Eliminar producto
                                    </h5>
                                    <button
                                        aria-label="Close"
                                        className=" close"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                    </div>
                                    <ModalBody>¿Estas seguro que deseas eliminar este producto?</ModalBody>
                                    <ModalFooter>
                                    <Button
                                        color="secondary"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        Cerrar
                                    </Button>
                                    <Button 
                                    color="danger" 
                                    type="button" 
                                    onClick={() => remove(food._id)}
                                    href="products"
                                    >
                                        Eliminar
                                    </Button>
                                    </ModalFooter>
                                </Modal>
                        </div>
                    ))}
                    {books.map((book, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <CardBook book={book} />
                            <Link to={`/book/${book._id}`}>
                            <button className='btn btn-warning edit m-1' href="/">Editar</button>
                            </Link>
                            <button className='btn btn-danger delete m-1' href="/" onClick={() => setModalOpen(!modalOpen)}>Eliminar</button>
                            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                                    <div className=" modal-header">
                                    <h5 className=" modal-title" id="exampleModalLabel">
                                        Eliminar producto
                                    </h5>
                                    <button
                                        aria-label="Close"
                                        className=" close"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                    </div>
                                    <ModalBody>¿Estas seguro que deseas eliminar este producto?</ModalBody>
                                    <ModalFooter>
                                    <Button
                                        color="secondary"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        Cerrar
                                    </Button>
                                    <Button 
                                    color="danger" 
                                    type="button" 
                                    onClick={() => removeBook(book._id)}
                                    href="products"
                                    >
                                        Eliminar
                                    </Button>
                                    </ModalFooter>
                                </Modal>
                        </div>
                    ))}
                    {fashionWomans.map((fashionWoman, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <CardFashionWoman fashionWoman={fashionWoman} />
                            <Link to={`/fashionWoman/${fashionWoman._id}`}>
                            <button className='btn btn-warning edit m-1' href="/">Editar</button>
                            </Link>
                            <button className='btn btn-danger delete m-1' href="/" onClick={() => setModalOpen(!modalOpen)}>Eliminar</button>
                            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                                    <div className=" modal-header">
                                    <h5 className=" modal-title" id="exampleModalLabel">
                                        Eliminar producto
                                    </h5>
                                    <button
                                        aria-label="Close"
                                        className=" close"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                    </div>
                                    <ModalBody>¿Estas seguro que deseas eliminar este producto?</ModalBody>
                                    <ModalFooter>
                                    <Button
                                        color="secondary"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        Cerrar
                                    </Button>
                                    <Button 
                                    color="danger" 
                                    type="button" 
                                    onClick={() => removeFashionWoman(fashionWoman._id)}
                                    href="products"
                                    >
                                        Eliminar
                                    </Button>
                                    </ModalFooter>
                                </Modal>
                        </div>
                    ))}
                    {fashionMens.map((fashionMen, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <CardFashionMen fashionMen={fashionMen} />
                            <Link to={`/fashionMen/${fashionMen._id}`}>
                            <button className='btn btn-warning edit m-1' href="/">Editar</button>
                            </Link>
                            <button className='btn btn-danger delete m-1' href="/" onClick={()=> setModalOpen(!modalOpen)}>Eliminar</button>
                            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                                    <div className=" modal-header">
                                    <h5 className=" modal-title" id="exampleModalLabel">
                                        Eliminar producto
                                    </h5>
                                    <button
                                        aria-label="Close"
                                        className=" close"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                    </div>
                                    <ModalBody>¿Estas seguro que deseas eliminar este producto?</ModalBody>
                                    <ModalFooter>
                                    <Button
                                        color="secondary"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        Cerrar
                                    </Button>
                                    <Button 
                                    color="danger" 
                                    type="button" 
                                    onClick={() => removeFashionMen(fashionMen._id)}
                                    href="products"
                                    >
                                        Eliminar
                                    </Button>
                                    </ModalFooter>
                                </Modal>
                        </div>
                    ))}
                    {fitness.map((fit, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <CardFit fit={fit} />
                            <Link to={`/fit/${fit._id}`}>
                            <button className='btn btn-warning edit m-1' href="/">Editar</button>
                            </Link>
                            <button className='btn btn-danger delete m-1' href="/" onClick={()=> setModalOpen(!modalOpen)}>Eliminar</button>
                            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                                    <div className=" modal-header">
                                    <h5 className=" modal-title" id="exampleModalLabel">
                                        Eliminar producto
                                    </h5>
                                    <button
                                        aria-label="Close"
                                        className=" close"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                    </div>
                                    <ModalBody>¿Estas seguro que deseas eliminar este producto?</ModalBody>
                                    <ModalFooter>
                                    <Button
                                        color="secondary"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        Cerrar
                                    </Button>
                                    <Button 
                                    color="danger" 
                                    type="button" 
                                    onClick={() => removeFit(fit._id)}
                                    href="products"
                                    >
                                        Eliminar
                                    </Button>
                                    </ModalFooter>
                                </Modal>
                        </div>
                    ))}
                    {laptops.map((laptop, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <CardLaptop laptop={laptop} />
                            <Link to={`/laptop/${laptop._id}`}>
                            <button className='btn btn-warning edit m-1' href="/">Editar</button>
                            </Link>
                            <button className='btn btn-danger delete m-1' href="/" onClick={()=> setModalOpen(!modalOpen)}>Eliminar</button>
                            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                                    <div className=" modal-header">
                                    <h5 className=" modal-title" id="exampleModalLabel">
                                        Eliminar producto
                                    </h5>
                                    <button
                                        aria-label="Close"
                                        className=" close"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                    </div>
                                    <ModalBody>¿Estas seguro que deseas eliminar este producto?</ModalBody>
                                    <ModalFooter>
                                    <Button
                                        color="secondary"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        Cerrar
                                    </Button>
                                    <Button 
                                    color="danger" 
                                    type="button" 
                                    onClick={() => removeLaptop(laptop._id)}
                                    href="products"
                                    >
                                        Eliminar
                                    </Button>
                                    </ModalFooter>
                                </Modal>
                        </div>
                    ))}
                    {smartphones.map((smartphone, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <CardSmartphone smartphone={smartphone} />
                            <Link to={`/smartphone/${smartphone._id}`}>
                            <button className='btn btn-warning edit m-1' href="/">Editar</button>
                            </Link>
                            <button className='btn btn-danger delete m-1' href="/" onClick={()=> setModalOpen(!modalOpen)}>Eliminar</button>
                            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                                    <div className=" modal-header">
                                    <h5 className=" modal-title" id="exampleModalLabel">
                                        Eliminar producto
                                    </h5>
                                    <button
                                        aria-label="Close"
                                        className=" close"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                    </div>
                                    <ModalBody>¿Estas seguro que deseas eliminar este producto?</ModalBody>
                                    <ModalFooter>
                                    <Button
                                        color="secondary"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        Cerrar
                                    </Button>
                                    <Button 
                                    color="danger" 
                                    type="button" 
                                    onClick={() => removeSmartphone(smartphone._id)}
                                    href="products"
                                    >
                                        Eliminar
                                    </Button>
                                    </ModalFooter>
                                </Modal>
                        </div>
                    ))}
                    {electronics.map((electronic, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <CardElectronic electronic={electronic} />
                            <Link to={`/electronic/${electronic._id}`}>
                            <button className='btn btn-warning edit m-1' href="/">Editar</button>
                            </Link>
                            <button className='btn btn-danger delete m-1' href="/" onClick={()=> setModalOpen(!modalOpen)}>Eliminar</button>
                            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                                    <div className=" modal-header">
                                    <h5 className=" modal-title" id="exampleModalLabel">
                                        Eliminar producto
                                    </h5>
                                    <button
                                        aria-label="Close"
                                        className=" close"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                    </div>
                                    <ModalBody>¿Estas seguro que deseas eliminar este producto?</ModalBody>
                                    <ModalFooter>
                                    <Button
                                        color="secondary"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        Cerrar
                                    </Button>
                                    <Button 
                                    color="danger" 
                                    type="button" 
                                    onClick={() => removeElectronic(electronic._id)}
                                    href="products"
                                    >
                                        Eliminar
                                    </Button>
                                    </ModalFooter>
                                </Modal>
                        </div>
                    ))}
                    {others.map((other, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <CardOther other={other} />
                            <Link to={`/other/${other._id}`}>
                            <button className='btn btn-warning edit m-1' href="/">Editar</button>
                            </Link>
                            <button className='btn btn-danger delete m-1' href="/" onClick={()=> setModalOpen(!modalOpen)}>Eliminar</button>
                            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                                    <div className=" modal-header">
                                    <h5 className=" modal-title" id="exampleModalLabel">
                                        Eliminar producto
                                    </h5>
                                    <button
                                        aria-label="Close"
                                        className=" close"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                    </div>
                                    <ModalBody>¿Estas seguro que deseas eliminar este producto?</ModalBody>
                                    <ModalFooter>
                                    <Button
                                        color="secondary"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        Cerrar
                                    </Button>
                                    <Button 
                                    color="danger" 
                                    type="button" 
                                    onClick={() => removeOther(other._id)}
                                    href="products"
                                    >
                                        Eliminar
                                    </Button>
                                    </ModalFooter>
                                </Modal>
                        </div>
                    ))}
                </div>
                <div>
                    <Pagination className="pagination justify-content-center">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item disabled>{2}</Pagination.Item>
                        <Pagination.Item disabled>{3}</Pagination.Item>
                        <Pagination.Item disabled>{4}</Pagination.Item>
                        <Pagination.Item disabled>{5}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>
        </div>
        <FooterPage />
        </>
    )
}


export default Products;