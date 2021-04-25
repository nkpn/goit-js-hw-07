// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counter = 0;

const countEl = document.getElementById('value');

const addFunc = (event) => {
    counter += 1;
    countEl.innerHTML = counter;
}

const minusFunc = (event1) => {
    counter -= 1;
    countEl.innerHTML = counter;
}

const buttonPlusEl = document.querySelector('[data-action="increment"]');
buttonPlusEl.addEventListener('click', addFunc);

const buttonMinusEl = document.querySelector('[data-action="decrement"]');
buttonMinusEl.addEventListener('click', minusFunc);






