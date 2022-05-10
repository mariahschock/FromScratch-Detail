export function findById(id, data) {
    return data.find((item) => item.id === id);
}

export function renderCat(cat) {
    const a = document.createElement('a');
    a.href = `./cats/index.html?id=${cat.id}`;
    const div = document.createElement('div');
    div.classList.add('cat');

    const img = document.createElement('img');
    img.src = `./assets/${cat.name}.png`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = cat.name;
    nameSpan.classList.add('name');

    // const span = document.createElement('span');
    // span.textContent = cat.likes;

    a.append(div);
    div.append(img, nameSpan);
    return a;

    // const p = document.createElement('p');
    // p.textContent = `${cat.name} is ${cat.age} year(s) old and likes ${cat.likes}`;

}