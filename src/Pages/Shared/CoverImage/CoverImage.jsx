import { Parallax } from "react-parallax";


const CoverImage = ({ img, title }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="Collection..."
                strength={-200}
            >
                <div className="hero h-[200px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-full">
                            <h1 className="mb-5 text-5xl font-sans font-extrabold uppercase">{title}</h1>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default CoverImage;