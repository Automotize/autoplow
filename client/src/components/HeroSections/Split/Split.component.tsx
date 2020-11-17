import React from 'react';

import Heading from '../../Heading';

import Text from '../../Text';

import Button from '../../Button';

import { Props } from './Split.types';

import SwiperCore, { Navigation, A11y, Autoplay, Lazy, Keyboard } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/a11y/a11y.scss';
import 'swiper/components/lazy/lazy.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, A11y, Autoplay, Lazy, Keyboard]);

const Split: React.FC<Props> = ({
  title1,
  title2,
  description,
  images,
  color,
  button1,
  button2,
}) => {
  return (
    <div className="hero-sections-split">
      <div className="hero-sections-split__content">
        <div className="hero-sections-split__heading">
          <h1 className="hero-sections-split__header1">
            {title1}&nbsp;<span className={`color-${color}-600`}>{title2}</span>
          </h1>
        </div>
        <div className="hero-sections-split__description">
          <Text color="gray-500" size="lg">
            {description}
          </Text>
        </div>
        <div className="hero-sections-split__buttons">
          <Button size="xxl" color="white" bg={`${color}-600`}>
            {button1}
          </Button>
          <Button size="xxl" color={`${color}-600`} bg="white">
            {button2}
          </Button>
        </div>
      </div>
      <div className="hero-sections-split__slider">
        <Swiper
          tag="section"
          containerModifierClass="swiper-container-homepage-"
          wrapperTag="ul"
          lazy={{
            loadPrevNext: true,
            // amount of images to load
            loadPrevNextAmount: 2,
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          preloadImages={false}
          navigation={true}
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
        >
          {images.map(({ id, image }) => (
            <SwiperSlide key={id} tag="li">
              <img src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Split;
