import './personage.scss';

class Personage extends EventTarget {
  _personageContainer;
  _currentCoords = [444, 507];
  _currentPoint = 1;
  _coordiantes = [
    [[420,495], [402,473], [385,464], [368,467], [350,477]],
    [[336,487], [320,496], [301,506], [277,519]],
    [[263,528], [250,533], [240,535], [229,535], [216,538], [204,539], [189,539]],
    [[174,535], [160,534], [147,530], [135,524], [126,519], [110,511]],
    [[91,499], [84,490], [84,477], [95,468], [104,463], [117,453], [123,447]],
    [[115,430], [113,422], [118,410], [124,401], [134,396], [142,391]],
    [[154,383], [161,381], [167,377], [174,374], [181,369], [188,367], [193,364], [201,360], [214,354]],
    [[230,345], [236,339], [239,332], [239,324], [232,317], [223,310], [214,305], [204,298], [196,295], 
      [188,291], [176,283]],
    [[162,273], [148,266], [136,259], [128,253], [121,242], [127,235], [138,230]],
    [[158,222], [163,214], [158,206], [153,199], [154,190], [157,184], [169,180], [181,179], [192,186], [201,199]],
  ];

  constructor(personageContainer) {
    super();
    this._personageContainer = personageContainer;
    this._init();
  }

  goNextPoint() {
    if (!this._coordiantes[this._currentPoint-1]) {
      return;
    }

    this.dispatchEvent(new Event('start-moving'));
    
    let numberCoords = 0;
    const movingInterval = setInterval(() => {
      const position = this._coordiantes[this._currentPoint-1][numberCoords];
      if (position) {
        this._personageContainer.style.left = position[0] + 'px';
        this._personageContainer.style.top = position[1] + 'px';
        numberCoords += 1;
      } else {
        clearInterval(movingInterval);
        this._currentPoint += 1;
        this.dispatchEvent(new Event('stop-moving'));
      }
    }, 100);
  }

  _init() {
    this._personageContainer.style.left = this._currentCoords[0] + 'px';
    this._personageContainer.style.top = this._currentCoords[1] + 'px';
  }
}

export default Personage
