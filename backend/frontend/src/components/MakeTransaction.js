import React, { Component } from "react";
import styled from "styled-components";
// import axios from "axios";
import Swal from 'sweetalert2'
import { axiosInstance } from "../config";

const Section = styled.section`
  font-family: 'Montserrat', Sans-Serif;
  position: relative;
  min-height: 20vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "Audiowide";
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 0;
  z-index: 5;

  @media only Screen and (max-width: 37em){
    font-size: 2rem;
    }
`
const Form = styled.form`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.fontlg};
  padding: 50px;
  margin: auto;
`;

const FormGroup = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.fontmd};

  select{
      cursor: pointer;
  }

  select,
  input {
    height: 2em;
    font-family: 'Montserrat', sans-serif;
    width: 60vw;
    font-size: ${(props) => props.theme.fontxs};
  }

  .submitButton {
    border-style: none;
    border-radius: 50px;
    width: 10em;
    height: 3em;
    margin: auto;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    background-color: yellow;

    &:hover {
      transition: all 0.3s ease;
      transform: scale(1.1);
      background-color: lightyellow;
    }
  }
`;

export default class MakeTransaction extends Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = (element) => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      if (this.textInput) this.textInput.focus();
    };

    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      from: " ",
      to: " ",
      amount: 0,
      users: [],
    };
  }

  componentDidMount() {
      axiosInstance.get('/users/')
      .then(response => {
          if (response.data.length > 0){
              this.setState({
                  users: response.data.map(user => user.username),
                  username: response.data[0].username
              })
          }
      })

    this.focusTextInput();
  }

  onChangeFrom(e) {
    this.setState({
      from: e.target.value,
    });
  }

  onChangeTo(e) {
    this.setState({
      to: e.target.value,
    });
  }

  onChangeAmount(e) {
    this.setState({
      amount: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const transaction = {
      from: this.state.from,
      to: this.state.to,
      amount: this.state.amount,
    };

    console.log(transaction);

    axiosInstance.post('/transactions/add',  transaction)
    .then(res => Swal.fire({
      title: "Success",
      text: "Transaction made successfully",
      icon: "success",
      confirmButtonColor: "#00D100",})
      .then(okay => {
        if (okay){
          window.location = "/transactions";
        }
  }))
    .catch(err => Swal.fire({
      icon: 'error',
      title: 'Error !' ,
      text: 'Account balance insufficient !',
      confirmButtonColor: "#D33",
    }));
  }

  render() {
    return (
      <Section>
        <Title
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          Make Transaction
        </Title>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <label>From: </label>
            <select
              ref={this.setTextInputRef}
              required
              className="formControl"
              value={this.state.from}
              onChange={this.onChangeFrom}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </FormGroup>

          <FormGroup>
            <label>To: </label>
            <select
              ref={this.setTextInputRef}
              required
              className="formControl"
              value={this.state.to}
              onChange={this.onChangeTo}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </FormGroup>

          <FormGroup>
            <label>Amount $: </label>
            <input
              type="number"
              required
              className="formControl"
              value={this.state.amount}
              onChange={this.onChangeAmount}
            />
          </FormGroup>

          <FormGroup>
            <input
              type="submit"
              value="Make Transaction"
              onClick={this.focusTextInput}
              className="submitButton"
            />
          </FormGroup>
        </Form>
      </Section>
    );
  }
}
