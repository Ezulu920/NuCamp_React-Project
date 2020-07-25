import React from 'react';
import { Container,  Card,  } from 'reactstrap';

const Features = (props) => {
    return (
        <>
            <Container className="container-fluid">
                <Card className="card-body">
                <h3 className="card-title"> Unlimited Music</h3>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy </p>
            </Card>

            <Card className="card-body">
                <h3 className="card-title">Awesome Artists </h3>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy </p>
            </Card>

            <Card className="card-body">
                <h3 className="card-title"> Customer Playlist</h3>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy</p>
            </Card>
        </Container>
        </>
    );
}


export default Features;
