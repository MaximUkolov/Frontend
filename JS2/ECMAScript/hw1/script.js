// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

let arr = Math.min(...[1, 5, 7, 9])
console.log(arr);

// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(initialValue) {
    let value = initialValue;

    return {
        add: function(num) {
            value += num;
            console.log(value);
        },
        subtract: function(num) {
            value -= num;
            console.log(value);
        },
        getValue: function() {
            return value;
        }
    };
}

let calculator = createCounter(10);

let incEl = document.querySelector('increment')
incEl.addEventListener('click', function(e) {
    calculator.increment(5);
});

let decEl = document.querySelector('.decrement')
decEl.addEventListener('click', function(e) {
    calculator.decrement(3);
});

console.log(createCounter(initialValue));