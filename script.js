'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних фильмов?', ''),
//           b = prompt('На сколько оцените его', '');
//
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMoviesDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
//     if (personalMoviesDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMoviesDB.count >=10 && personalMoviesDB.count < 30) {
//         console.log("Вы класический зритель");
//     } else if (personalMoviesDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//            console.log("Произошла ошибка");
//     }
// console.log(personalMoviesDB);

// let i = 0;    varianta a doua
// while (i < 2) {
//     const a = prompt('Один из последних фильмов?', ''),
//           b = prompt('На сколько оцените его', '');
//     personalMoviesDB.movies[a] = b;
//     i++;
//  }
//     if (personalMoviesDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMoviesDB.count >=10 && personalMoviesDB.count < 30) {
//         console.log("Вы класический зритель");
//     } else if (personalMoviesDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//            console.log("Произошла ошибка");
//     }
//
// console.log(personalMoviesDB);

// let i = 0;   varianta a treia
//
// do {
//     const a = prompt('Один из последних фильмов?', ''),
//           b = prompt('На сколько оцените его', '');
//     personalMoviesDB.movies[a] = b;
//     i++;
// }
// while ( i < 2);
//     if (personalMoviesDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMoviesDB.count >=10 && personalMoviesDB.count < 30) {
//         console.log("Вы класический зритель");
//     } else if (personalMoviesDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//            console.log("Произошла ошибка");
//     }
//
// console.log(personalMoviesDB);
//

