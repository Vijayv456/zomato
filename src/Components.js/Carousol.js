import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import phon from './images/phonezomato.avif'
import pn from './images/zomatoicon.avif'
class DemoCarousel extends React.Component{
    render() {
        return (
            <Carousel   swipeable={true} swipeScrollTolerance={5}>
                <div>
                    <img src={phon} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={pn} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={phon} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel