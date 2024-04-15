import React from 'react'
import { Col, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import '../Css/home.css'

const Home = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <div className='sidebar'>
                        <p>TOP CATEGORIES</p>
                        <ul>
                            <li>
                                <img src="https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png" alt="" />
                            </li>
                            <li><img src="https://i2.sdlcdn.com/img/leftnavicon09/30x30home_living2.png" alt="" /></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home