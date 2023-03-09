import './style.css';

function header() {
    const header = document.createElement('header');
    const logo = document.createElement('span');
    const nav = document.createElement('nav');
    const container = document.createElement('div');

    const menuUl = document.createElement('ul');
    const tabs = ['home', 'menu', 'contact'];

    tabs.forEach(tab => {
        const t = document.createElement('li');
        t.innerText = tab.charAt(0).toUpperCase() + tab.slice(1);
        t.setAttribute('id', tab);
        return menuUl.appendChild(t);
    })

    logo.innerText = 'Restaurant';

    menuUl.setAttribute('id', 'main-menu');
    container.classList.add('container');

    header.appendChild(container);
    container.appendChild(logo);
    container.appendChild(nav);
    nav.appendChild(menuUl);

    return header;
}

export {
    header
}