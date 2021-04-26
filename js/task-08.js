
const input = document.getElementsByTagName('input')[0];
const buttonCreate = document.getElementsByTagName('button')[0];
const buttonDelete = document.getElementsByTagName('button')[1];
const divArr = document.getElementById('boxes');



const randomColor = (min, max) =>
    Math.round(Math.random() * (max - min) + min);


const createDiv = (event) => {
    let num = Number(input.value);
    const ArrayEl = [];
    
    for (let i = 0; i <= num; i++){
        const divEl = document.createElement('div');
        divEl.style.backgroundColor = `RGB(
            ${randomColor(0, 255)},
            ${randomColor(0, 255)},
            ${randomColor(0, 255)})`;
        divEl.style.width = `${30 + i * 10}px`;
        divEl.style.height = `${30 + i * 10}px`;
        ArrayEl.push(divEl);
    }
    divArr.append(...ArrayEl);
}

const deleteDiv = (event) => {
    input.value = '';
    divArr.innerHTML = '';
}

buttonCreate.addEventListener('click', createDiv);

buttonDelete.addEventListener('click', deleteDiv);


