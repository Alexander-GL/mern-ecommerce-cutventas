import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
            <MDBContainer className="text-center text-md-left">
                <MDBRow className="text-center text-md-left mt-3 pb-3">
                    <MDBCol md="7" lg="7" xl="7" className="mx-auto mt-3">
                        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
                        <h6 className="text-uppercase mb-4 font-weight-bold">
                            Misión y visión
                        </h6>
                        <p>
                            CUTVENTAS se presenta como un punto de referencia que provee información sobre las microempresas
                            del Centro Universitario de Tonalá, impulsa la economía de las mismas ya que va dirigida a la comunidad
                            del mismo Centro. Disponible en tu Smartphone, Laptop, iPad y más...
                        </p>
                    </MDBCol>
                    <hr className="w-100 clearfix d-md-none" />
                    <MDBCol md="4" lg="4" xl="4" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                        <p>
                            <i className="fa fa-home mr-2" /> Campus CUTONALÁ Av. Nuevo Periférico No. 555
                        </p>
                        <p>
                            <i className="fa fa-print mr-2" /> + 52 (33) 20 00 23 00 Ext. 64007 y 64044
                        </p>
                        <p>
                            <i className="fa fa-envelope mr-2" /> alexander.garcia@alumnos.udg.mx
                        </p>
                        <p>
                            <i className="fa fa-phone mr-2" /> + 52 (33) 2834 5470
                        </p>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className="d-flex align-items-center">
                    <MDBCol md="8" lg="8">
                        <p className="text-center text-md-left grey-text">
                            &copy; {new Date().getFullYear()} Copyright:{" "}
                            <a href="https://www.linkedin.com/in/gerardo-alexander-garcia-lopez-5405a41b3/?trk=public-profile-join-page"> Alexander García </a>
                        </p>
                    </MDBCol>
                    <MDBCol md="4" lg="4" className="ml-lg-0">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <i className="fa fa-facebook" />
                                </li>
                                <li className="list-inline-item">
                                    <i className="fa fa-twitter" />
                                </li>
                                <li className="list-inline-item">
                                    <i className="fa fa-google-plus" />
                                </li>
                                <li className="list-inline-item">
                                    <i className="fa fa-linkedin" />
                                </li>
                            </ul>
                        </div>
                    </MDBCol>
                </MDBRow>
                <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/all.js"></script>
                <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/v4-shims.js"></script>
                <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/fontawesome.js"> </script>
            </MDBContainer>
        </MDBFooter>
    );
}

export default FooterPage;