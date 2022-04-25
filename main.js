'use strict';

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('All right')
// })

// let FirstName = 'Dmitrii';
// console.log( `My name is ${ FirstName }` )

// console.log(Math.PI);

// let myName = 'Ivan'
// myName = 'Dima'
// console.log(myName)

// var secondName = 'Tonya'
// console.log(secondName) 

// let obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// console.log(obj['c'])
// console.log(obj.c)
// console.log(obj)

// let arr = ['dima', 'tonya', 37, 38, 'family']
// console.log(arr)
// console.log(arr[4], arr[3], arr[0])

// let one = 'two'
// console.log(typeof one) 

// let category = 'toys'
// console.log('https://google.com/' + category)
// console.log(`https://google.com/${category}/5`)

// let incr = 10,
//     decr = 20;

// console.log(incr++)
// console.log(decr--)
// // console.log(++incr)
// // console.log(--decr)
// console.log(incr)

// console.log(2 + 2 * 2 !== '6')

// let numbersOfFilms = prompt('Сколько фильмов вы посмотрели?')
// console.log(numbersOfFilms)

// let personalMovieDB = {
//     // count: numbersOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// console.log(personalMovieDB)

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// // ..if else
// const number = 60
// if ( number === 50 ) {
//     console.log('It is true')
// } else {
//     console.log('It is false')
// }


// // ..Тернарный оператор
// let num = 40
// num === 50 ? console.log('It is true') : console.log('False')

// //Switch только строгое сравнение
// let num = 50
// switch (num) {
//     case 49:
//         console.log('False')
//         break
//     case 51:
//         console.log('False')
//         break
//     case 52:
//         console.log('It is true')
//         break
//     default:
//         console.log('OK!')
//         break
// }

// // ..While циклы
// let num = 50

// while (num < 60) {
//     console.log(num)
//     num++
// }

// let number = 50

// for (let i = 1; i < 10; i++) {
//     console.log(number)
//     number++
// }

// let num = 10

// for (let i = 1; i < 10 ; i++) {
//     if (i === 6) {
//         break
//     } 
//     console.log(i)
// }

// for (let i = 1; i < 10 ; i++) {
//     if (i === 6) {
//         continue
//     }
//   console.log(i)
// }

// for (let i = 1; i < 10 ; i++) {
//     if (i === 6) {
//         continue
//     }
//   console.log(i)
// }


/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);

// //Функции

// function showFirstMessage (a, b) {
//     console.log(a + b)
// }
// showFirstMessage(5, 3)

// function calc (a, b) {
//     return (a + b)  // возвращает в глобальную область, код после return внутри ф-ции не выполняется
// }
// console.log(calc(4, 5))

// let summ = (a, b) => a + b
// console.log(summ(4, 5))

// //Методы и свойства строк и чисел
// let string = 'DIMA'
// let str = 'dima'
// console.log(string.length) // свойство
// console.log(string.toLowerCase()) // метод
// console.log(str.toUpperCase()) // метод

// let fruit = "Apple Orange"
// console.log(fruit.indexOf('Orange')) // обращаемся к строке и выводим порядковый номер, в данном случае Orange это 6-ка

// let logg = 'Hello World'
// console.log(logg.slice(6, 11)) //метод slice выдергиавает из контекста, первый аргемент с какого симола, второй аргумент по какой + 1, можно без 2-го аргумента, возможно использовать отрицательные аргементы, чтобы выдергивать с конца контекста

// console.log(logg.substring(6, 11)) // аналог slice, но нельзя использовать отрицательные значения

// console.log(logg.substr(6, 5)) // метод позволяет верезать конкретное кол-во символом вторым аргементом, 1 аргемент с какого, 2 аргемент сколько 

// let num = 36.6
// console.log(Math.round(num))

// let str = '12.2 px'
// console.log(parseInt(str)) // метод parseInt преобразует строку в число и округляет; parseFloat не округляет

// /* Задание на урок:

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/

// //1
// let numberOfFilms

// function start () {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
//     }
// }
// start()

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// function rememberMyFilms () {
//     for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
// }
// rememberMyFilms()

// function detectPersonalLevel () {
//         if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }
// detectPersonalLevel()

// //2
// function showMyDb(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB)
//     }
// }
// showMyDb(personalMovieDB.privat)

// //3

// function writeYourGenres() {
//     for (let i=1; i<=3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
//     }
// }
// writeYourGenres()

// // Callback function
// #1
// function learnJS (learn, callback) {
//     console.log(`I am learn: ${learn}`)
//     callback()
// }
// learnJS('JS', function() {
//     console.log('I am very clever')
// })
// #2
// function learnJS (learn, callback) {
//     console.log(`I am learn: ${learn}`)
//     callback()
// }
// function done() { 
//     console.log('I am very good')
// }
// learnJS('JS', done)

// // ..Objects
// let obj = {
//     name: 'NumerOne',
//     width: '300 px',
//     height: '300 px',
//     color: {
//          border: 'red',
//          background: 'yellow'
//     }
// }
// console.log(obj.color.background)
// console.log(Object.keys(obj).length)

// delete obj.name
// console.log(obj)

// for (let key in obj) {
//     console.log(`Свойство ${key} имеет значение ${obj.key}`)
// }

// for (let key in obj) {
//     if (typeof(obj.key) === 'object') {
//         for (let i in obj.key) {
//             console.log(`Свойство ${i} имеет значение ${obj.key.i}`)
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${obj.key}`)
//     }
// }


// let counter = 0

// for (let key in obj) {
//     if (typeof(obj[key]) === 'object') {
//         for (let i in obj[key]) {
//             console.log(`Свойство ${i} имеет значение ${obj.key.i}`)
//             counter++
//         } 
//     } else {
//         console.log(`Свойство ${key} имеет значение ${obj.key}`)
//         counter++
//     }
// }

// console.log(counter)


// let options = {
//     name: 'NumerOne',
//     width: '300 px',
//     height: '300 px',
//     color: {
//          border: 'red',
//          background: 'yellow'
//     },
//     makeTest: function() {
//         console.log('Test OK')
//     }
// }

// console.log(options.makeTest)


// // ..Деструктуризация объекта

// let num = {
//     name: 'NumerOne',
//     width: '300 px',
//     height: '300 px',
//     color: {
//          border: 'red',
//          background: 'yellow'
//     },
//     makeTest: function() {
//         console.log('Test OK')
//     }
// }

// let {border, background} = num.color
// console.log(border, background)

// Массивы и псевдомассивы

// let arr = [1, 3, 5, 7]

// arr.pop() // удаляет последний аргумент в массиве
// console.log(arr)

// arr.push(9) // добавляет указанный в скобках арумент в конец массива
// console.log(arr)

// for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i])
// }

// for (let value of arr) { 
//     console.log(value)
// }

// // forEach

// let arr = [1, 3, 5, 7, 9]

// arr.forEach(function(item, i, arr) {   // ф-ция вклчюает три аргумента, 1-й(любое имя) значение, 2-й номер по порядку, 3-й имя массива
//     console.log(`${i}: ${item }} внутри массива ${arr}`)
// })

// // .. split , метод преобразует строку в массив

// let string = prompt('', '')
// let names = string.split(', ')  // в аргумент указываем разделитель в строке, это важно знать, в нащем случае это запятая в prompt
// console.log(names)

// //  join , метод делает строку из массива

// let array = [1, 3, 5, 7, 9]
// let str = array.join(', ') // в скобках указываем разделитель
// console.log(str)

// // sort , сортирует массив по алфавиту
//  let Arr = ['Dima', 'Tonya', 'Stepan', 'Alexey']
//  Arr.sort()
//  console.log(Arr)


//  let massiv = [22, 44, 23, 77, 1]
//  massiv.sort(compareNum)
//  console.log(massiv)

//  function compareNum(a, b) {
//     return a - b
//  }

// // .. Передача по ссылке и по значению, Spread оператор

//  let obj = {
//      a: 1,
//      b: 2,
//      c: 3
//  }

//  let newObj = obj
//  newObj.a = 20
//  console.log(obj)
//  console.log(newObj)

 
//  function copy(mainObj) {
//      let objCopy = {}
//      let key
//      for(key in mainObj) {
//          objCopy[key] = mainObj[key]
//      }
//      return objCopy
//  }

//  let numbers = {
//      a: 20,
//      b: 40,
//      c: {
//          x: 7,
//          y: 14
//      }
//  }

//  let newNumber = copy(numbers)

//  newNumber.a = 44
//  numbers.a = 10

//  console.log(numbers)
//  console.log(newNumber)

//  // Объединение объектов

//  let add = {
//      d: 20,
//      e: 30
//  }

//  console.log(Object.assign(numbers, add)) // 1-й аргумент в какой объект, 2-й из какого объекта

 // массивы

 let oldArray = [1, 3, 5, 7, 9]
 let newArray = oldArray

 console.log(newArray)
