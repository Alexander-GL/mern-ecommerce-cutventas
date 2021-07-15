import React from "react";
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol, MDBCard, MDBIcon } from "mdbreact";

const EcommercePage = () => {
  return (
    <section className="text-center my-5">
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mt-2 my-5">
          ¡Consigue las mejores ofertas!
      </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
        <MDBRow>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4 shadow-box-example hoverable">
            <MDBCard collection className="z-depth-1-half">
              <div className="view zoom">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="stripe dark">
                  <a href="/fashionWomans">
                    <p>
                      Pantalón rojo <MDBIcon icon="angle-right" />
                    </p>
                  </a>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard collection className="z-depth-1-half">
              <div className="view zoom">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="stripe dark">
                  <a href="/fashionMens">
                    <p>
                      Sudadera para hombre <MDBIcon icon="angle-right" />
                    </p>
                  </a>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard collection className="z-depth-1-half">
              <div className="view zoom">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="stripe dark">
                  <a href="/fashionWomans">
                    <p>
                      Accesorios <MDBIcon icon="angle-right" />
                    </p>
                  </a>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard collection className="z-depth-1-half">
              <div className="view zoom">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="stripe dark">
                  <a href="/fashionWomans">
                    <p>
                      Sudadera para mujer <MDBIcon icon="angle-right" />
                    </p>
                  </a>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br /><br />
      </div>

      <MDBJumbotron fluid>
        <MDBContainer>
          <h2 className="display-5">Fluid jumbotron</h2>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </MDBContainer>
      </MDBJumbotron>

      <section className="text-center my-5">
        <div className="container">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4 shadow-box-example hoverable">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe dark">
                    <a href="/electronics">
                      <p>
                        GoPro <MDBIcon icon="angle-right" />
                      </p>
                    </a>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(49).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe dark">
                    <a href="/electronics">
                      <p>
                        Camaras <MDBIcon icon="angle-right" />
                      </p>
                    </a>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(57).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe dark">
                    <a href="/fashionWomans">
                      <p>
                        Zapatos & Tenis <MDBIcon icon="angle-right" />
                      </p>
                    </a>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe dark">
                    <a href="/fashionWomans">
                      <p>
                        Sombreros <MDBIcon icon="angle-right" />
                      </p>
                    </a>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </section>

      <section className="text-center my-5">
        <div className="container">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4 shadow-box-example hoverable">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe dark">
                    <a href="/fashionWomans">
                      <p>
                        Primavera / Verano 2021 <MDBIcon icon="angle-right" />
                      </p>
                    </a>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(38).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe dark">
                    <a href="/others">
                      <p>
                        Todo para la Universidad <MDBIcon icon="angle-right" />
                      </p>
                    </a>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe dark">
                    <a href="/fashionMens">
                      <p>
                        Accesorios para hombre <MDBIcon icon="angle-right" />
                      </p>
                    </a>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe dark">
                    <a href="/laptops">
                      <p>
                        Laptops & Celulares <MDBIcon icon="angle-right" />
                      </p>
                    </a>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </section>

    </section>
  );
}

export default EcommercePage;