import { cats } from './cat-data.js';
import { renderCat } from './utils.js';

const catListEl = document.getElementById('cats');

for (let cat of cats) {
    const catDiv = renderCat(cat);
    catListEl.append(catDiv);
}