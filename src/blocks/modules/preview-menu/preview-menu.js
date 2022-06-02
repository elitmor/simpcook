const tabsParent = document.querySelector('.tabs__items');
const tabs = document.querySelectorAll('.tabs__item');
const tabsContent = document.querySelectorAll('.tabs__content');

const hideTabsContent = () => {
  tabsContent.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
  });

  tabs.forEach(item => {
    item.classList.remove('tabs__item_active');
  });
};

const showTabContent = (i = 0) => {
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabs[i].classList.add('tabs__item_active');
};
hideTabsContent();
showTabContent();

tabsParent.addEventListener('click', e => {
  const target = e.target;

  if (target && target.classList.contains('tabs__item')) {
    tabs.forEach((item, i) => {
      if (target === item) {
        hideTabsContent();
        showTabContent(i);
      }
    });
  }
});
