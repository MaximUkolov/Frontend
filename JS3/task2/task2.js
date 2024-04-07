const inputUserEl = document.querySelector('.user-input');
const buttonAddEl = document.querySelector('.add-button');
const messageEl = document.querySelector('.error-message');
const itemListEl = document.querySelector('.item-list');
 
// buttonAddEl.addEventListener('click', () => {
//     const userInput = inputUserEl.value;
//     if (userInput.length < 3 || userInput.length > 10) {
//         messageEl.textContent = 'Длина введенного значения не соответствует требованиям!';
//     } else {
//         const liEl = document.createElement('li');
//         liEl.textContent = userInput;
//         itemListEl.append(liEl);
//         inputUserEl.value = '';
//         messageEl.textContent = '';
//     }
//     console.log('Попытка добавления элемента завершена!');
// })
 
buttonAddEl.addEventListener('click', () => {
    try {
        const userInput = inputUserEl.value;
        if (userInput.length < 3 || userInput.length > 10) {
            throw new Error('Длина введенного значения не соответствует требованиям!');
        }
        const liEl = document.createElement('li');
        liEl.textContent = userInput;
        itemListEl.append(liEl);
        inputUserEl.value = '';
        messageEl.textContent = '';
    } catch (error) {
        messageEl.textContent = error.message;
    } finally {
        console.log('Попытка добавления элемента завершена!');
    }
})