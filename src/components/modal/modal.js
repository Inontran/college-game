import './modal.scss';

class Modal {
  _modalContainer;
  _closeBtns;

  constructor(modalContainer) {
    this._modalContainer = modalContainer;
    this._init();
  }

  show() {
    this._modalContainer.classList.add('modal_opened');
  }

  hide() {
    this._modalContainer.classList.remove('modal_opened');
  }

  _init() {
    this._closeBtns = this._modalContainer.querySelectorAll('.js-modal__close-btn .js-button');

    this._bindEventListeners();
    this._addEventListeners();
  }

  _bindEventListeners() {
    this._handleCloseBtnPointerdown = this._handleCloseBtnPointerdown.bind(this);
    this._handleModalPointerdown = this._handleModalPointerdown.bind(this);
  }

  _addEventListeners() {
    this._modalContainer.addEventListener('pointerdown', this._handleModalPointerdown);

    this._closeBtns.forEach(btn => {
      btn.addEventListener('pointerdown', this._handleCloseBtnPointerdown);
    });
  }

  _handleCloseBtnPointerdown() {
    this.hide();
  }

  _handleModalPointerdown(event) {
    const hasClassWrapper = event.target.classList.contains('modal__wrapper');
    const isChildModalWrapper = event.target.closest('.modal__wrapper');
    const doHideModal = !hasClassWrapper && !isChildModalWrapper;
    if (doHideModal){
      this.hide();
    }
  }
}

export default Modal
