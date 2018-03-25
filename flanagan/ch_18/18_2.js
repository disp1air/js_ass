// Выполняет запрос HTTP GET содержимого указанного URL-адреса.
// После успешного получения ответа проверяет, содержит ли он простой текст,
// и передает его указанной функции обратного вызова
function getText(url, callback) {
    var request = new XMLHttpRequest(); // Создать новый запрос
    request.open("GET", url); // Указать URL-адрес ресурса
    request.onreadystatechange = function() { // Определить обработчик события
        // Если запрос был выполнен успешно
        if (request.readyState === 4 && request.status === 200) {
           var type = request.getResponseHeader("Content-Type");
            if (type.match(/^text/)) // Убедиться, что это текст
                callback(request.responseText); // Передать функции
        }
    };
    request.send(null); // Отправить  запрос
}