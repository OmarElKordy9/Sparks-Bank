import React from 'react';
import styled from 'styled-components';
import SparksLogo from '../assets/logo.png';
import  { useState } from "react";

const NavBar = styled.header`
position: relative;
padding: 1rem 5rem;
z-index: 500;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
color: white;
background-color: #35353F;

`
const Logo = styled.a`
display: flex;
flex-direction: row;
align-items: center;
width: 3rem;
height: auto;
cursor: pointer;

img{
    margin-right: 0.5rem;
}
`
const Nav = styled.nav`
width: 25rem;
max-width: 40rem;
display: flex;
align-items: center;
justify-content: space-between;

@media only Screen and (max-width: 48em){
    display: none;
}

a{
    font-weight: 600;
    color: white;
    line-height: 1.5;

    &::after{
        content: "";
        display: block;
        height: 3px;
        width: 3px;
        background: transparent;
        transition: width 0.5s;
    }
    &:hover::after{
        width: 100%;
        background: white;

    }
}
`
const HamBtn = styled.button`
position: relative;
background-color: transparent;
border: none;
width: 2rem;
height: 2px;
cursor: pointer;
display: none;

@media only Screen and (max-width: 48em){
    display: inline-block;
}

&::before, &::after{
    content: "";
    background-color: white;
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.3s;
}
&::before{
    top: ${props => props.clicked ? "0" : "-0.5rem"};
    transform: ${props => props.clicked ? "rotate(135deg)" : "rotate(0)"};
}
&::after{
    top: ${props => props.clicked ? "0" : "0.5rem"};
    transform: ${props => props.clicked ? "rotate(-135deg)" : "rotate(0)"};
}
`
const MobileNav = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem 0;
position: absolute;
top: 100%;
left: 0;
right: 0;
opacity: ${(props) => (props.clicked? "1" : "0")};
visibility: ${(props) => (props.clicked? "visible" : "hidden")};
background: rgba(53, 53, 63, 0.95);
border-radius: 20px;
margin: 0.5rem;
overflow-x: hidden;

a{
    font-weight: 600;
    font-size: ${props => props.theme.fontlg};
    margin: 1.5rem;
    cursor: pointer;

    &::after{
        content: "";
        display: block;
        height: 3px;
        width: 3px;
        background: transparent;
        transition: width 0.5s;
    }
    &:hover::after{
        width: 100%;
        background: white;

    }
}
`

const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <NavBar>
        <Logo>
        <img src={SparksLogo} alt="Logo"/>
        <h3>SparksBank</h3>
    </Logo>
    <Nav>
        <a href='#home'>Home</a>
        <a href='#about'>About us</a>
        <a href='#customers'>Customers</a>
        <a href='#transactions'>Transactions</a>
    </Nav>
    <HamBtn onClick={() => handleClick()} clicked={click}>
        <span />
    </HamBtn>
    <MobileNav clicked={click}>
        <a href='#home' onClick={() => handleClick()}>Home</a>
        <a href='#about' onClick={() => handleClick()}>About us</a>
        <a href='#customers' onClick={() => handleClick()}>Customers</a>
        <a href='#transactions' onClick={() => handleClick()}>Transactions</a>
    </MobileNav>
    </NavBar>
  )
}

export default Header