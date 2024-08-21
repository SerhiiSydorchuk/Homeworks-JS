function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;


}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
let users = [
    new User(1, 'Serhii', 'Sydorchuk', 'sydorchuks@gmail.com', '+421915175092'),
    new User(12, 'Serhii', 'Sydorchuk', 'sydorchuks@gmail.com', '+421915175092'),
    new User(24, 'Serhii', 'Sydorchuk', 'sydorchuks@gmail.com', '+421915175092'),
    new User(4, 'Serhii', 'Sydorchuk', 'sydorchuks@gmail.com', '+421915175092'),
    new User(8, 'Serhii', 'Sydorchuk', 'sydorchuks@gmail.com', '+421915175092'),
    new User(6, 'Serhii', 'Sydorchuk', 'sydorchuks@gmail.com', '+421915175092'),
    new User(3, 'Serhii', 'Sydorchuk', 'sydorchuks@gmail.com', '+421915175092'),
    new User(5, 'Serhii', 'Sydorchuk', 'sydorchuks@gmail.com', '+421915175092'),
    new User(9, 'Serhii', 'Sydorchuk', 'sydorchuks@gmail.com', '+421915175092'),
    new User(10, 'Serhii', 'Sydorchuk', 'sydorchuks@gmail.com', '+421915175092')];
console.log(users);
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersArr = users.filter(user => user.id%2===0);
console.log(usersArr);
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSort = users.sort((user1, user2) => user1.id - user2.id);
console.log(usersSort);
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client (id, name, surname , email, phone, order) {
        User.apply(this, [id, name, surname, email, phone]);
        this.order = order;
    }

const clientList = [

    new Client('25', 'Oleg', 'Petrov', 'oleg.gmail.com', +421213151055, ['milk', 'bread', 'butter']),
    new Client('2', 'Oleg', 'Petrov', 'oleg.gmail.com', +421213151055, ['milk', 'bread', 'butter', 'sugar']),
    new Client('5', 'Oleg', 'Petrov', 'oleg.gmail.com', +421213151055, ['milk', 'bread', 'butter', 'sugar', 'oil']),
    new Client('7', 'Oleg', 'Petrov', 'oleg.gmail.com', +421213151055, ['milk', 'bread']),
    new Client('15', 'Oleg', 'Petrov', 'oleg.gmail.com', +421213151055, ['milk']),
    new Client('35', 'Oleg', 'Petrov', 'oleg.gmail.com', +421213151055, ['milk', 'bread', 'butter', 'jem', 'candy', 'brandy', 'oil']),
    new Client('17', 'Oleg', 'Petrov', 'oleg.gmail.com', +421213151055, ['milk', 'bread', 'butter', 'jem']),
    new Client('19', 'Oleg', 'Petrov', 'oleg.gmail.com', +421213151055, ['milk', 'bread', 'butter', 'oil', 'jem', 'potato', 'tomato']),
    new Client('24', 'Oleg', 'Petrov', 'oleg.gmail.com', +421213151055, ['milk', 'bread', 'butter', 'oil']),
    new Client('1', 'Oleg', 'Petrov', 'oleg.gmail.com', +421213151055, ['milk', 'butter'])
];
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const clientListSort = clientList.sort((client1, client2) => client2.order.length - client1.order.length);
console.log(clientListSort);
console.log(clientList===clientListSort);
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,producer, year, maxSpeed, engineVolume ) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.Volume = engineVolume;
    this.drive = function () {
        console.log('їдемо зі швидкістю ${this.maxSpeed} на годину' ); };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }};
    this.increaseMaxSpeed= function (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver ;
    };
}

let driver1 = {
    name:'user',
    age: 18
}

let newCar = new Car('Zafira','Opel', 2009, 200, 3);
newCar.drive();
newCar.info();
newCar.increaseMaxSpeed(25);
newCar.changeYear(2000);
newCar.addDriver(driver1);
console.log(newCar);

// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 class Car1{

     constructor(model, producer, year, maxSpeed, engineVolume) {
         this.model = model;
         this.producer = producer;
         this.year = year;
         this.maxSpeed = maxSpeed;
         this.engineVolume = engineVolume;
         this.drive = function (){
             console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
         }
         this.info = function (){
             for (const key in this) {
                 console.log(key , this[key]);
             }
         }
          this.increaseMaxSpeed =  function (speedToAdd){
             if(speedToAdd>0){
                 this.maxSpeed = this.maxSpeed + speedToAdd;
             }
          }
          this.changeYear = function (year){
             if (year>1500){
                 this.year = year;
             }
          }
          this.addDriver=function (driver){
              this.driver = driver;
          }
     }

 }
 let newCar1 = new Car1('Zafira','Opel', 2009, 200, 3);
newCar1.drive();
newCar1.info();
newCar1.increaseMaxSpeed(15);
newCar1.changeYear(2001);
newCar1.addDriver(driver1);
console.log(newCar1);
//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella (name,age,footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;

}
function Prince (name,age,shoesSize){
    this.name = name;
    this.age = age;
    this.shoesSize = shoesSize;

}

let man = new Prince('qwe', 32, 38);

let ladies = [
    new Cinderella('asd', 21, 35),
    new Cinderella('awd', 18, 37),
    new Cinderella('add', 25, 39),
    new Cinderella('afd', 28, 38),
    new Cinderella('agd', 22, 37),
    new Cinderella('ahd', 23, 33),
    new Cinderella('ajd', 27, 35),
    new Cinderella('akd', 29, 36),
    new Cinderella('ald', 30, 32),
    new Cinderella('ayd', 32, 41),

];
// Варіант 1
for (const lady of ladies) {
    if (lady.footSize===man.shoesSize){
        console.log(lady)}

}
//Варінт 2
// for (const lady of ladies) {
// for (const key in man) {
//          if ( man[key] === lady.footSize && key === 'shoesSize'  ){
//              console.log(lady);
//          }
//      }
// }
console.log(ladies);

let ladyFind = ladies.find(value => value.footSize === man.shoesSize)
console.log(ladyFind);

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.MyForEach = function (callback){
    for (const element of this) {
        callback(element);
         }
    }


let nums = [1,2,3,4,5,67,8,9];
let nums1 = nums.MyForEach(index => console.log(index));

Array.prototype.MyFilter = function (callback){
    let arrNew = [];
    for (const element of this) {
        if(callback(element)){
            arrNew.push(element);
        }
     }
    return arrNew;
}

let num = nums.MyFilter (num => (num > 5));
console.log(num);
