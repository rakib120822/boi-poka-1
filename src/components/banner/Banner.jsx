import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Banner() {
  return (
    // wrapper ensures proper sizing and hides overflow
    <div className="relative w-full h-[300px] overflow-hidden">
      <Swiper
        style={{
          "--swiper-navigation-color": "red",
        }}
        speed={600}
        parallax={true}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        navigation={{
          prevEl: ".swiper-navigation-prev",
          nextEl: ".swiper-navigation-next",
        }}
        modules={[Parallax, Navigation]}
        className="mySwiper h-full"
      >
        {/* parallax background covers whole swiper, use 100% (not 100vw) */}
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:
              "url('https://as2.ftcdn.net/jpg/09/16/05/67/1000_F_916056755_rBOaw8YmynJDQAnkHFwH9pnq9I9TcSUz.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            position: "absolute",
            inset: 0, // top:0; right:0; bottom:0; left:0;
            width: "100%", // IMPORTANT: use 100%, NOT 100vw
            height: "100%",
            zIndex: -1,
          }}
          // reduce parallax amount so it doesn't move past edges
          data-swiper-parallax="-15%"
        ></div>

        {/* slides */}
        {[1, 2, 3].map((n) => (
          <SwiperSlide
            key={n}
            className="p-10 flex items-center justify-start h-full"
          >
            <div>
              <h2
                className="text-red-500 font-bold text-4xl"
                data-swiper-parallax="-120"
              >
                Slide {n}
              </h2>
              <p
                className="text-lg font-medium text-yellow-300 mt-4"
                data-swiper-parallax="-80"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                laoreet justo vitae porttitor.
              </p>
            </div>
          </SwiperSlide>
        ))}

        {/* navigation (outside Swiper in DOM is fine too; keep visible z) */}
        <div className="absolute z-20 top-1/2 left-4 transform -translate-y-1/2 swiper-navigation-prev cursor-pointer bg-black/40 px-3 py-2 rounded text-white">
          Prev
        </div>
        <div className="absolute z-20 top-1/2 right-4 transform -translate-y-1/2 swiper-navigation-next cursor-pointer bg-black/40 px-3 py-2 rounded text-white">
          Next
        </div>
      </Swiper>
    </div>
  );
}

export default Banner;
