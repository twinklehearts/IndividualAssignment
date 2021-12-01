import React, { Component, useState, Redirect } from "react"
import './App.css';
import ReactDom from 'react-dom';
import { Link, withRouter} from "react-router-dom"
import { Button, Form, Style } from "react-bootstrap"
import ReCAPTCHA from "react-google-recaptcha";

export function Home(props) {

  function onChange(value) {
    console.log('Captcha value:', value);
  }

  const [validated, setValidated] = useState(false);

  function handleSubmit(e){
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation();
    }
    const { fname, lname, title, height, phone, address, budget, email } = e.target.elements
    console.log({ firstName: fname.value, lastName: lname.value, title: title.value, height: height.value, phone: phone.value, address: address.value, budget: budget.value, email: email.value })
    setValidated(true);
    // const { history } = this.props;
    // history.push("/results")
    <Redirect to={{
      pathname: "/results",
      state: { data:fname, lname, title, height, phone, address, budget, email }
    }} />
  }


  return (
    <div class="container">
      <body>
        <h1>Registration</h1>
        <Form action="form" class="main-form needs-validation" Style="width: 500px; margin: auto;" noValidate validated={validated} onSubmit={handleSubmit}>

          <div class="row">
            <div class="col" Style="margin-top: 15px">
              <div class="form-group" controlId="validationCustom01">
                <label for="fname">First Name</label>
                <input type="text" name="fname" id="fname" value={props.firstName} class="form-control" maxlength="40" required></input>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col" Style="margin-top: 15px">
              <div class="form-group">
                <label for="lname">Last Name</label>
                <input type="text" name="lname" id="lname" value={props.lastName} class="form-control" maxlength="40" required></input>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col" Style="margin-top: 15px">
              <div class="form-group">
                <label for="title">Choose preferred title</label>
                <select name="title" id="title" value={props.title} class="form-control" required>
                  <option value="" disabled selected hidden>Select</option>
                  <option value="student">Student</option>
                  <option value="professor">Professor</option>
                  <option value="staff">Staff</option>
                  <option value="retired">Retired</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col" Style="margin-top: 15px">
              <div class="form-group">
                <label for="height">Height</label>
                <input type="text" name="height" id="height" class="form-control" placeholder="Feet, Inches" required></input>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col" Style="margin-top: 15px">
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" name="phone" id="phone" class="form-control" pattern="[1-9]{1}[0-9]{9}" placeholder="Enter 10 digit phone number" maxlength="10" required></input>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col" Style="margin-top: 15px">
              <div class="form-group">
                <label for="address">Address</label>
                <input type="text" name="address" id="address" class="form-control" maxlength="40" required></input>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col" Style="margin-top: 15px">

              <label for="service-title">Check all services you require</label>
              <div class="form-group">
                <div class="service-check">
                  <hr></hr>
                  <input type="checkbox" id="services" class="form-check-input"></input>
                  <label for="services" class="form-check-label">Email and Phone</label>
                  <input type="checkbox" id="services1" class="form-check-input"></input>
                  <label for="services1" class="form-check-label">Facebook</label>
                  <input type="checkbox" id="services2" class="form-check-input"></input>
                  <label for="services2" class="form-check-label">Twitter</label>
                  <input type="checkbox" id="services3" class="form-check-input"></input>
                  <label for="services3" class="form-check-label">Personal Visit</label> <hr></hr>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col" Style="margin-top: 1px">
              <div class="form-group">
                <label for="budget">Your monthly budget for services</label>
                <select name="budget" id="budget" class="form-control" required>
                  <option value="" disabled selected hidden>Select</option>
                  <option value="none">Less than $50</option>
                  <option value="student">Between $50 and $100</option>
                  <option value="professor">Above $100</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row" Style="margin-top: 15px">
            <div class="col">
              <div class="form-group">
                <label for="address">Email Address</label>
                <input type="email" name="email" id="email" class="form-control" required></input>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-group">
                <div class="form-check" Style="margin-top: 15px">
                  <input type="checkbox" id="accept-terms" class="form-check-input" required></input>
                  <label for="accept-terms" class="form-check-label">Accept Terms &amp; Conditions</label>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col" Style="margin-top: 15px">
              <div className="App" required>
                <ReCAPTCHA
                  sitekey="6LdQA2odAAAAAE9_mdlMcRWLEU7yJ-h9dA8v3Xqd"
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="col">
              {/* <Link to="/results">  */}
              <Button type="submit" Style="margin-top: 15px">Submit</Button>
              {/* </Link> */}
            </div>
          </div>
        </Form>
      </body>
    </div>
  );

}

export default Form;