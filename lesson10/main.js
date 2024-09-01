// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let button = document.getElementById('btn');
button.onclick = function () {
    let text = document.getElementById('text');
    text.style.display = 'none';
};
//
//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.getElementById('f1');
// form.onsubmit = function (ev) {
//     ev.preventDefault();
//    let userAge = {age: this.age.value};
//     for (const key in userAge) {
//         if (userAge[key] < 18 ) {
//         console.log('Меньше 18')
//     } else {
//         console.log('Більше 18')
//     }}
// };
let button1 = document.getElementById('btn1');
button1.onclick = function () {
    let input = document.getElementById('nmb');
    let age = input.value;
    let msg = document.getElementById('msg');
    if (age < 18 && age >0 ) {
        msg.innerText = 'ВАМ НЕМАЄ 18 РОКІВ'
    }else if( age >=18 && age <100 ) {
        msg.innerText = 'ВІТАЄМО З ПОВНОЛІТТЯМ!!!!!'
    }else if( age <=0 ) {
        msg.innerText = 'ВВЕДІТЬ СВІЙ ВІК!!!!'
    }
};

// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form = document.getElementById('f1');
let users = []
form.onsubmit = function (ev){
    ev.preventDefault()
    let user = {
        name: this.name.value,
        surname: this.surname.value,
        age:this.age.value
    }
    users.push(user);
    console.log(users);
}


// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let num = +localStorage.getItem('number');
num += 1
let newNum = localStorage.setItem('number', num);

let number = document.getElementById('number');
number.innerText = num;


// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається
// інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
sessionsList.push(new Date());
localStorage.setItem('sessionsList' , JSON.stringify(sessionsList));

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void


let user1 = {
    name: 'Mykola'
}


function  addToLocalStorage  (arrayName,objToAdd){

   let arr = JSON.parse(localStorage.getItem(arrayName));
    if (typeof objToAdd === 'object') {
        arr.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(arr));
}
addToLocalStorage('sessionsList', user1);




