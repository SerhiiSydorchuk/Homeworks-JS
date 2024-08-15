// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square (numSideA, numSideB){
    return numSideA * numSideB ;
}

console.log(square(40,3))
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function squareCircle (radCircle) {
    return 3.14*radCircle*radCircle ;
}

console.log(squareCircle(10))

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCylinder (numHeight, numRadius ){
    return 2*Math.PI*numRadius*numRadius+ Math.PI*numRadius*numHeight ;
}

console.log(squareCylinder(10, 2))
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayObj( arr ) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

arrayObj([1, 2, 3, 4]);
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function writeToDocumentParagraph (msg) {
     document.write(`<p>${msg}</p>`)
    }

writeToDocumentParagraph('hello');
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
 function writeToDocumentList (msg) {
     document.write(`
<ul>
<li>${msg}</li>
<li>${msg}</li>
<li>${msg}</li>
</ul>
`)
 }
  writeToDocumentList(' html ');
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

      function writeToDocumentListItem (msg , arrLength) {
           document.write(`<ul>`)
          for (let i=0; i <= arrLength; i++) {
            document.write(`<li>${msg}</li>`)
       }
          document.write(`</ul>`)
   }
   writeToDocumentListItem(' hello okten ' , 5)
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
  let arrList = [' ' +
  'asd ',122,' asdfg ',12,' qwer '];
function writeToDocumentArr (arr) {
          document.write(`<ul> `)
     for (const arrElement of arr) {
         document.write(`<li>${arrElement}</li>`)
     }
         document.write(`</ul>`)
 }
 writeToDocumentArr(arrList);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {name: 'vasya', age: 31, id: 1 },
    {name: 'petya', age: 30, id:2},
    {name: 'kolya', age: 29, id:3},
    {name: 'olya', age: 28, id:4},
    {name: 'max', age: 30, id:5},
    {name: 'anya', age: 31, id:6},
    {name: 'oleg', age: 28, id:7},
    {name: 'andrey', age: 29, id:8},
    {name: 'masha', age: 30, id:9},
    {name: 'olya', age: 31, id:10},
    {name: 'max', age: 31, id:11}
];
  function writeToDocumentUserKey (arrUsers) {
      for (const arrUser of arrUsers) {
          document.write(`
        <div>
        <h2>${arrUser.id} ${arrUser.name} Age- ${arrUser.age}</h2>       
       </div>
`)
   }
  }
  writeToDocumentUserKey(users);


// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function maxElement (numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number<min) {
            min = number
        }
    }
    return min ;
}

console.log( maxElement( [2,2,3,4,-3,22,7,8,9,10]));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
   let arrNum =[11, 45, 47 , 42, 133,12];
function sumArrNumber (arrNumbers) {
       let firstNum = 0
    for (const arrNumber of arrNumbers) {
         firstNum = firstNum+arrNumber ;
    }
    return firstNum ;
   }
console.log( sumArrNumber(arrNum));
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap (arrSwap,index1,index2) {
    let swapEl = arrSwap[index1] ;
    arrSwap[index1] = arrSwap[index2] ;
    arrSwap[index2]= swapEl ;
    return arrSwap ;
  }
console.log(swap(arrNum , 0, 1));
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,
// [{currency:'USD',value:25},{currency:'EUR',value:42}],
// 'USD') // => 400
  function exchange(sumUAH,currencyValues,exchangeCurrency) {
      let currency ;
      for (const currencyElement of currencyValues) {
          if (currencyElement.currency===exchangeCurrency){
              currency=currencyElement;
              return sumUAH/currency.value;
          }

      }

  }

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:20}] , 'USD'));

