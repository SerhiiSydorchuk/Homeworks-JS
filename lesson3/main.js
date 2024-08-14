let usersName = [
    'Skywalker32',
    'PixelNinja',
    'LunarEcho',
    'NeonPulse',
    'MysticFlame',
    'ShadowCrafter',
    'GalacticVoyager',
    'CrimsonTide',
    'BlazePhantom',
    'EchoWhisper' ]

for (const user of usersName) {
    document.write(`<div>${user}</div>`)
}

let users1 = [
    'Skywalker32',
    'PixelNinja',
    'LunarEcho',
    'NeonPulse',
    'MysticFlame',
    'ShadowCrafter',
    'GalacticVoyager',
    'CrimsonTide',
    'BlazePhantom',
    'EchoWhisper' ]

for (let j = 0; j < users1.length; j++) {
    document.write(`<div>${j} ${users1[j]}</div>`)

}


const items = [
    " Understanding HTML Basics",
    " Introduction to CSS",
    " JavaScript for Beginners",
    " Building Responsive Websites",
    " Web Design Principles",
    " Advanced CSS Techniques",
    " JavaScript ES6 Features",
    " Introduction to Web APIs",
    " Getting Started with React",
    " Understanding Flexbox and Grid",
    " Debugging in JavaScript",
    " Working with Forms in HTML",
    " CSS Animations and Transitions",
    " Introduction to Node.js",
    " Building REST ful APIs",
    " Introduction to Web Accessibility",
    " Mastering Git and GitHub",
    " Best Practices for SEO",
    " Understanding Web Security",
    " Deploying Websites to the Web"
];

let i=0;
while (i<items.length) {
    document.write(`<h1>${items[i]}</h1>`)
    i++
}

const items1 = [
    " Understanding HTML Basics",
    " Introduction to CSS",
    " JavaScript for Beginners",
    " Building Responsive Websites",
    " Web Design Principles",
    " Advanced CSS Techniques",
    " JavaScript ES6 Features",
    " Introduction to Web APIs",
    " Getting Started with React",
    " Understanding Flexbox and Grid",
    " Debugging in JavaScript",
    " Working with Forms in HTML",
    " CSS Animations and Transitions",
    " Introduction to Node.js",
    " Building REST ful APIs",
    " Introduction to Web Accessibility",
    " Mastering Git and GitHub",
    " Best Practices for SEO",
    " Understanding Web Security",
    " Deploying Websites to the Web"
];

let b =0;
while (b<items1.length) {
    document.write(`<h1>${b} ${items1[b]}</h1>`)
    b++
}

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>')
for (const item of listOfItems) {
    document.write(`<li>${item}</li>`)
}
document.write('</ul>')




let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.yogi-life.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FnZ9c4snS4ytPRImATDfl&w=640&q=75'
    },
];
for (const product of products) {
    document.write(`
    <div class="product-card">
    <h3 class="product-title">  ${product.title}. Price - ${product.price} </h3>
    <img src="${product.image}" alt="${product.title}" class="product-image">
    </div>
    `)
}
let arrTrue = [];
let arrFalse = [];
let arrAge = [] ;

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const user of users) {
    if (user.status === false) {
        arrFalse[arrFalse.length]= user;

    }
    if (user.status===true) {
            arrTrue[arrTrue.length] = user;

    }
    if (user.age>30) {
      arrAge.push(user);
    }
}

console.log(arrFalse);
console.log(arrTrue);
console.log(arrAge);



// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
