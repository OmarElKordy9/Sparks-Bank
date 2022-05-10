import React, { Component } from "react";
import styled from "styled-components";
import axios from 'axios';
import Swal from 'sweetalert2'

const Section = styled.section`
  position: relative;
  min-height: 10vh;
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
  left: 6%;
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

export default class CreateUser extends Component {
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

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAccountNo = this.onChangeAccountNo.bind(this);
    this.onChangeBalance = this.onChangeBalance.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: " ",
      email: " ",
      accountNo: 0,
      balance: 0,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeAccountNo(e) {
    this.setState({
      accountNo: e.target.value,
    });
  }
  onChangeBalance(e) {
    this.setState({
      balance: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      accountNo: this.state.accountNo,
      balance: this.state.balance,
    };

    console.log(user);

    axios.post('http://localhost:8000/users/add',  user)
    .then(res => Swal.fire({
      title: "Success",
      text: "User created successfully",
      icon: "success"})
      .then(okay => {
        if (okay){
          window.location = "/users";
        }
  }))
    .catch(err => Swal.fire({
      icon: 'error',
      title: 'Error !' ,
      text: 'User already exists !',
      confirmButtonColor: "#D33",
    }));

    this.setState({
      username: "",
      email: "",
      accountNo: "",
      balance: "",
    });
  }

  render() {
    return (
      <Section>
        <Title
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          Create User
        </Title>
        <Form onSubmit={this.onSubmit}>
        <FormGroup>
            <label>Username: </label>
            <input
              type="text"
              required
              className="formControl"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </FormGroup>
          <FormGroup>
            <label>Email: </label>
            <input
              type="email"
              required
              className="formControl"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </FormGroup>
          <FormGroup>
            <label>Account Number (exactly 6  numbers): </label>
            <input
              type="tel"
              required
              maxLength={6}
              minLength={6}
              className="formControl"
              value={this.state.accountNo}
              onChange={this.onChangeAccountNo}
            />
          </FormGroup>
          <FormGroup>
            <label>Balance $: </label>
            <input
              type="number"
              required
              className="formControl"
              value={this.state.balance}
              onChange={this.onChangeBalance}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="submit"
              value="Create User"
              onClick={this.focusTextInput}
              className="submitButton"
            />
          </FormGroup>
        </Form>
      </Section>
    );
  }
}
