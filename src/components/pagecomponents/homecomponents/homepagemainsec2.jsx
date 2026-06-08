import React from "react";
import "../../styles/homepagemainsec2.css";
import itservices from "../../utils/data/services.data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Homesec2() {
    return (
        <section className="works-section">
            {/* Header */}
            <div className="works-header">
                <span className="line"></span>
                <h2>Works We Do</h2>
                <span className="line"></span>
            </div>

            <p className="works-intro">
                We provide a wide range of IT and digital services designed to help your business grow and succeed in a modern, digital-first world.
            </p>

            {/* Swiper Cards */}
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    2560: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}
            >
                {itservices.map((service) => (
                    <SwiperSlide key={service.id}>
                        <div className="single-card">
                            <div className="card-image">
                                <div className="service_img">
                                    <img src={service.img} alt={service.title} />
                                </div>
                            </div>

                            <div className="card-text">
                                <div className="icon-circle">
                                    <i className={service.iconClass}></i>
                                </div>

                                <h3>{service.title}</h3>
                                <p>{service.text}</p>

                                <div className="border-turquoise"></div>

                                <a href="#" className="text-turquoise">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Homesec2;
