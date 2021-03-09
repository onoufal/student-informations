'use strict'

let studentsForm = document.getElementById('studentsForm');

studentsForm.addEventListener('submit', submitter);

let headerTableList = ['id', 'Name', 'Email', 'Mobile', 'Age', 'Tuition']

let id = 0;

let students = []

function Student(email, mobile, tuition) {
  this.email = email;
  this.name = this.email.split('@')[0]
  this.mobile = mobile;
  this.tuition = tuition;
  this.age = randomAge(18, 24);
  this.id = id

  students.push(this);

}


function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function submitter(event) {
  event.preventDefault();
  id++
  let email = event.target.email.value;
  let mobile = event.target.mobile.value;
  let tuition = event.target.tuition.value;

  new Student(email, mobile, tuition);

  settingStudent();
}


function settingStudent() {
  let data = JSON.stringify(students);
  localStorage.setItem('student', data);
}


function gettingStudent() {
  let stringObject = localStorage.getItem('student')
  let normalObject = JSON.parse(stringObject);
  console.log(normalObject);
  if (normalObject) {
    students = normalObject;
  }
}


let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);


let headerRow = document.createElement('tr');
table.appendChild(headerRow);


for (let i = 0; i < headerTableList.length; i++) {
  let headerData = document.createElement('td');
  headerRow.appendChild(headerData);
  headerData.textContent = headerTableList[i]

}


for (let i = 0; i < students.length; i++) {
  let studentRow = document.createElement('tr');
  table.appendChild(studentRow);
}


// for (let i = 0; i < headerTableList.length; i++) {
// }


gettingStudent();

