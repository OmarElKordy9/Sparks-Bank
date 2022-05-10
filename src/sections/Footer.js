import { motion } from 'framer-motion';
import React from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled from 'styled-components'
import SparksLogo from '../assets/logo.png';
import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import { Link } from 'react-router-dom';


const Section = styled.section`
min-height: 40vh;
width: 100vw;
margin: 5rem auto;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
font-family: "Audiowide";
font-weight: 300;
position: absolute;
top: 1rem;
left: 5%;
z-index: 5;

@media only Screen and (max-width: 70em){
    font-size: 4rem;
}
@media only Screen and (max-width: 55em){
    font-size: 3rem;
}
@media only Screen and (max-width: 35em){
    font-size: 2rem;
    }
`
const Logo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width: 5vw;
    height: auto;
    margin: 3rem;

@media only Screen and (max-width: 70em){
    margin-top: 4rem;
}
}

h3{
    font-size: ${props => props.theme.fontlg};
    font-family: 'Audiowide';

@media only Screen and (max-width: 70em){
    font-size: ${props => props.theme.fontmd};
}
}
`
const FooterComponent = styled(motion.footer)`
width: 80vw;
margin-left: auto;
margin-right: auto;

ul{
    list-style-type:  none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid;
    border-bottom: 1px solid;
    color: white;
}

a{
    text-decoration: none;
    color: white;
}

li{
    padding: 2rem;
    font-size: ${props => props.theme.fontmd};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

 @media only Screen and (max-width: 54em){
    font-size: ${props => props.theme.fontxs};
}
@media only Screen and (max-width: 46em){
    font-size: ${props => props.theme.fontxs};
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
@media only Screen and (max-width: 40em){
    font-size: ${props => props.theme.fontxs};
    padding-left: 0.3rem;
}
@media only Screen and (max-width: 30em){
    font-size: ${props => props.theme.fontxs};
    padding-left: 0.1rem;
}

    &:hover{
        transform: scale(1.1);
        font-weight: 500;
    }
}
`
const Bottom = styled.div`
width: 70vw;
padding: 0.5rem, 0;
margin: 0 4rem;
margin-bottom: 2rem;
font-size: ${props => props.theme.fontmd};
display: flex;
justify-content: space-evenly;
align-items: center;
text-align: center;

.copyrights{
    font-size: ${props => props.theme.fontmd};

    @media only Screen and (max-width: 39em){
    font-size: ${props => props.theme.fontsm};
}
}

.myName{
    color: yellow;
}
`
const SocialMedia = styled.div`
display: flex;
align-items: center;

img{
    width: 2.5em;
    height: auto;
    margin-left: 1rem;
    transition: all 0.3s ease;

@media only Screen and (max-width: 70em){
    width: 1.875em;
}

    &:hover{
        transform: scale(1.2);
    }
}
div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
`

const Footer = () => {

    const {scroll} = useLocomotiveScroll();

    const handleScroll = (id) => {
        let element = document.querySelector(id);

        scroll.scrollTo(element,
            {
                offset: '-100',
                duration: '2000',
                easing: [0.25, 0, 0.35, 1]
            })
    }

  return (
    <Section>
        <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
            Reach out!
        </Title>
        <Logo>
            <img data-scroll data-scroll-speed="2" src={SparksLogo} alt ="Sparks Logo"/>
            <h3 data-scroll data-scroll-speed="-1">Sparks Bank</h3>
        </Logo>
        <FooterComponent
        initial={{y:"-400px"}}
        whileInView={{y:0}}
        viewport={{once:false}}
        transition={{duration:1.5}}
        >
            <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/users'>Users</Link>
            </li>
            <li>
                <Link to='/transactions'>Transactions</Link>
            </li>
            </ul>
        </FooterComponent>
        <Bottom>
            <div className='copyrights' data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">&copy; {new Date().getFullYear()}. <span className='myName'>OmarElKordy.</span> All Rights Reserved.</div>
            <SocialMedia data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
                <a href='https://www.linkedin.com/in/omar-elkordy-a38510222' target="_blank" rel="noreferrer noopener"><img src={Linkedin} alt="linkedin"/></a>
                <a href='https://github.com/OmarElKordy9' target="_blank" rel="noreferrer noopener"><img src={Github} alt="github"/></a>
            </SocialMedia>
        </Bottom>
    </Section>
  )
}

export default Footer