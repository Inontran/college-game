import './carousel.scss';

class Carousel {
  _carouselContainer;
  _stage;
  _stageWrapper;
  _prevBtn;
  _nextBtn;
  _scrollStep = 30;

  constructor(carouselContainer) {
    this._carouselContainer = carouselContainer;
    this._init();
  }

  prevSlide() {
    this._stageWrapper.scrollLeft -= this._scrollStep;
  }

  nextSlide() {
    this._stageWrapper.scrollLeft += this._scrollStep;
  }

  _init() {
    this._wrapCarouselChildren();
    this._createNavBtns();

    this._bindEventListeners();
    this._addEventListeners();
  }
  
  _wrapCarouselChildren() {
    this._stage = document.createElement('div');
    this._stage.classList.add('carousel__stage');
    
    const arrayCarouselChildren = [];
    for (const item of this._carouselContainer.children) {
      arrayCarouselChildren.push(item);
    };
    
    let itemWrapper;
    arrayCarouselChildren.forEach((item) => {
      itemWrapper = document.createElement('div');
      itemWrapper.classList.add('carousel__item');
      itemWrapper.append(item);
      this._stage.append(itemWrapper);
    });
    
    this._stageWrapper = document.createElement('div');
    this._stageWrapper.classList.add('carousel__stage-wrapper');
    this._stageWrapper.append(this._stage);
    this._carouselContainer.append(this._stageWrapper);

    this._scrollStep = itemWrapper.clientWidth;
  }
  
  _createNavBtns() {
    const navContainer = document.createElement('div');
    navContainer.classList.add('carousel__nav');
    this._carouselContainer.append(navContainer);
  
    this._prevBtn = document.createElement('button');
    this._prevBtn.classList.add('carousel__prev-btn');
    this._prevBtn.type = 'button';
    navContainer.append(this._prevBtn);
  
    this._nextBtn = document.createElement('button');
    this._nextBtn.classList.add('carousel__next-btn');
    this._nextBtn.type = 'button';
    navContainer.append(this._nextBtn);
  }

  _bindEventListeners() {
    this._handlePrevBtnPointerdown = this._handlePrevBtnPointerdown.bind(this);
    this._handleNextBtnPointerdown = this._handleNextBtnPointerdown.bind(this);
  }

  _addEventListeners() {
    this._prevBtn.addEventListener('pointerdown', this._handlePrevBtnPointerdown);
    this._nextBtn.addEventListener('pointerdown', this._handleNextBtnPointerdown);
  }

  _handlePrevBtnPointerdown() {
    this.prevSlide();
  }

  _handleNextBtnPointerdown() {
    this.nextSlide();
  }
}

export default Carousel
