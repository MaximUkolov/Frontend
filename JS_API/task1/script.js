window.addEventListener('beforeunload', function(event) {
    event.preventDefault();
    return 'Вы уверены, что хотите покинуть эту страницу?';
});