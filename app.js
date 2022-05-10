import { cats } from './cat.data.js';
import { renderCat } from './utils.js';

const catSec = document.getElementById('cats');

for (let cat of cats) {
    catSec.append(renderCat(cat));
}