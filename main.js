let son = +prompt('Введите число');
while (!son) son = +prompt("Ошибка!Заново?");
let daraja = +prompt('Введите степень');
while (!daraja) daraja = +prompt("Xato! Darajani qayta kiriting:");
alert(`${son} sonining ${daraja}-darajasi: ${son ** daraja}`);


