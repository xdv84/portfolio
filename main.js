'use strict'

// ******************************************___ОБЪЕКТЫ___******************************************


// const user = {
//   name: 'Dima',
//   age: 38,
//   city: 'Bansko'
// }
//
//
// user.isAdmin = true // добавление свойства
// delete user.city // удаление свойства
//
// user['city born'] = 'Starodub' // добавление свойства из двух слов, используются [] и '' bracket notation (скобочная запись)
//
// const myCountry = 'country'
// user[myCountry] = 'Russia' // добавление свойства из значения переменной myCountry, т.е. имя свойства будет country и значение Russia
//
// console.log(user)


// const name = 'Dima'
// const age = 38
//
// const user = {
//   name: name,    // в качестве значения можно использовать значение переменной или выражения, в данном случае используем const name = 'Dima'
//   age: age,      // если имя свойства совпадет с значением переменной, то можно сократить и оставить только имя свойства, в нашем случае только одно name и один age
//   city: 'Moscow'
// }
//
// console.log(user)


// let newObj = {
//   name: 'Dima',
//   city: function () {       // возможно сокращенное написание city() { console.log('Hello') }
//     console.log('Hello')
//   }
// }
//
// console.log(newObj.city()) // вызываем метод city объекта newObj


// Варианты копирования объекта

// const person = {
//   name: 'Dima',
//   age: 38
// }
//
// const personTwo = Object.assign({}, person) // делаем копию объекта, не ссылку. Первый аргумент указывает какой тип делаем. Вложенные объекты копируют ссылку.
//
// const personThree = { ...person } // spread (оператор разделения объекта на свойства), современный аналог Object.assign(). Вложенные объекты копируют ссылку.
//
// const personFour = JSON.parse(JSON.stringify(person)) // сначала конвертив в строку JSON, затем из строки JSON  в JS. Тем самым делаем копию объекта со вложенныеми свойствами объекта.


// Деструктуризация объекта

// const user = {
//   name: 'Dima',
//   age: 38,
//   city: 'Moscow'
// }
//
// const {name, age, city} = user //создаются переменный с именами свойств объекта user и со значениями свойств
//
// console.log(name, age, city)


// ******************************************___JSON___******************************************


// const user = {
//   name: 'Dima',
//   age: 38
// }
//
// JSON.stringify(user) // преобразуем объект в JSON объект user
//
//
// const toObj = JSON.stringify(user) // присваеваем переменной JSON
//
// JSON.parse(toObj) // преобразуем JSON в объект


// ******************************************___ЦИКЛЫ___******************************************


// let num = 50
//
// while (num <= 100) {
//   console.log(num)
//   num++
// }
//
//
// let number = 100
//
// do {
//   console.log(number)
//   number++
// } while (number <= 150)

// for (let i = 0; i <= 10; i++) {
//   if (i === 6) {
//     break
//   }
//   console.log(i)
// }


// Метод forEach для МАССИВОВ, принимает в себя callback

// const myArr = ['one', 'two', 'three', 'four']
//
// myArr.forEach((element, index) => {
//   console.log(element, index)
// })


// Метод for in для ОБЪЕКТОВ

// for (key in Object) {
//   // Действия с каждым свойством объекта
//   // Значение свойства - Object[key]
// }

// const user = {
//   name: 'Dima',
//   age: 38,
//   city: 'Bansko'
// }
//
// for (const key in user) {
//   console.log(key, user[key])
// }


// Метод for in для МАССИВА

// const myArr = ['one', 'two', 'three']
//
// for (const key in myArr) {
//   console.log(myArr[key])
// }


// Метод forEach для ОБЪЕКТОВ

// const user = {
//   name: 'Dima',
//   age: 38,
//   city: 'Moscow'
// }
//
// console.log(Object.keys(user))  // позволяет получить ключи объекта в виде массива
//
// Object.keys(user).forEach(key => {
//   console.log(key, user[key])
// })


// Метод for of для СТРОК и МАССИВОВ, ДЛЯ ОБЪЕКТОВ НЕ РАБОТАЕТ!!!

// const str = 'My-homework'
//
// for (const letter of str) {
//   console.log(letter)
// }
//
//
// const myArr = [1, 2, 3, 4, 5]
//
// for (const key of myArr) {
//   console.log(key)
// }


// ******************************************___ФУНКЦИИ___ЭТО ОБЪЕКТ и ЕСТЬ СВОЙСТВА******************************************


// Function declaration

// let num = 50
//
// function getFirstNumber(text) {
//   console.log(text)
//   num = 20
// }
//
// getFirstNumber('Hello World')
//
// console.log(num)

// Function expression

// const logger = function (a, b) {
//   return a + b
// }
//
// console.log(logger(3, 4))

// Стрелочная функция () =>

// const number = () => console.log('Стрелочная функция')
// number()
//
// const sumNum = (a, b) => a + b
// console.log(sumNum(3,4))


// Менять оригинальный объект внутри функции не рекомендуется, лучше сделать копию, как в примере ниже

// const personOne = {
//   name: 'Dima',
//   age: 37
// }
//
// function updatedPerson (person) {
//   const updatedPersonOne = Object.assign({}, personOne) // или { ...personOne }
//   updatedPersonOne.age += 1
//   return updatedPersonOne
// }
//
// const updatedPersonOne = updatedPerson(personOne)
//
// console.log(personOne.age)
// console.log(updatedPersonOne.age)


// Callback function  это функции, которые вызываются внутри других функций

// function numberOne () {            // это и есть callback функция, она передается в другую функцию в качестве аргумента
//   console.log(`I'm callback function`)
// }
//
// function mainFunc(callbackFunc) {  // в качестве параметра передаем другую функцию
//   callbackFunc()                   // вызываем функцию в теле функции callback функцию, т.е. другую, имя которой в параметрах текущей функции
// }
//
// mainFunc(numberOne)  // вызываем функцию mainFunc c аргументом callback функцией


// Example 1 callback

// function printName() {
//   let name = prompt('What is your name?')
//   return name
// }
//
// function outputUser(name) {
//   alert(`Your name is ${name}`)
// }
//
// outputUser(printName())

// Example 2 callback

// function sum() {
//   let a = +prompt('Input number 1', '')
//   let b = +prompt('Input number 2', '')
//   let sum = a + b
//   return sum
// }
//
// function multi(callback) {
//   let c = callback() * (+prompt('Input multi', ''))
//   return c
// }
//
// alert(multi(sum))

// function sum() {
//   let a = +prompt('Input number 1 ((Number 1 + Number 2) * Number 3)', '')
//   let b = +prompt('Input number 2 ((Number 1 + Number 2) * Number 3)', '')
//   let sum = a + b
//   return sum
// }
//
// function multi(callback) {
//   let a = callback()
//   let b = +prompt('Input multi ((Number 1 + Number 2) * Number 3)', '')
//   let c = a * b
//   return c
// }
//
// alert(multi(sum))

// function numberOne(value = 24, multi) {
//   return value + multi
// }
//
// console.log(numberOne(undefined, 2))


// Объявленная функция

// function numberTwo(a, b) {
//   if(b === undefined) {
//     return a
//   } else {
//     return a + b
//   }
// }
//
// console.log(numberTwo(2))


// Функциональное выражение и присвоение переменной

// const numberThree = function(a, b = 1) {
//   return a + b
// }
//
// console.log(numberThree(2))


// Стрелочная функция и присвоение переменной

// const numberFour = (a, b = 2) => (a + b)
//
// console.log(numberFour(2, 44))


// Пример, в стрелочной функции используеются скобки, чтобы неявно вренуть объект

// const newPost = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt
// })
//
// const firstPost = {
//   name: 'Dima',
//   id: 1
// }
//
// console.log(newPost(firstPost))


// Пример стрелочной функции с явным возвратом

// const newPost = (post, addedAt = Date()) => {
//   return ({
//     ...post,
//     addedAt,
//   });
// }
//
// const firstPost = {
//   name: 'Dima',
//   id: 1
// }
//
// console.log(newPost(firstPost))


// Деструктуризация в функции

// const user = {
//   name: 'Dima',
//   commentQty: 38
// }
//
// const userInfo = ({name, commentQty }) => {
//   if(!commentQty) {
//     return (`User ${name} is not comments`)
//   }
//     return (`User ${name} has ${commentQty} comments`)
// }
//
// console.log(userInfo(user))


// ******************************************___TRY/CATCH___ПОИСК ОШИБОК******************************************


// const func = () => {
//   throw new Error('Some error')
// }
//
// try{
//   func()
// } catch(error) {
//   console.log(error.message)
//   // или
//   console.error(error)
// }
//
// console.log('Continue...')


// ******************************************___МАССИВЫ___******************************************


// Метод forEach перебирает все элементы массива и не меняет оригинальный массив и ничего не возвращает(undefined), только перебирает массив
// тут мы используем стрелочную функцию, в параметр elem мы передаем элемент массива на каждом вызове метода forEach

// const arr = [1, 2, 3]
//
// console.log(arr)
//
// const newArr = arr.forEach(elem => console.log(elem * 2))  // newArr будет undefined, т.к. forEach не возвращает, только перебирает массив
//
// console.log(newArr) // undefined


// метод MAP перебирает массив и возвращает новый, не изменяя старый

// const myArr = [1, 2, 3, 4]
//
// const newArr = myArr.map(el => el * 3)  // в скобках callback функция
//
// console.log(myArr)
//
// console.log(newArr)


// Деструктуризация массива

// const fruits = ['apple', 'orange', 'rasberry']
//
// const [fruitOne, fruitTwo, fruitThree] = fruits  // создается переменная с указанными именем и значением присваивается элемент массива, порядок объявления важен
//
// console.log(fruitOne, fruitTwo, fruitThree)


// ******************************************___УСЛОВНЫЕ ИНСТРУКЦИИ___******************************************


// const user = {
//   name: 'Dima',
//   age: 38
// }
//
// const userInfo = () => {
//   if(user.age > 30) {
//     console.log('Good')
//   } else {
//     console.log('Bad')
//   }
// }
//
// userInfo(user)



// ******************************************___КОНСТРУКТОР___******************************************


// class Comment {
//   constructor(text) {
//     this.text = text
//     this.votesQty = 0
//   }
//   upvoite() {
//     this.votesQty += 1
//   }
// }
//
// const firstCommit = new Comment('My first comment')
//
// firstCommit.upvoite()
//
// console.log(firstCommit)
//
// console.log(firstCommit.hasOwnProperty('text'))

