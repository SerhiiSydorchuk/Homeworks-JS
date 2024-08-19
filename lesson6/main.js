// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
let a ='hello world';
let b = 'lorem ipsum' ;
let c ='javascript is cool';
console.log(a.length);
console.log(b.length);
console.log(c.length);

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(a.toUpperCase())
console.log(b.toUpperCase())
console.log(c.toUpperCase())
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
let d = 'HELLO WORLD';
let f='LOREM IPSUM';
let g = 'JAVASCRIPT IS COOL';
console.log(d.toLowerCase())
console.log(f.toLowerCase())
console.log(g.toLowerCase())
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str);
console.log(str.trim());
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str1 = 'Ревуть воли як ясла повні';
console.log(str1.split(' '));
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const arrNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const arrNumSrt = arrNum.map(number=> number+'');
console.log(arrNumSrt);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    const arrSortNum = [5,12,1,4];
    function sortNums (arrNums , direction) {
        if (direction==='ascending'){
        return arrSortNum.sort((a, b) => a-b )}
        else if (direction==='descending'){
          return arrSortNum.sort((a, b) => b-a )
        }
    }

console.log(sortNums(arrSortNum, 'ascending'));
// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let coursesSort = coursesAndDurationArray.sort((course1 , course2 ) => course2.monthDuration-course1.monthDuration);
console.log(coursesSort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesFilter = coursesAndDurationArray.filter(course => course.monthDuration>5 );
console.log(coursesFilter);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesMap= coursesAndDurationArray.map((course , index)=>({id:index+1,...course}));
console.log(coursesMap);
console.log(coursesAndDurationArray);
let coursesMap1 = coursesAndDurationArray.map((value, index) => {
    let obj = {
        id: index+1,
        title: value.title,
        monthDuration:value.monthDuration,
        }
        return obj;
}

)

console.log(coursesMap1);
console.log(coursesAndDurationArray);



//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
const cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
const cards =[];
for (const suit of cardSuit) {
    for (const value of values) {
        let card =({cardSuit: suit, value: value});
        if (suit==='spade'|| suit==='clubs'){
            card.color = 'black' ;
        }
        else {card.color='red'}
        cards.push(card);
    }
}
let aceSpade =cards.filter(card => (card.cardSuit === 'spade' && card.value === 'ace'));
console.log(aceSpade);
console.log(cards);
let allSixCard = cards.filter(card => card.value === '6' );
console.log(allSixCard);
let allRedCards = cards.filter(card=>card.color==='red');
console.log(allRedCards);
let allDiamondCards = cards.filter(card=> card.cardSuit==='diamond');
console.log(allDiamondCards);
let allClubsCard =cards.filter(card=> card.cardSuit==='clubs'&& card.value.length>1);
console.log(allClubsCard);


//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let allCardsSuit = cards.reduce((arrCardSuit, card) => {
    if(card.cardSuit==='spade'){
        arrCardSuit.spade.push(card)
    }else if(card.cardSuit==='heart'){
        arrCardSuit.heart.push(card)
    }if(card.cardSuit==='clubs'){
        arrCardSuit.clubs.push(card)
    }if(card.cardSuit==='diamond'){
        arrCardSuit.diamond.push(card)
    }
    return arrCardSuit ;
    },


    {spade: [], heart: [], clubs: [], diamond: []});
console.log(allCardsSuit);
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є aws
// --написати пошук всіх об'єктів, в яких в modules є docker


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'sass', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
]
const arrayCoursesModule1 = coursesArray.filter(course => course.modules.includes('sass'));
console.log(arrayCoursesModule1);

const arrayCourses2 = coursesArray.filter(course => course.modules.includes('docker' ));
console.log(arrayCourses2);