import '@/components/button/button';
import '@/components/map/map';
import Carousel from '@/components/carousel/carousel';
import Modal from '@/components/modal/modal';
import Table from '@/components/table/table';

import data from './data';
import './style.scss';

document.addEventListener('DOMContentLoaded', function() {
  const carouselContainer = document.querySelector('.js-carousel');
  const carosuel = new Carousel(carouselContainer);

  const modalContainer = document.querySelector('#rating-modal');
  const modal = new Modal(modalContainer);

  function handleBtnOpenRatingPointerdown() {
    modal.show();
  }

  const btnOpenRating = document.querySelector('.js-main-window__btn-open-rating .js-button');
  btnOpenRating.addEventListener('pointerdown', handleBtnOpenRatingPointerdown);

  const tableContainer = document.querySelector('.js-table');
  const table = new Table(tableContainer);
        table.fillTable(data);
});