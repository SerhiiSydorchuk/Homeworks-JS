// #WpkK0ZH1
let num = [1,2,3,4,5] ;
let str = ['a','b','c','d','f'];
let arr = [1,'b',true,false,'g'];

console.log(num);
console.log(str);
console.log(arr);

// #4aDbSgh

let index = [];

index[0]= 1;
index[1]= true ;
index[index.length]= ''+1;
index[4]= !!+0;
index[5]= '1' ;

console.log(index);


//  #qLQLJSeN7i

let arrNum = [2,17,13,6,22,31,45,66,100,-18] ;
// Завдання 1,3
let i=0 ;
while (i<arrNum.length) {
   console.log(arrNum[i]);
   i+=2
}
// Завдання 2,4
for (let j = 0; j < arrNum.length; j+=2) {
    const element = arrNum[j];
    console.log(element)
}
// Завдання 5
let b=0 ;
while (b<arrNum.length) {
   if (arrNum[b]%2===0)
    {console.log(arrNum[b]);}
    b++
}
// Завдання 6
for (let arrItem of arrNum) {
    if (arrItem % 2 === 0) {
        console.log(arrItem)
    }
}
// Завдання 7
for (const number of arrNum) {
    if (number%3 ===0) {
        console.log('okten')
    }
}
// Завдання 8
for (let c = arrNum.length - 1; c >= 0; c--) {
    const arrNumElement = arrNum[c];
    console.log(arrNumElement);
}
// Завдання 9

let d=arrNum.length-1 ;
while (d>=0) {
    console.log(arrNum[d]);
    d-=2
}

for (let f = arrNum.length-1; f >=0; f-=2) {
    const element = arrNum[f];
    console.log(element)
}

let g=arrNum.length-1 ;
while (g>=0) {
    if (arrNum[g]%2===0)
    {console.log(arrNum[g]);}
    g--
}

for (let h = arrNum.length - 1; h >= 0; h--) {
    if (arrNum[h] % 2 === 0) {
        console.log(arrNum[h]);
    }
}

for (let k = arrNum.length - 1; k >= 0; k--) {
    const kElement = arrNum[k];
    if (kElement%3 ===0) {
        console.log('okten')
    }
}

//#yHAwJOyiC
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrNumber = [1,2,3,4,5,6,7,8,9,10] ;
for (let l = 0; l < arrNumber.length; l++) {
    const arrNumberElement = arrNumber[l];
    console.log(arrNumberElement);
}
// #GamKju89ob
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrString = ['apple', 'banana', 'cherry', 'date', 'elderberry',
    'fig', 'grape', 'honeydew', 'kiwi', 'lemon'] ;
for (const string of arrString) {
    console.log(string);
}
// #Bm76xmg
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrayDif = [42, 'apple', 3.14, true, null, [1, 2, 3], {'key': 'value'}, 'apple', true, 325];
let q = 0;
while (q< arrayDif.length) {
    console.log(arrayDif[q]);
    q++
}

    // #u3vmD0YJXh
let arrayDif1 = [25, 'hello', true, 3.1415, 'world', false, 100, 'Python', 0, 'OpenAI'];
for (const arrayDif1Element of arrayDif1) {
    if (typeof arrayDif1Element === 'boolean' ) {
        console.log(arrayDif1Element);
    }
}
// #9stMq2ou
for (const arrayDif2Element of arrayDif1) {
    if (typeof arrayDif2Element === 'number' ) {
        console.log(arrayDif2Element);
    }
}

// #mK4pmM4
for (const arrayDif3Element of arrayDif1) {
    if (typeof arrayDif3Element === 'string') {
        console.log(arrayDif3Element);
    }
    }

// #0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі
let arr1 = [];

arr1[0] = 123 ;
arr1[1] = 'asd' ;
arr1[2] = false;
arr1[3] = 358 ;
arr1[4] = 'qwe' ;
arr1[5] = false ;
arr1[6] = 1050 ;
arr1[7] = 'zxcv' ;
arr1[8] = true ;
arr1[arr1.length-1] = 258 ;

for (const arr1Element of arr1) {
    console.log(arr1Element);
}
// #mDMWMW5a
for (let w = 0; w < 10; w+=1) {
      document.write(`<p>${w}</p>`);

}
// #4sXhaa5YMM
for (let e = 0; e < 100; e+=1) {
    document.write(`<p>${e}</p>`);
}
// #s24slNyz7
for (let r = 0; r < 100; r+=2) {
    document.write(`<p>${r}</p>`);
}
// #zananT5FR1
let arr2 = []
let t = 0 ;
while (t<100) {
    if (t%2===0 ){
        document.write(`<p>${t}</p>`);
        console.log(t);
    }
    t++
}
// #Tfrwls7FM
let y = 0 ;
while (y<100) {
    if (y%2!==0 ){
        document.write(`<p>${y}</p>`);
        console.log(y);
    }
    y++
}

// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// - знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
let books = [
    {
        title: 'To Kill',
        pages: 281,
        authors: ['Harper Lee'],
        genres: ['Fiction', 'Classics', 'Historical']
    },
    {
        title: '1984',
        pages: 328,
        authors: ['George Orwell', 'asd', 'asdf'],
        genres: ['Dystopian', 'Science',' Fiction', 'Political' ,'Fiction']
    },
    {
        title: 'The Great Gatsby',
        pages: 180,
        authors: ['F. Scott Fitzgerald'],
        genres: ['Fiction', 'Classics', 'Novel']
    },
    {
        title: 'Moby Dick',
        pages: 585,
        authors: ['Herman Melville'],
        genres: ['Adventure', 'Classics', 'Epic']
    },
    {
        title: 'War and Peace',
        pages: 1225,
        authors: ['Leo Tolstoy'],
        genres: ['Historical Fiction', 'War', 'Philosophy']
    },
    {
        title: 'The Catcher in the Rye',
        pages: 214,
        authors: ['J.D. Salinger'],
        genres: ['Fiction', 'Classics', 'Young Adult']
    },
    {
        title: 'Pride and Prejudice',
        pages: 279,
        authors: ['Jane Austen', 'Serhii'],
        genres: ['Romance', 'Classics', 'Fiction']
    },
    {
        title: 'The Hobbit',
        pages: 310,
        authors: ['J.R.R. Tolkien'],
        genres: ['Fantasy', 'Adventure', 'Classics']
    },
    {
        title: 'The Divine Comedy',
        pages: 798,
        authors: ['Dante Alighieri'],
        genres: ['Epic Poetry', 'Classics', 'Religion']
    },
    {
        title: 'Brave New World assdf safagsasbsdsacs',
        pages: 268,
        authors: ['Aldous Huxley', 'Adam'],
        genres: ['Dystopian', 'Science Fiction', 'Classics']
    }
];
let bookWithMostPages = books[0];

for (let o = 1; o < books.length; o++) {
    if (books[o].pages > bookWithMostPages.pages) {
        bookWithMostPages = books[o];
    }
}
console.log(bookWithMostPages);

let bookWithMostGenres = books[0];
for (let p = 1; p < books.length; p++) {
 if (books[p].genres.length>bookWithMostGenres.genres.length){
     bookWithMostGenres = books[p];
 }
}
console.log(bookWithMostGenres);

let bookWithMostTitle = books[0];
 for (let m=1; m < books.length; m++) {
     if (books[m].title.length>bookWithMostTitle.title.length) {
         bookWithMostTitle = books[m]
     }

 }
console.log(bookWithMostTitle);

for (let s = 0; s < books.length; s++) {
    if (books[s].authors.length === 2  ) {
        console.log(books[s])
   }
}

for (let z = 0; z < books.length; z++) {
    if (books[z].authors.length === 1 ) {
        console.log(books[z])
    }
}



