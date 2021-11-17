import '@/components/button/button';
import '@/components/map/map';
import Carousel from '@/components/carousel/carousel';

import './style.scss';

document.addEventListener('DOMContentLoaded', function() {
  const carouselContainer = document.querySelector('.js-carousel');
  const carosuel = new Carousel(carouselContainer);
});