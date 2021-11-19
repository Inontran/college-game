import '@/components/button/button';
import '@/components/map/map';
import Carousel from '@/components/carousel/carousel';
import Modal from '@/components/modal/modal';
import Table from '@/components/table/table';
import Personage from '@/components/personage/personage';

import data from './data';
import './index.scss';

document.addEventListener('DOMContentLoaded', function() {
  const carouselContainer = document.querySelector('.js-carousel');
  const carosuel = new Carousel(carouselContainer);

  const modalContainer = document.querySelector('#rating-modal');
  const modal = new Modal(modalContainer);
  
  const btnOpenRating = document.querySelector('.js-main-window__btn-open-rating .js-button');
  btnOpenRating.addEventListener('pointerdown', () => {
    modal.show();
  });

  const tableContainer = document.querySelector('.js-table');
  const table = new Table(tableContainer);
        table.fillTable(data);

  const personageContainer = document.querySelector('.js-personage');
  const personage = new Personage(personageContainer);

  const btnMovingPersonage = document.querySelector('.js-main-window__moving-btn .js-button');
  btnMovingPersonage.addEventListener('pointerdown', () => {
    personage.goNextPoint();
  });

  personage.addEventListener('start-moving', () => {
    btnMovingPersonage.disabled = true;
  });

  personage.addEventListener('stop-moving', () => {
    btnMovingPersonage.disabled = false;
  });
});