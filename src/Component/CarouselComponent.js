import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';



const items = [
    {
        src: image1,
        altText: 'Slide 1',
        caption: 'Epic Music',
        header: 'Slide 1 Header',
        key: '1'
    },
    {
        src: image2,
        altText: 'Slide 2',
        caption: 'Epic Music',
        header: 'Slide 2 Header',
        key: '2'
    },
    {
        src: image3,
        altText: 'Slide 3',
        caption: 'Epic Music',
        header: 'Slide 3 Header',
        key: '3'
    }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;