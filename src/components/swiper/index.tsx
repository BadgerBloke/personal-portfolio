import { Swiper } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Mousewheel, Keyboard, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

type Props = {
    children: React.ReactNode;
};

const Slider2 = (props: Props) => {
    SwiperCore.use([Autoplay, Navigation, Mousewheel, Keyboard, Pagination]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [prev, setPrev] = useState(prevRef.current);
    const [next, setNext] = useState(nextRef.current);

    useEffect(() => {
        setPrev(prevRef.current);
        setNext(nextRef.current);
    }, [prevRef, nextRef]);

    return (
        <div className="relative flex items-center justify-center w-full gap-3">
            <div
                ref={prevRef}
                className="z-10 flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full cursor-pointer -mt-[15%] text-text"
            >
                <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8 stroke-[3px]" />
            </div>
            <Swiper
                slidesPerView="auto"
                navigation={{
                    prevEl: prev,
                    nextEl: next,
                }}
                loop={true}
                loopedSlides={3}
                loopAdditionalSlides={3}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {props.children}
            </Swiper>
            <div
                ref={nextRef}
                className="z-10 flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full cursor-pointer -mt-[15%] text-text"
            >
                <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8 stroke-[3px]" />
            </div>
        </div>
    );
};

export default Slider2;
