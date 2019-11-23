import React, { Component } from 'react';
import { MDBCol } from 'mdbreact';
import API from '../../utils/API';


class quoteOfDay extends Component {

    state = {
        quote: {}
    }
    componentDidMount() {
        this.quoteOfDay();
    };

    quoteOfDay() {
        API.quote()
            .then(res => this.setState({ quote: res.data }, console.log(res.data)))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className=" text-center">
                <MDBCol md="12" sm="12" className="ml-auto">
                    <div><b>QUOTE FOR MOTIVATION</b></div>
                    <h6>"{this.state.quote.content}"</h6>
                    <p> - {this.state.quote.author}</p>
                </MDBCol>
            </div>
        )
    }

}

export default quoteOfDay;