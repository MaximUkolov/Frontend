"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  albums: [
      {
          title: "Dark Side of the Moon",
          artist: "Pink Floyd",
          year: "1973"
      },
      {
          title: "Abbey Road",
          artist: "The Beatles",
          year: "1969"
      },
      {
          title: "Thriller",
          artist: "Michael Jackson",
          year: "1982"
      }
  ],
  [Symbol.iterator]() {
      let index = 0;
      return {
          next: () => {
              if (index < this.albums.length) {
                  const album = this.albums[index];
                  index++;
                  return { value: `${album.title} - ${album.artist} (${album.year})`, done: false };
              } else {
                  return { done: true };
              }
          }
      };
  }
};

for (const album of musicCollection) {
  console.log(album);
}
