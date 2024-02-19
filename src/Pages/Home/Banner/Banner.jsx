import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className="pt-20">
            <Carousel className="text-center" autoPlay={true} interval={2000} infiniteLoop={true}>
                <div>
                    <img src="src/assets/images/Banner/banner-1.jpg" />
                </div>
                <div>
                    <img src="src/assets/images/Banner/banner-2.jpg" />
                </div>
                <div>
                    <img src="src/assets/images/Banner/banner-3.jpg" />
                </div>
            </Carousel >
        </div>
    );
};

export default Banner;