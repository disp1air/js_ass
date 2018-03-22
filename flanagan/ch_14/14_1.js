/*
* Планирует вызов или вызовы функции f() в будущем.
* Ожидает перед первым вызовом start миллисекунд, затем вызывает f()
* каждые interval миллисекунд и останавливается через start+end миллисекунд.
* Если аргумент interval указан, а аргумент end нет, повторяющиеся вызовы функции f
* никогда не прекратятся. Если отсутствуют оба аргумента, interval и end,
* тогда функция f будет вызвана только один раз, через start миллисекунд.
* Если указан только аргумент f, функция будет вызвана немедленно, как если бы
* в аргументе start было передано число 0. Обратите внимание, что вызов invoke()
* не блокируется: она сразу же возвращает управление.
*/
function invoke(f, start, interval, end) {
    if (!start) start = 0; // По умолчанию через 0 мс
    if (arguments.length <= 2) // Случай однократного вызова
        setTimeout(f, start); // Вызвать 1 раз через start мс.
    else { // Случай многократного вызова
        setTimeout(repeat, start); // Начать вызовы через start мс
        function repeat() { // Планируется на вызов выше
            var h = setInterval(f, interval); // Вызывать f через interval мс.
            // Прекратить вызовы через end мс, если значение end определено
            if (end) setTimeout(function() { clearInterval(h); }, end);
        }
    }
}