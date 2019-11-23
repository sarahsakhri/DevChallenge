import React, { Component } from 'react';
import Quote from '../../components/quoteOfDay';
import ToDo from '../todoList';
import { MDBContainer } from 'mdbreact';

class Main extends Component {

    render() {
        return (
            <div>
                <MDBContainer className="mainContainer">
                    <Quote />
                    <ToDo />
                </MDBContainer>
            </div>

        )
    }
}

export default Main;