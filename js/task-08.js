
const input = document.getElementsByTagName('input')[0];
const buttonCreate = document.getElementsByTagName('button')[0];
const buttonDelete = document.getElementsByTagName('button')[1];
const divArr = document.getElementById('boxes');

const createDiv = (event) => {
    let num = Number(input.value);
    
    for (let i = 0; i <= num; i++){
        console.log('is it works?')
        const divEl = document.createElement('div');
        divEl.style.width = 30;
        divEl.style.height = 30;
        return divEl;
    }

    divArr.appendChild(divEl);
}

const deleteDiv = (event) => {
    
}

buttonCreate.addEventListener('click', createDiv);

buttonDelete.addEventListener('click', deleteDiv);


