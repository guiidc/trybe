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

const ulDay = document.querySelector('#days');
const divButtons = document.querySelector('.buttons-container');


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

function fridayButton(str) { 
  const btnFriday = document.createElement('button');
  btnFriday.innerHTML = str;
  btnFriday.setAttribute('id', 'btn-friday');
  divButtons.appendChild(btnFriday);
}

insertDays(dezDaysList);
createButton('Feriados');
fridayButton('Sexta-feira')


const holidayBtn = document.querySelector('#btn-holiday');
const holidays = document.querySelectorAll('.holiday');
const btnFriday = document.querySelector('#btn-friday');
const fridays = document.getElementsByClassName('friday');
const weekDaysFridaysBkp = document.getElementsByClassName('friday');
const liDays = document.querySelectorAll('.day');
const taskDiv = document.querySelector('.my-tasks');

holidayBtn.addEventListener('click', (e) => {
  for (let v of holidays) {
    if (v.style.background !== 'rgb(144, 247, 247)') {
      v.style.background = 'rgb(144, 247, 247)'
    } else {
      v.style.background = 'rgb(238,238,238)'
    }
  }
})

btnFriday.addEventListener('click', (e) => { 
  for (let v of fridays) {
    if (v.innerHTML !== 'sexta-feira') {
      v.innerHTML = 'sexta-feira';
    } else {
      v.innerHTML = parseInt(v.previousElementSibling.innerHTML) + 1;
    }
  }
});

for (let v of liDays) {
  v.addEventListener('mouseenter', (e) => {
    v.style.fontSize = '30px';
  })

  v.addEventListener('mouseout', (e) => {
    v.style.fontSize = '20px'
  })
}

function addTask(str) {
  const task = document.createElement('span');
  task.innerHTML = str;
  taskDiv.appendChild(task)
}

addTask('estudar')

function setTaskColor(colorStr) {
  const task = document.createElement('div');
  task.setAttribute('class', 'task');
  task.style.background = colorStr;
  taskDiv.appendChild(task);
}
setTaskColor('blue')