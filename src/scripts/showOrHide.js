export const menu = (() => {
  const nav = document.getElementsByClassName('nav-wrapper')[0];
  let showTimeOut;

  const show = () => {
    clearTimeout(showTimeOut);
    nav.style.display = 'block';
    showTimeOut = setTimeout(() => {
      hide()
    }, 4000)
  }

  const hide = () => {
    nav.style.display = 'none';
  }

  const showOrHide = () => {
    if (window.getComputedStyle(nav).display !== 'none') {
      hide();
    } else {
      show();
    }
  }
  return {
    showOrHide,
  }
})()
