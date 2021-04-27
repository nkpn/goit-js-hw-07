const input = document.getElementById('font-size-control');
const text = document.getElementById('text');

const changeFontSize = (event) => {
    text.style.fontSize = input.value + 'px';
    console.log(input.value);
}


input.addEventListener('input', changeFontSize)