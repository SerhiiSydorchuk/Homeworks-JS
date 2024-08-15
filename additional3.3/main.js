// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let arrNumber = []
for (let a = 0; a < 100; a++) {
    if (a%2===0){
        arrNumber.push(a);
    }
}
//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let b = 0; b < 100; b++) {
    if (b%2 !==0){
        arrNumber[arrNumber.length]=b;
    }
}
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (let c = 0; c < 20; c++) {
        arrNumber.push(Math.floor(Math.random()*1000));
}
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let d = 0; d < 20; d++) {
    arrNumber.push(Math.floor(Math.random()*732)+8);
    }
console.log(arrNumber);



// 2. Вивести за допомогою console.log кожен третій елемен
for (let f = 0; f < arrNumber.length ; f+=3) {
    console.log(arrNumber[f]);
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let g = 0; g < arrNumber.length; g+=3) {
    if (arrNumber[g]%2===0){
        console.log(arrNumber[g]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arrNum = [];
for (let h = 0; h < arrNumber.length ; h+=3) {
    if (arrNumber[h]%2===0){
        arrNum.push(arrNumber[h]);
    }
    }
console.log(arrNum);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let example = [ 1, 2, 3, 6, 7, 9, 56, 8, 67 ];
for (let i = 0; i < example.length; i++) {
    if (example[i+1]%2===0){
        console.log(example[i])
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
 let numbers= [100,250,50,168,120,345,188];
let start = 0;
for (const number of numbers) {
    start =number+start;
       }
let averageValue = Math.floor(start/numbers.length);
console.log(averageValue);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let newArrNum = [];
for (let k = 0; k < numbers.length; k++) {
    newArrNum.push(numbers[k]*5);
}
console.log(newArrNum);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let myArray = ["Apple", 42, true, "Hello", 3.14, false, "World", 100];
let myNewArray = [];
for (const myArrayElement of myArray) {
    if (typeof (myArrayElement)==='number'){
        myNewArray.push(myArrayElement);
    }
    }
console.log(myNewArray)
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithCiti =[];

    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];


let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (const user of usersWithId) {
    for (const citi of citiesWithId) {
        if (user.id===citi.user_id){
            let newUser = {
                ...user,
                address: citi
            }
            usersWithCiti.push(newUser);
        }

    }

}
console.log(usersWithCiti);

//
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
 let lastArrNum = [5, 12, 8, 20, 33, 7, 14, 28, 9, 4];
for (const number of lastArrNum) {
  if (number%2===0){
      console.log(number);
  }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let lastArr = [5, 12, 8, 20, 33, 7, 14, 28, 9, 4];
let lastArr1 =[];

for (const number of lastArr) {
    lastArr1.push(number);
}
console.log(lastArr1);

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
 let letters =[ 'h', 'e', 'l','l','o'];
 let word ='';
for (let m=0; m < letters.length ; m++) {
     word += letters[m];
    }
console.log(word) ;


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let word2 ='';
n=0;
while (n<letters.length){
    word2 +=letters[n];
    n++
}
console.log(word2)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let word3 = '';
for (const letter of letters) {
    word3 +=letter;
    }
console.log(word3);