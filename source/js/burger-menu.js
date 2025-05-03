import {
  mainHeader,
  burger,
  navList
} from './dom-elements';

const onBurgerClick = () => {
  mainHeader.classList.toggle('main-header--nav-is-opened');
};

const onNavListClick = (evt) => {
  if(evt.target.classList.contains('main-header__nav-link')) {
    mainHeader.classList.remove('main-header--nav-is-opened');
  }
};

burger.addEventListener('click', onBurgerClick);
navList.addEventListener('click', onNavListClick);
