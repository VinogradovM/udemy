"use strict"
/* let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

let a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
 */


const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100){
    console.log('Много');
}else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error!');


const number = 50;

switch (number) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    default:
        console.log('Не в этот раз');
        break;
}