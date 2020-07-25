import React from 'react';
import { Container, Col} from 'reactstrap';
import img1 from '../images/iphone.png';

const Homebody = (props) => {
    return (
        <>
        <Container className="main">
            <section className="info">
                <h2>AYO MUSIC </h2>
                <p>The Best Musical Experience You Can Ever Have .</p>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
            </section>
        </Container>

            <Container className="download-btn">
                <Container className="main">
                    <Col className="phone">
                        <img src={img1} alt="Iphone Mockup" />
                    </Col>
                </Container>

                <h3>Download Our Amazing AYO Music App</h3>
                <button className="app-btn">Download <i class="fab fa-app-store"></i></button>
                <button className="app-btn">Download <i class="fab fa-google-play"></i></button>
            </Container>
        
        </>
    );
}


export default Homebody;
