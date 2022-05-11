import { cats } from '../cat-data.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);
const cat = findById(params.get('id'), cats);

const catName = document.getElementById('cat-name');
catName.textContent = cat.name;

const catImg = document.createElement('img');
catImg.src = `../assets/${cat.name}.png`;

const p = document.createElement('p');
p.textContent = `${cat.name} is ${cat.age} year(s) old and likes ${cat.likes}`;

catName.append(catImg, p);