import React from 'react';
import { Container, Col,} from 'reactstrap';
import img1 from '../images/iphone.png';

const PhoneMockup = (props) => {
    return (
        <>
            <Container className="main">
                    <Col className="phone">
                        <img src={img1} alt="Iphone Mockup" />
                    </Col>
            </Container>
        </>
    );
}

export default PhoneMockup;
