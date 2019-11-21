import React, { Component } from "react";
import { Container } from 'reactstrap';

function Footer() {
    return (
        <footer className="sticky-footer">
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                    &copy; {new Date().getFullYear()} Copyright: Sarah Sakhri
                </Container>
            </div>
        </footer>
    )
}


export default Footer;