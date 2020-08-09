import './../styles/style.css';
import mainPage from './../view/index.html';
import Article1 from '../view/articles/article1.html';
import Article2 from '../view/articles/article2.html';

const changeInnerMain = (htmlString) => {
  const main = document.getElementsByTagName('main')[0];
  main.innerHTML = htmlString;
  window.scrollTo(0, 0)
}

changeInnerMain(mainPage);

const articleLinker = (() => {
  const articlePages = [Article1, Article2];
  const articleLinks = document.getElementsByClassName('article-links');
  articlePages.forEach((page, index) => {
    articleLinks[index].addEventListener('click', () => {
      const page = articlePages[index];
      changeInnerMain(page);
    })
  })
})()

const menu = (() => {
  const ul = document.getElementsByClassName('menu-list')[0];
  const title = document.getElementsByClassName('menu-title')[0];

  const show = () => {
    ul.style.display = 'block';
    title.style.display = 'block';
  }

  const hide = () => {
    ul.style.display = 'none';
    title.style.display = 'none';
  }

  if (window.screen.width < 768) {
    hide()
  } else {
    show()
  }

  const action = () => {
    if (ul.style.display !== 'none') {
      hide();
    } else {
      show();
    }
  }
  return {
    action
  }
})()

const navListeners = (() => {
  const mainPageLink = document.getElementsByClassName('main-page')[0];
  mainPageLink.addEventListener('click', () => {
    changeInnerMain(mainPage);
  })

  const snowMenuButton = document.getElementsByClassName('snow-menu')[0];
  snowMenuButton.addEventListener('click', () => {
    menu.action();
  })
})()