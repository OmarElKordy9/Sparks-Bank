import React from 'react'
import styled from 'styled-components'
import MainVideo from '../assets/visa laptop.mp4';
import ScrollImg from '../assets/scroll-down.png';
import "@fontsource/audiowide"

const VideoConntaier = styled.section`
width: 100%;
height: 100vh;
position: relative;

video{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`
const DarkOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;

background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`}
`

const Title = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};

h1{
font-family: 'Audiowide';
font-size: ${props => props.theme.fontBig};
text-shadow: 1px 1px 1px ${props => props.theme.body};
}

h2{
    font-family: 'Montserrat';
    font-size: ${props => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    text-transform: capitalize;
    font-weight: 500;
    }

    div{
        display: flex;
        flex-direction: row;
    }

h3{
    font-family:'Montserrat';
    font-size:${props => props.theme.fontmd};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    text-transform: capitalize;
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 5em;
}
`

const CoverVideo = () => {
  return (
    <VideoConntaier>
        <DarkOverlay/>
        <Title>
            <div>
                <h1 data-scroll data-scroll-delay="0.12" data-scroll-speed="4">S</h1>
                <h1 data-scroll data-scroll-delay="0.11" data-scroll-speed="4">p</h1>
                <h1 data-scroll data-scroll-delay="0.10" data-scroll-speed="4">a</h1>
                <h1 data-scroll data-scroll-delay="0.09" data-scroll-speed="4">r</h1>
                <h1 data-scroll data-scroll-delay="0.08" data-scroll-speed="4">k</h1>
                <h1 data-scroll data-scroll-delay="0.07" data-scroll-speed="4">s</h1>
                <h1 data-scroll data-scroll-delay="0.06" data-scroll-speed="4">B</h1>
                <h1 data-scroll data-scroll-delay="0.05" data-scroll-speed="4">a</h1>
                <h1 data-scroll data-scroll-delay="0.04" data-scroll-speed="4">n</h1>
                <h1 data-scroll data-scroll-delay="0.03" data-scroll-speed="4">k</h1>
            </div>
            <h2 data-scroll data-scroll-delay="0.03" data-scroll-speed="2">Fast . Secure . No Fees</h2>
                <h3 data-scroll-speed="1">Scroll down</h3>
                <img data-scroll-speed="1" src={ScrollImg} alt="Scroll"/>
        </Title>
        <video src={MainVideo}     type="video/mp4"  autoPlay muted loop />
    </VideoConntaier>
  )
}

export default CoverVideo