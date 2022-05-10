import React from 'react';
import styled from 'styled-components';
import SparksLogo from '../assets/logo.png';
import  { useState } from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Link } from 'react-router-dom';


const NavBar = styled.header`
font-family: 'Montserrat', sans-serif;
top:0;
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

@media only Screen and (max-width: 48em){
    display: none;
}

ul{
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

li{
    font-weight: 600;
    color: white;
    line-height: 1.5;
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
        background: yellow;

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
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem 0;
position: absolute;
top: 5em;
z-index: 100;
left: 0;
right: 0;
opacity: ${(props) => (props.clicked? "1" : "0")};
visibility: ${(props) => (props.clicked? "visible" : "hidden")};
background: rgba(53, 53, 63, 0.95);
border-radius: 20px;
margin: 0.5rem;
overflow-x: hidden;
display: none;

@media only Screen and (max-width: 48em){
    display: flex;
}
li{
    font-weight: 600;
    font-size: ${props => props.theme.fontlg};
    margin: 1.5rem;
    cursor: pointer;
    list-style-type: none;

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

  const {scroll} = useLocomotiveScroll();
  const handleClick = () => setClick(!click);
    const handleScroll = (id) => {
        let element = document.querySelector(id);
        setClick(!click);
        scroll.scrollTo(element,
            {
                offset: '-100',
                duration: '2000',
                easing: [0.25, 0, 0.35, 1]
            })
    }

  return (
    <NavBar clicked={click}>
        <Logo href='/'>
        <img src={SparksLogo} alt="Logo"/>
        <h3>SparksBank</h3>
    </Logo>
    <Nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li onClick={() => handleScroll('#about')}>
                About us
            </li>
            <li>
                <Link to='/users'>Users</Link>
            </li>
            <li>
                <Link to='/transactions'>Transactions</Link>
            </li>
        </ul>
    </Nav>
    <HamBtn onClick={() => handleClick()} clicked={click}>
        <span />
    </HamBtn>
    <MobileNav clicked={click}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li onClick={() => handleScroll('#about')}>
                About us
            </li>
            <li>
                <Link to='/users'>Users</Link>
            </li>
            <li>
                <Link to='/transactions'>Transactions</Link>
            </li>
    </MobileNav>
    </NavBar>
  )
}

export default Header