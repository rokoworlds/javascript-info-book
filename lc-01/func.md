// 4. Очистка и агрегация данных из массива объектов:
// У вас есть массив объектов, представляющих результаты опроса о предпочтениях пользователей по жанрам музыки:

const surveyResults = [
  { user: 'user1', rock: 4, pop: 6, jazz: 7 },
  { user: 'user2', rock: 7, pop: 8, jazz: 3 },
  { user: 'user3', rock: 5, pop: 9, jazz: 2 },
  { user: 'user4', rock: 6, pop: 4, jazz: 6 }
];

const aggregateSurveyResults = () => {
  let answer = {};

  
  return answer;
}

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// Вам необходимо создать функцию aggregateSurveyResults, которая агрегирует данные из этого массива, подсчитывая общее количество предпочтений для каждого жанра музыки.
// Функция должна вернуть объект, где ключами будут названия жанров музыки, а значениями - суммарное количество предпочтений по каждому жанру.

// Пример использования функции:
// const aggregatedResults = aggregateSurveyResults(surveyResults);

// Ожидаемый результат:
// console.log(aggregatedResults); // { rock: 22, pop: 27, jazz: 18 }




// Задача №5
// На прямой расположены N стойл (даны их координаты на прямой), в которые необходимо расставить K коров так, чтобы минимальное расcтояние между коровами было как можно больше. Гарантируется, что  1<K<N
 // 
let coords = [2, 5, 7, 11, 15, 20] // координаты стойл
let k = 3 // число коров

function isCorrect(x) { // проверяем, можно ли поставить K коров в стойла, если между коровами расстояние хотя бы x
  let cows = 1

  let lastCow = coords[0]

  for(let c of coords){
    if((c - lastCow) >= x){
      lastCow = c
      cows++
    }
  }

  return cows >= k
}

function findMaxDistance(){

}

console.log(findMaxDistance()) // 9 - Расстояние между стойлами