import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import React from "react";
import { NavLink } from "react-router-dom";
import formatMoney from "../utils/formatMoney";
import formatDiscount from "../utils/formatDiscount";

const ProductSlider = ({ slides }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          967: {
            slidesPerView: 3,
          },
          1210: {
            width: 1210,
            slidesPerView: 4,
          },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      >
        <div>
          <div className="popular-items index-catalog">
            <div className="popular-items__container container">
              <div className="items__header">
                <div className="popular-items__header">
                  <h2 className="popular-items__title">Каталог</h2>
                  <p className="popular-items__subtitle">
                    Безопасность твоего компьютера начинается с лицензионного
                    Windows
                  </p>
                </div>
                <input
                  type="search"
                  className="popular-items__search"
                  placeholder="Поиск"
                />
              </div>
              <div className="popular-items-list">
                {slides.map((slide) => {
                  return (
                    <SwiperSlide key={slide.id}>
                      <NavLink
                        to={`/catalog/${slide.id}`}
                        state={{ from: slide }}
                        key={slide.id}
                      >
                        <div className="popular-items-item">
                          <div className="popular-items-list-item__img">
                            <img src={slide.img} alt="img" />
                          </div>
                          <div className="popular-items-list__content">
                            <div className="popular-items-list__discount">
                              {formatMoney(slide.price)}
                            </div>
                            <div className="popular-items-list__price">
                              {formatDiscount(slide.price, slide.discount)}
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </SwiperSlide>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Swiper>
      <div className="popular-items__lines">
        <div>
          <button
            className="popular-items__prev button-reset"
            ref={navigationPrevRef}
          >
            <svg
              width="42"
              height="20"
              viewBox="0 0 42 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.11612 9.11612C0.62796 9.60428 0.62796 10.3957 1.11612 10.8839L9.07107 18.8388C9.55922 19.327 10.3507 19.327 10.8388 18.8388C11.327 18.3507 11.327 17.5592 10.8388 17.0711L3.76777 10L10.8388 2.92893C11.327 2.44078 11.327 1.64932 10.8388 1.16117C10.3507 0.673013 9.55922 0.673013 9.07107 1.16117L1.11612 9.11612ZM42 8.75L2 8.75L2 11.25L42 11.25L42 8.75Z"
                fill="#18181A"
              />
            </svg>
          </button>
        </div>
        <div>
          <button
            className="popular-items__next button-reset"
            ref={navigationNextRef}
          >
            <svg
              width="42"
              height="20"
              viewBox="0 0 42 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.8839 9.11612C41.372 9.60428 41.372 10.3957 40.8839 10.8839L32.9289 18.8388C32.4408 19.327 31.6493 19.327 31.1612 18.8388C30.673 18.3507 30.673 17.5592 31.1612 17.0711L38.2322 10L31.1612 2.92893C30.673 2.44078 30.673 1.64932 31.1612 1.16117C31.6493 0.673013 32.4408 0.673013 32.9289 1.16117L40.8839 9.11612ZM1.09278e-07 8.75L40 8.75L40 11.25L-1.09278e-07 11.25L1.09278e-07 8.75Z"
                fill="#18181A"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
