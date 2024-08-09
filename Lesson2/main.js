 // Array and object
let arr = [1, 12, 123 , 'Serhii' , 'ua', true, false, '1993','okten', '54'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[arr.length-8]);
console.log(arr[arr.length-7]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[arr.length-3]);
console.log(arr[8]);
console.log(arr[arr.length-1]);

let book1 = {
    title:'Тінь на стінах',
    pageCount:350,
    genre:'Психологічний трилер'
}
 let book2 = {
    title :'Вогонь і Вода',
    pageCount:' Фантастика',
    genre: 420
}
let book3 = {
    title:'Втрачений у часі',
    pageCount:'Історична драма',
    genre:280
}
book1.author= [name= 'Іван Петренко',
     age= 31  ];
 console.log(book1)

  book2.author= [
      name ='Наталія Сидоренко',
      age=58
  ]
 console.log(book2);

 book3['author'] = [
     name='Олександр Ткаченко',
     age = 65
 ]
 console.log(book3);

 let arrUsers = [
     user1 = {
         name: 'Serhii',
         username: '@sydorchuk',
         password: 'password1'
     },
     user2 = {
         name: 'Vasya',
         username: '@vasya',
         password: 'password2'
     },
     user3 = {
         name: 'Alice',
         username: '@alice_t',
         password: 'password3'
     },
     user4 = {
         name: 'Brandon',
         username: '@brandon_mill',
         password: 'password4'
     },
     user5 = {
         name: 'Clara',
         username: '@danny_kim',
         password: 'password5'
     },
     user6 = {
         name: 'Emily ',
         username: '@emily_n',
         password: 'password6'
     },
     user7 = {
         name: 'Emily ',
         username: '@felix_gon',
         password: 'password7'
     },
     user8 = {
         name: 'Henry',
         username: '@henry_lee88',
         password: 'password8'
     },
     user9 = {
         name: 'Isabella',
         username: '@isabella_g',
         password: 'password9'
     },
     user10 = {
         name: 'Jack',
         username: '@jack_patel',
         password: 'password10'
     }
 ];
 console.log(arrUsers[0].password);
 console.log(arrUsers[arrUsers.length-9].password);
 console.log(arrUsers[2].password);
 console.log(arrUsers[arrUsers.length-7].password);
 console.log(arrUsers[4].password);
 console.log(arrUsers[arrUsers.length-5].password);
 console.log(arrUsers[6].password);
 console.log(arrUsers[arrUsers.length-3].password);
 console.log(arrUsers[8].password);
 console.log(arrUsers[arrUsers.length-1].password);

 let arrWeather = [
     monday = {
         morning: 15  ,
         afternoon: 20,
         night: 18 ,
     },
     tuesday = {
         morning: 10 ,
         afternoon:18,
         night: 15,
     },
     wensday = {
         morning: 18  ,
         afternoon: 25 ,
         night: 20,
     },
     thurday = {
         morning: 20 ,
         afternoon: 28,
         night: 23,
     },
     friday = {
         morning: 15 ,
         afternoon: 20,
         night: 18,
     },
     saturday = {
         morning: 16  ,
         afternoon: 25,
         night: 10,
     },
     sunday= {
         morning: 15 ,
         afternoon: 18,
         night:17 ,
     }

 ];
 console.log(arrWeather);

// if switch


 let x = 1;
 if (x === 0) {
     console.log('Невірно');
 }
 else  {
     console.log('Вірно');
 }


 let time = 48;
 if (time>0 && time<=15) {
     console.log('First');
 }
 else if (time>15 && time<=30 ) {
     console.log('Second');
 }
 else if (time>30 && time<=45) {
     console.log('Third');
 }
 else if (time>45 && time<=59) {
     console.log('Fourth');
 }
 else {
     console.log('!!!!')
 }

let day = 25;
 if (day>0 && day<=10) {
     console.log('fist decade');
 }
 else if (day>10 && day<=20) {
     console.log('second decade');
 }
else if (day>20 && day<=31) {
     console.log('third decade');
 }
else {
    console.log('!!!!');
 }


let schedule = 7;

switch (schedule) {
       case 1:
       console.log('Monday');
       break;
            case 2:
           console.log('Tuesday');
           break;
           case 3 :
           console.log('Wednesday');
           break; case 4:
           console.log('Thursday');
           break; case 5:
           console.log('Friday');
           break; case 6:
           console.log('Saturday');
           break; case 7:
           console.log('Sunday');
           break;
    default:
        console.log('!!!!')
}

let num1=35 ;
let num2 =234;
 if (num1>num2) {
     console.log(num1);
 }
 else if (num1<num2) {
     console.log(num2);
 }
 else if (num1 === num2) {
     console.log( ('!!!!'));
 }

 let x1 = 0
 if (x1) {
     console.log('true')
 }
 else {
     console.log('default');
 }


 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];

 if (coursesAndDurationArray[0].monthDuration>5){
     console.log('Супер');
 }
 if  (coursesAndDurationArray[1].monthDuration>5){
     console.log('Супер');
 }
 if  (coursesAndDurationArray[2].monthDuration>5){
     console.log('Супер');
 }
if  (coursesAndDurationArray[3].monthDuration>5){
     console.log('Супер');
 }
if  (coursesAndDurationArray[4].monthDuration>5){
     console.log('Супер');
 }
if  (coursesAndDurationArray[5].monthDuration>5){
     console.log('Супер');
 }








