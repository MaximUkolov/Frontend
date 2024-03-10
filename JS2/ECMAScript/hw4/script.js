        //         Домашнее задание

        // ""Получение данных о пользователе""

        // Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

        // Подсказка, с последовательностью действий:
        // getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

        // ""Отправка данных на сервер""

        // Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

        // *Подсказка *
        // // Пример использования функции
        const us = {
            name: 'John Smith',
            age: 30,
            email: 'john@example.com'
        };

        // saveUserData(user)
        // .then(() => {
        // console.log('User data saved successfully');
        // })
        // .catch(error => {
        // console.log(error.message);
        // });

        // saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

        // ""Изменение стиля элемента через заданное время""

        // Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

        // // Пример использования функции
        // changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

        const getUserData = async (ID) => {
            fetch(`https://jsonplaceholder.typicode.com/users`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Ответ сети был не ok.");
                    }
                    return response.json();
                })
                .then((data) => {
                    searchUser(data, ID);

                })
                .catch((error) => {
                    console.log("Возникла проблема с вашим fetch запросом: ", error.message);
                });

        }
        function searchUser(data, ID){
            user = "";
            data.forEach(element => {
                if(element.id === ID){
                    user = element;
                    console.log(user);
                }
            });
            if(!user)console.log(`Пользователь с ID=${ID} не найден`);
        }

        function saveUserData(user){
            fetch(`https://jsonplaceholder.typicode.com/users`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        }
       
        const getUser = async (url) => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Ответ сети был не ok.");
                    }
                    return response.json();
                })
                .then((data) => {
                    createHTML(data);
                })
                .catch((error) => {
                    console.log("Возникла проблема с вашим fetch запросом: ", error.message);
                });
        }
        function createHTML(data) {
            const usersEl = document.querySelector('.users');
            usersEl.innerHTML = ``;

            data.forEach(element => {
                const userEl = document.createElement('ul');
                userEl.className = "user";
                userEl.innerHTML = `
                    <li class="user__id"><strong>ID </strong>${element.id}</li>
                    <li class="user__name"><strong>Name </strong>${element.name}</li>
                    <li class="user__email"><strong> Email </strong>${element.email}</li>
                `;
                usersEl.appendChild(userEl);
            });
        }

        function changeStyleDelayed(className, time){
            fetch(`https://jsonplaceholder.typicode.com/users`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Ответ сети был не ok.");
                    }
                })
                .then((data) => {
                    console.log(className);
                    const searchEl = document.querySelectorAll(className);
                    console.log(searchEl);
                    searchEl.forEach(element => {
                        setTimeout(() => {
                            element.style.color = "red";
                        }, time);
                        
                    });
                })
                .catch((error) => {
                    console.log("Возникла проблема с вашим fetch запросом: ", error.message);
                });
        }

        getUser('https://jsonplaceholder.typicode.com/users');
        getUserData(1);
        saveUserData(us);
        getUserData(11);
        changeStyleDelayed('.user__id', 2000);