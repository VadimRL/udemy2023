/* 
|------------------------------------|
|------- 19. Задание на урок: -------|
|------------------------------------|

1) Создать переменную movieRating и в неё поместить ответ от пользователя на вопрос:
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

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

let movieRating = 0;

do {
    movieRating = prompt("How many movies have you watched?", 0);
    console.log(movieRating == null);
} while (movieRating == null || movieRating.trim() == "" || isNaN(movieRating) || movieRating >= 50);

const personalMovieDB = {
    count: movieRating,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// userNumber?.trim() == "" || !isFinite(userNumber) || (userNumber !== null && userNumber <= 100)
for (let i = 0; i < 2; i++) {
    console.log(i);
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

if (personalMovieDB.count < 10) {
    alert("Watched quite a few movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("You are a classicial movie viewer");
} else {
    alert("You are a movie buff");
}
