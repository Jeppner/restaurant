import _ from 'lodash';
import './style.css';
import { header } from './header';

function component() {
    const container = document.createElement('div');
    const element = document.createElement('div');
    
    container.classList.add('container');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    document.body.appendChild(container);
    container.appendChild(element);

    return container;
  }
  
  document.body.appendChild(header());
  document.body.appendChild(component());