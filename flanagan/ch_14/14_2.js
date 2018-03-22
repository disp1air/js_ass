/*
* Эта функция выделяет в URL-адресе разделенные амперсандами
* пары аргументов имя/значение из строки запроса. Сохраняет эти пары
* в свойствах объекта и возвращает этот объект. Порядок использования:
*
* var args = urlArgs(); // Извлечь аргументы из URL
* var q = args.q || ""; // Использовать аргумент, если определен,
// или значение по умолчанию
* var n = args.n ? parseInt(args.n) : 10;
*/
function urlArgs() {
    var args = {};                               // Создать пустой объект
    var query = location.search.substring(1);    // Строка запроса без '?'
    var pairs = query.split("&");                // Разбить по амперсандам
    for(var i = 0; i < pairs.length; i++) {      // Для каждого фрагмента
        var pos = pairs[i].indexOf('=');         // Отыскать пару имя/значение
        if (pos == -1) continue;                 // Не найдено - пропустить
        var name = pairs[i].substring(0,pos);    // Извлечь имя
        var value = pairs[i].substring(pos+1);   // Извлечь значение
        value = decodeURIComponent(value);       // Преобразовать значение
        args[name] = value;                      // Сохранить в виде свойства
    }
    return args;                                 // Вернуть полученные аргументы
}