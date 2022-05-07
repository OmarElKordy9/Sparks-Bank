import React from 'react';
import styled from 'styled-components';
import Handshake from '../assets/handshake.gif';
import MoneyTransfer from '../assets/money-transfer.png';
import Wallet from '../assets/wallet.png';


const Section = styled.section`
position: relative;
min-height: 100vh;
width: 80vw;
display: flex;
flex-direction: row;
margin: 0 auto;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
font-family: "Audiowide";
font-weight: 300;
position: absolute;
top: 1rem;
left: 5%;
z-index: 5;
`
const Left = styled.div`
width: 45%;
font-size: ${props => props.theme.fontlg};
font-weight: 400;
z-index: 5;
position: relative;
margin-top:20%;

a{
    color: yellow;
}
`
const Right = styled.div`
width: 50%;
position: relative;

img{
    width: 100%;
    height: auto;
}

.smallImage1{
    position: absolute;
    right: 70%;
    bottom: 10%;
    width: 40%;
}

.smallImage2{
    position: absolute;
    left: 85%;
    bottom: 20%;
    width: 40%;
}
`

const About = () => {
  return (
    <Section id='about'>
        <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
            About Us
        </Title>
        <Left >
            The Sparks Bank was created by OmarElKordy. This website was created during the internship in
            Web Development and Designing at
            <a href='https://www.thesparksfoundationsingapore.org' target="_blank" rel="noreferrer noopener"> The Sparks Foundation </a> 
             in its Graduate Rotational Internship Program (GRIP). It is the largest financial institution in Singapore,
            with branches and subsidaries all over the world. 
            <br/> <br/>
            Sparks Bank provides a comprehensive array of 
            financial solutions developed by a highly-qualified group of professional corporate bankers to serve
            your institution which includes working capital finance, capital equipment finance, trade finance,
            cash management, project finance, and treasury products. 
            <br/> <br/>
            Corporate clients are treated as partners
            to achieve a mutually beneficial business relationship based on trust and transparency.
        </Left>
        <Right>
            <img src={MoneyTransfer} alt="money transfer"/>
            <img data-scroll data-scroll-speed="0.5" data-scroll-direction="horizontal" src={Wallet} alt="wallet" className='smallImage1'/>
            <img data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" src={Handshake} alt="handshake" className='smallImage2'/>
        </Right>
    </Section>
  )
}

export default About