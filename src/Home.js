import React from 'react'
import { Container} from '@material-ui/core'
import Carousel from 'react-bootstrap/Carousel'


export const Home = ({pallete, fonts}) => { 
    return (
        <>
            <h1 style={{fontFamily: fonts.title, color: pallete.contrastText}}>
                Featured
            </h1>
            <Carousel>
            <Carousel.Item style={{'height':"400px"}}>
                <img
                className="d-block w-100"
                src={require("./images/carousel.png")}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':"400px"}}>
                <img
                className="d-block w-100"
                src={require("./images/carousel.png")}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':"400px"}}>
                <img
                className="d-block w-100"
                src={require("./images/carousel.png")}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </>
    )
};

export default Home