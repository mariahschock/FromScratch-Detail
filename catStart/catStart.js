import { cats } from '../cat-data.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);
const cat = findById(params.get('id'), cats);

const catName = document.getElementById('cat-name');
catName.textContent = cat.name;

catName.append;