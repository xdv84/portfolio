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


// //if else
// const number = 60
// if ( number === 50 ) {
//     console.log('It is true')
// } else {
//     console.log('It is false')
// }


// //Тернарный оператор
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

//While циклы
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

//Методы и свойства строк и чисел
let string = 'DIMA'
let str = 'dima'
console.log(string.length) // свойство
console.log(string.toLowerCase()) // метод
console.log(str.toUpperCase()) // метод

