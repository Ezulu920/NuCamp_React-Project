import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardGroup, CardFooter, Button } from 'reactstrap';



const Example = (props) => {
    return (
        <div>
            <CardGroup>
                <Card>
                    <CardImg variant="top" src="holder.js/100px160" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <Button>Button</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardImg variant="top" src="holder.js/100px160" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>
                            This card has supporting text below as a natural lead-in to additional
        content.{' '}
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <Button>Button</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardImg variant="top" src="holder.js/100px160" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <Button>Button</Button>
                    </CardFooter>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Example;