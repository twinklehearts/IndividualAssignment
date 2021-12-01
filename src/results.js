import React, { Component } from "react"
import ReactDom from 'react-dom';
import { Button, Form, Style, Render } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from "react-google-recaptcha";
import App from "./App"
import Home from "./home"

export class Results extends Component {

    
    render() {
    return (
        <div class="container">
            <body>
                <a>
                    Yes
                </a>
            </body>
        </div>
    )
    }
}

export default Results;