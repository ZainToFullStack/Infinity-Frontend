import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import logos from "../../utils/data/logosdatarray.js";

// CSS Module for this component
import "../../styles/homepagemainsec7.css";

const Homesec7 = () => {
    return (
        <section className="logoSection">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    640: { slidesPerView: 2, spaceBetween: 30 },
                    768: { slidesPerView: 3, spaceBetween: 40 },
                    1024: { slidesPerView: 4, spaceBetween: 50 },
                }}
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className="logoCard">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={{ height: `${logo.height}px` }}
                                className="logoImg"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Homesec7;
