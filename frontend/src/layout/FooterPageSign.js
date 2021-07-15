import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPageSign = () => {
  return (
    <MDBFooter color="dark" className="font-small darken-5 pt-0">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="a-link-enphasis" href="https://www.linkedin.com/in/gerardo-alexander-garcia-lopez-5405a41b3/?trk=public-profile-join-page"> Alexander García </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPageSign;