document.getElementById("consoleLog").onclick = function(event) {
    alert('conole.log нужен для вывода информации в консоль');
}
document.getElementById("alertExample").onclick = function(event) {
    alert('Выводит модальное окно с сообщением. Посетитель не сможет продолжить работу, пока не нажмет на кнопку "ОК" в модальном окне.');
}
document.getElementById("promptExample").onclick = function(event) {
    alert('Выводит сообщение в окне с текстовым полем и двумя кнопками: \"ОК\" и \"ОТМЕНА\".Возвращает введенное значение или null, если посетитель нажал на кнопку \"ОТМЕНА\".');
}