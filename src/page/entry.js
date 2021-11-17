import '@/components/button/button';
import '@/components/map/map';
import Carousel from '@/components/carousel/carousel';
import Modal from '@/components/modal/modal';

import './style.scss';

document.addEventListener('DOMContentLoaded', function() {
  const carouselContainer = document.querySelector('.js-carousel');
  const carosuel = new Carousel(carouselContainer);

  const modalRating = document.querySelector('#rating-modal');
  const modal = new Modal(modalRating);
});