export function findById(id, data) {
    return data.find((item) => item.id === id);
}

export function renderCat(cat) {
    const div = document.createElement('div');
    div.classList.add('cat');

    const img = document.createElement('img');
    img.src = `./assets/${cat.name}.png`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = cat.name;
    nameSpan.classList.add('name');

    const a = document.createElement('a');
    a.href = `./catStart/?id=${cat.id}`;

    // const span = document.createElement('span');
    // span.textContent = cat.likes;

    a.append(img, nameSpan);
    div.append(a);
    return div;

    // const p = document.createElement('p');
    // p.textContent = `${cat.name} is ${cat.age} year(s) old and likes ${cat.likes}`;

}