// Выполняет запрос HTTP GET на получение содержимого по указанному URL-адресу.
// При получении ответа он передается функции обратного вызова
// как разобранный объект XML-документа, объект JSON или строка.
function get(url, callback) {
    var request = new XMLHttpRequest(); // Создать новый запрос
    request.open("GET", url); // Указать URL-адрес ресурса
    request.onreadystatechange = function() { // Определить обработчик события
        // Если запрос был выполнен и увенчался успехом
        if (request.readyState === 4 && request.status === 200) {
            // Определить тип ответа
            var type = request.getResponseHeader("Content-Type");
            // Проверить тип, чтобы избежать в будущем передачи ответа
            // в виде документа в формате HTML
            if (type.indexOf("xml") !== -1 && request.responseXML)
                callback(request.responseXML); // Объект XML
            else if (type === "application/json")
                callback(JSON.parse(request.responseText)); // Объект JSON 
            else
                callback(request.responseText); // Строка
        }
    };
    request.send(null); // Отправить запрос
}