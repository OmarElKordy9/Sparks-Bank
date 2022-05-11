import React, { Component } from 'react'
import styled from 'styled-components';
// import axios from 'axios';
import { axiosInstance } from '../../config';

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.email}</td>
    <td>{props.user.accountNo}</td>
    <td>{props.user.balance}</td>
  </tr>
)

const Section = styled.section`
  position: relative;
  min-height: 50vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-evenly;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "Audiowide";
  font-weight: 300;
  position: relative;
  margin-bottom: 1em;
  top: 1rem;
  left: 6%;
  z-index: 5;

  @media only Screen and (max-width: 37em){
    font-size: 2rem;
    }
`
const TableContainer = styled.div`
overflow-x: auto;
width: 100%;
`
const Table = styled.table`
border-collapse: collapse;
background: white;
border-radius: 10px;
overflow: hidden;
width: 85%;
position: relative;
margin: auto;

@media only Screen and (max-width: 39em){
    font-size: ${props => props.theme.fontsm};
}
@media only Screen and (max-width: 32em){
    font-size: ${props => props.theme.fontxs};
}
`
const TableHead = styled.thead`
background-color: yellow;
color: black;
display: table-header-group;
vertical-align: middle;
text-align: center;
height: 3em;

tr{
display: table-row;
color: black;
text-align: center;
justify-content: space-evenly;
}
`
const TableBody = styled.tbody`
display: table-row-group;
vertical-align: middle;
color: black;

tr{
  display: table-row;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: grey;
  font-weight: 500;

  &:hover{
    color: black;
    transition: all 0.3s ease;
  }
}

td{
  padding: 0.5em
}
`

export default class UsersList extends Component {
  constructor(props){
    super(props);

    this.state = {users: []};
  }

  componentDidMount() {
    axiosInstance.get('/users/')
    .then(response => {
      this.setState({users: response.data})
    })
    .catch((error) => {
      console.log(error);
    })
  }

  userList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} key={currentuser._id}></User> 
    })
  }

  render(){
    return (
      <Section>
        <Title>Users</Title>
        <TableContainer>
          <Table>
            <TableHead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Account Number</th>
                <th>Balance $</th>
              </tr>
            </TableHead>
            <TableBody>
              {this.userList()}
            </TableBody>
          </Table>
        </TableContainer>
      </Section>
    );
  }
}
