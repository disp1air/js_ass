if (!Function.prototype.bind) {
    Function.prototype.bind = function(o /*, аргументы */) {
        // Сохранить this и arguments в переменных, чтобы их можно было
        // использовать во вложенной функции ниже.
        var self = this, boundArgs = arguments;
        // Возвращаемое значение метода bind() - функция
        return function() {
            // Сконструироватьсписок аргументов, начиная со второго аргумента
            // метода bind, и передать все эти аргументы указанной функции.
            var args = [], i;
            for(i = 1; i < boundArgs.length; i++) args.push(boundArgs[i]);
            for(i = 0; i < arguments.length; i++) args.push(arguments[i]);

            // Теперь вызвать self как метод объекта o со всеми аргументами
            return self.apply(o, args);
        };
    };
}