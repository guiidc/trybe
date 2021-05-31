function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// selecting elements
const ulDay = document.querySelector('#days');
const divButtons = document.querySelector('.buttons-container');


// creating functions
function insertDays(array) {
  for (let v of array) {
    const monthDay = document.createElement('li');
    monthDay.innerHTML = v;
    monthDay.setAttribute('class', 'day');
    if (v === 24 || v === 25 || v === 31) {
      monthDay.classList.add('holiday');
    }
    if (v === 4 || v === 11 || v === 18 || v === 25) {
      monthDay.classList.add('friday');
    }
    ulDay.appendChild(monthDay);
  }
}

function createButton(str) {
  const btn = document.createElement('button');
  btn.setAttribute('id', 'btn-holiday');
  btn.innerHTML = str;
  divButtons.appendChild(btn);
  
}
// calling functions
insertDays(dezDaysList);
createButton('Feriados');


// Adding events
const holidayBtn = document.querySelector('#btn-holiday');
const holidays = document.querySelectorAll('.holiday');
holidayBtn.addEventListener('click', (e) => {
  for (let v of holidays) {
    if (v.style.background !== 'rgb(144, 247, 247)') {
      v.style.background = 'rgb(144, 247, 247)'
    } else {
      v.style.background = 'rgb(238,238,238)'
    }
  }
})

