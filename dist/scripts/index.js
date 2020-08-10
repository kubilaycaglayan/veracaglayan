import './../styles/style.css';
import homePage from './../view/index.html';
import Article1 from '../view/articles/article1.html';
import Article2 from '../view/articles/article2.html';

const changeInnerMain = htmlString => {
  const main = document.getElementsByTagName('main')[0];
  main.innerHTML = htmlString;
}

const fillMain = htmlString => {
  if(htmlString !== mainPage) {
    fillArticle(htmlString)
  } else {
    fillHome();
  }
  window.scrollTo(0, 0);
}

const fillArticle = htmlString => {
  changeInnerMain(htmlString);
  navListeners.listenReturnButtons();
}

const fillHome = () => {
  changeInnerMain(homePage);
  setTimeout(() => {
    menu.makeNavWrapperHeightEqToContent();

  }, 0)
}

fillHome();

const articleLinker = (() => {
  const articlePages = [Article1, Article2];
  const articleLinks = document.getElementsByClassName('article-links');
  articlePages.forEach((page, index) => {
    articleLinks[index].addEventListener('click', () => {
      const page = articlePages[index];
      fillMain(page);
    })
  })
})()

const menu = (() => {
  const ul = document.getElementsByClassName('menu-list')[0];
  const title = document.getElementsByClassName('menu-title')[0];

  const makeNavWrapperHeightEqToContent = () => {
    const content = document.getElementsByClassName('content')[0];
    const contentHeight = window.getComputedStyle(content).height;
    const navWrapper = document.getElementsByClassName('nav-wrapper')[0];
    navWrapper.style.height = contentHeight;
  }

  const show = () => {
    ul.style.display = 'block';
    title.style.display = 'block';
  }

  const hide = () => {
    ul.style.display = 'none';
    title.style.display = 'none';
  }

  if (window.screen.width < 992) {
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
    action,
    makeNavWrapperHeightEqToContent,
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

  const listenReturnButtons = () => {
    const returnButtons = document.getElementsByClassName('return-button');
    for (let i = 0; i < returnButtons.length; i += 1) {
      returnButtons[i].addEventListener('click', () => {
        changeInnerMain(mainPage);
      })
    }
  }
  return {
    listenReturnButtons
  }
})()

