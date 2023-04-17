/* 
|------------------------------------|
|------- 19. Задание на урок: -------|
|------------------------------------|

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли 

|------------------------------------|
|------- 24. Задание на урок: -------|
|------------------------------------|

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами

|-----------------------------------------------------|
|------- 29. Практика , ч3. Используем функции -------|
|-----------------------------------------------------|

Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно

*/


"use strict";

let numberOfFilms = 0;

function start() {
    do {
        numberOfFilms = prompt("How many movies have you watched?", 0);
        console.log(numberOfFilms.trim() == "");
    } while (numberOfFilms == null || numberOfFilms.trim() == "" || isNaN(numberOfFilms) || numberOfFilms >= 50);
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovie = prompt("What is the name of the last movie you watched", "");
        const movieRate = prompt("How would you rate it?", "");
    
        if (
            lastMovie == "" ||
            movieRate == "" ||
            isNaN(movieRate) ||
            lastMovie == null ||
            movieRate == null ||
            lastMovie.length > 50 ||
            movieRate > 50
        ) {
            i--;
        } else {
            personalMovieDB.movies[lastMovie] = movieRate;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Watched quite a few movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("You are a classicial movie viewer");
    } else {
        alert("You are a movie buff");
    }
}

// detectPersonalLevel();

function showMyDB() {
    if(personalMovieDB.privat) {
        console.log("error: access danied");
        return;
    }
    
    console.log(personalMovieDB);
}

function writeYourGenres() {
    
    for (let i = 0; i < 3; i++) {
        const genre = prompt("Whire your favorite movie genre number " + (i + 1), "");
    
        if (genre == "" || isFinite(genre) || genre == null || genre.length > 50) {
            i--;
        } else {
            personalMovieDB.genres[i] = genre;
        }
    }
}

writeYourGenres();

