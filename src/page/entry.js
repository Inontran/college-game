import '@/components/button/button';
import '@/components/map/map';
import Carousel from '@/components/carousel/carousel';
import Modal from '@/components/modal/modal';
import '@/components/table/table';

import './style.scss';

document.addEventListener('DOMContentLoaded', function() {
  const carouselContainer = document.querySelector('.js-carousel');
  const carosuel = new Carousel(carouselContainer);

  const modalRating = document.querySelector('#rating-modal');
  const modal = new Modal(modalRating);

  function handleBtnOpenRatingPointerdown() {
    modal.show();
  }

  const btnsOpenRating = document.querySelectorAll('.js-main-window__btn-open-rating .js-button');
  btnsOpenRating.forEach(btn => {
    btn.addEventListener('pointerdown', handleBtnOpenRatingPointerdown);
  });
});