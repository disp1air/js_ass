// Возвращает мемоизованную версию функции f. Работает, только если все возможные
// аргументы f имеют отличающиеся строковые представления.
function memoize(f) {
    var cache = {}; // Кэш значений сохраняется в замыкании.
    return function() {
        // Создать строковую версию массива arguments для использования
        // в качестве ключа кэша.
        var key = arguments.length + Array.prototype.join.call(arguments,",");
        if (key in cache) return cache[key];
        else return cache[key] = f.apply(this, arguments);
    };
}