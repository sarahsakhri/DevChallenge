import React from "react";
import { MDBContainer, MDBFooter } from 'mdbreact';

function Footer() {
    return (
        <MDBFooter style={{ backgroundColor: "#212121" }}>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} <a href="https://github.com/sarahsakhri/DevChallenge"> Github Link </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    )
}

export default Footer;