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

function sum() {
  let a = +prompt('Input number 1 ((Number 1 + Number 2) * Number 3)', '')
  let b = +prompt('Input number 2 ((Number 1 + Number 2) * Number 3)', '')
  let sum = a + b
  return sum
}

function multi(callback) {
  let a = callback()
  let b = +prompt('Input multi ((Number 1 + Number 2) * Number 3)', '')
  let c = a * b
  return c
}

alert(multi(sum))

// function getSum(a, b) {
//   a = 5
//   b = 5
//   let c = a + b
//   return c
// }
// console.log(getSum())