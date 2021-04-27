// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const listEl = document.querySelectorAll('.item');

// console.log(listEl);

const itemQuantity = listEl.length;

console.log(`В списке ${itemQuantity} категории.`)

// for (let i = 0; i < listEl.length; i++) {
//     const heading = listEl[i].querySelector('h2');
//     console.log(heading.textContent);

//     const liQuantity = listEl[i].querySelectorAll('li').length;
//     console.log(`Количество элементов: ${liQuantity}`)
// }

listEl.forEach(list => {
    const heading = list.querySelector('h2');
    console.log(heading.textContent);

    const liQuantity = list.querySelectorAll('li').length;
    console.log(`Количество элементов: ${liQuantity}`)
})

