// Вызывает функцию f для каждого элемента массива и возвращает массив результатов.
// Использует метод Array.prototype.map, если он определен.
var map = Array.prototype.map
    ? function(a, f) { return a.map(f); } // Если метод map() доступен
    : function(a,f) {                     // Иначе реализовать свою версию
        var results = [];
        for(var i = 0, len = a.length; i < len; i++) {
            if (i in a) results[i] = f.call(null, a[i], i, a);
        }
    return results;
};