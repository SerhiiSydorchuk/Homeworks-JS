// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додаки перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//
let user = {
    name: 'serhii',
    age: 31,
    audit() {
        console.log('hello');
    }
};


let copyObj = (obj) => {
    for (const key in this) {
        if (this[key] === undefined || this[key] === null || Number.isNaN(this[key])) {
          return  JSON.parse(JSON.stringify(obj));
        }
    }
};
console.log(copyObj(user));
console.log(user);

let addFn = (obj,) => {
    let jsonCopy = copyObj(obj);
    for (const key in obj) {
         if (typeof obj[key]==='function'){
             jsonCopy[key] = obj[key];
         }
    }
    return  jsonCopy;
}
console.log(addFn(user));

// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let newCourses = coursesAndDurationArray.map(
    (course,index)=>{
        return {
            id:index+1,
            title:course.title,
            monthDuration: course.monthDuration

                }
    }
)
console.log(newCourses);
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції