// Day 1

const btnBurger = document.querySelector('.btn-burger'),
    catalog = document.querySelector('.catalog'),
    btnClose = document.querySelector('.btn-close'),
    subCatalog = document.querySelector('.subcatalog'),
    subcatalogHeader = document.querySelector('.subcatalog-header'),
    btnReturn = document.querySelector('.btn-return');

const createOverlay = param => {
    const overlay = document.createElement('div');

    overlay.classList.add('overlay');
    document.body.insertAdjacentElement('beforeend', overlay);
} 

const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
    document.querySelector('body').style.overflow = "hidden";
};

const closeMenu = () => {
    closeSubMenu();
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    document.querySelector('body').style.overflow = "auto";
};

const openSubMenu = e => {
    e.preventDefault();
    const itemList = e.target.closest('.catalog-list__item');

    console.log(itemList);
    
    if (itemList) {
        subcatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
    };
};

const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
}

createOverlay();

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);
