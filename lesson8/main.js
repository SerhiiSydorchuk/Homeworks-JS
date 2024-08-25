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
    },
   };
console.log(user);
user.audit()

const copyObj = (obj) => {
    if (obj) {
        const functionArr = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const newFn = obj[key].bind({});
                functionArr.push({newFn, key});
            }
        }
        const jsonCopyObj = JSON.parse(JSON.stringify(obj));
        for (const element of functionArr) {
            jsonCopyObj[element.key] = element.newFn;
        }
        console.log(jsonCopyObj);
        return jsonCopyObj;
    }

};
let fn = copyObj(user);
fn.audit();
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