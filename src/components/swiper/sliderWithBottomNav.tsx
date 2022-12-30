import { Swiper } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

type Props = {
    children: React.ReactNode;
};

const SliderWithBottomNav = (props: Props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [prev, setPrev] = useState(prevRef.current);
    const [next, setNext] = useState(nextRef.current);

    useEffect(() => {
        setPrev(prevRef.current);
        setNext(nextRef.current);
    }, [prevRef, nextRef]);

    return (
        <div className="relative flex justify-center gap-3 px-4">
            <Swiper
                slidesPerView={1}
                cssMode={true}
                navigation={{
                    prevEl: prev,
                    nextEl: next,
                }}
                loop={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Mousewheel, Keyboard]}
            >
                {props.children}
            </Swiper>
            <div className="absolute bottom-0 z-10 flex items-center justify-between w-40 mx-auto">
                <div
                    ref={prevRef}
                    className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full cursor-pointer text-text"
                >
                    <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8 stroke-[3px]" />
                </div>
                <div
                    ref={nextRef}
                    className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full cursor-pointer text-text"
                >
                    <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8 stroke-[3px]" />
                </div>
            </div>
        </div>
    );
};

export default SliderWithBottomNav;
