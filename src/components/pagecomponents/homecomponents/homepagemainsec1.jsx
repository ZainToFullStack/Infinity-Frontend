import "../../styles/homepagemainsec1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { NavLink } from "react-router-dom";
import { homeSlides } from "../../utils/data/arraydataforscreenhome.js";

function Homesec() {
    return (
        <div className="home-slider-wrapper">

            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={1600}

                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}

                className="home-swiper"
            >

                {homeSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>

                        <div
                            className="page"
                            style={{
                                backgroundImage: `url(${slide.background})`,
                            }}
                        >

                            {/* Premium Overlay */}
                            <div className="overlay"></div>

                            {/* Content */}
                            <div
                                className={`content align-${slide.layout.contentAlign}`}
                            >

                                {/* Hero Text */}
                                <div className="hero-text">

                                    <h1>{slide.heading}</h1>

                                    <p>{slide.subheading}</p>

                                </div>

                                {/* Steps */}
                                <div className="steps">

                                    {slide.steps.map((step, index) => (

                                        <div
                                            key={index}
                                            className="step-wrapper"
                                        >

                                            <div className="step">
                                                {step}
                                            </div>

                                        </div>

                                    ))}

                                </div>

                                {/* Buttons */}
                                <div
                                    className={`button-group ${slide.layout.buttonsAlign}`}
                                >

                                    {slide.buttons.map((btn, i) => (

                                        <NavLink
                                            key={i}
                                            to={btn.link || "#"}
                                            className="read-more"
                                        >

                                            {btn.text}

                                            <span>→</span>

                                        </NavLink>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>

            {/* Premium Pagination */}
            <div className="custom-pagination"></div>

        </div>
    );
}

export default Homesec;