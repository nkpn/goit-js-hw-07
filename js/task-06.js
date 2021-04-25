const input = document.getElementById('validation-input');
const inputLength = Number(input.dataset.length); //* длинна инпута

const unFocus = (event) => {
    input.classList.add('invalid');
    if (event.currentTarget.value.length === inputLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
}


input.addEventListener('blur', unFocus);
