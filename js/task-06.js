const input = document.getElementById('validation-input');
const inputLength = Number(input.dataset.length); //* длинна инпута

//* Было
// const unFocus = (event) => {
//     input.classList.add('invalid');
//     if (event.currentTarget.value.length === inputLength) {
//         input.classList.add('valid');
//         input.classList.remove('invalid');
//     }
// }

//* Стало
const unFocus = (event) => input.setAttribute('class', event.currentTarget.value.length === inputLength ? 'valid' : 'invalid');

input.addEventListener('blur', unFocus);
