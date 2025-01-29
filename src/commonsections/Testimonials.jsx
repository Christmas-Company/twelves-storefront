import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO at Company A",
      testimonial: "This company did an amazing job with our project. Highly recommend!",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    // More testimonials...
  ];

  return (
    <div className="testimonial-slider">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <Swiper
        modules={[Navigation, Pagination]} // Make sure modules are properly passed here
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-slide">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.testimonial}</p>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-title">{testimonial.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
