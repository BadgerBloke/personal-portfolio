import TestimonialCard from "@components/cards/testimonialCard";
import SectionSubTitle from "@components/headings/sectionSubTitle";
import SectionTitle from "@components/headings/sectionTitle";
import SliderWithBottomNav from "@components/swiper/sliderWithBottomNav";
import { testimonials } from "@data/testimonials";
import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";

type Props = {
    themeName?: string;
};

const Testimonials = (props: Props) => {
    return (
        <section
            id="testimonials"
            className="relative flex flex-col items-center w-full py-10 lg:mb-10"
        >
            <SectionTitle>Testimonials</SectionTitle>
            <SectionSubTitle>My client sayings</SectionSubTitle>

            <div className="w-full">
                <SliderWithBottomNav>
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard
                                key={index}
                                description={testimonial.description}
                                name={testimonial.name}
                                role={testimonial.role}
                            />
                        </SwiperSlide>
                    ))}
                </SliderWithBottomNav>
            </div>
            <div className="absolute top-20 -right-12">
                <div className="relative w-16 rotate-[25deg] lg:w-48 lg:top-40 lg:right-16 aspect-1 opacity-10">
                    <Image
                        src="/img/shape-wawes.svg"
                        alt="Wawes shape"
                        fill
                        sizes="100%"
                        className={`${
                            props.themeName === "dark-theme"
                                ? "filter invert"
                                : ""
                        }`}
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
