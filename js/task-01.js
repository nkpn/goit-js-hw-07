const listEl = document.querySelectorAll('.item');

// console.log(listEl);

const itemQuantity = listEl.length;

console.log(`В списке ${itemQuantity} категории.`)


for (let i = 0; i < listEl.length; i++) {
    const heading = listEl[i].querySelector('h2');
    console.log(heading.textContent);

    const liQuantity = listEl[i].querySelectorAll('li').length;
    console.log(`Количество элементов: ${liQuantity}`)
}