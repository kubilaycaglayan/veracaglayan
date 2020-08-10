import { menu } from './showOrHide';

const components = (() => {
  const snowMenuButton = document.getElementsByClassName('snow-menu-button')[0];

  return {
    snowMenuButton
  }
})();

const eventListeners = (() => {
  components.snowMenuButton.addEventListener('click', () => {
    menu.showOrHide();
  })
})()