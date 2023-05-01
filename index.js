let win = prompt("привет, дядя! Как тебя зовут?");

while (win == "" || win == null) {
  win = prompt("Давай говори! флиртую с тобой - не видишь что ли?!?!?!");
}
//while (win == "" || win == null){
  alert("Точно " + win + "??  хочешь быть моим boyfriend-oм? Я с тобой поиграю....");



alert(win + " , я загадала число от 1 до 20. Угадай))");

let number = Math.ceil(Math.random() * 20);
let guess = prompt("Какое число я загадала?");
let numberOfGueses = 0;

while (guess != number) {
    if (guess > number) {
    guess = prompt("перебор"); 
    numberOfGueses = numberOfGueses + 1;
}

if (guess < number) {
    guess = prompt("недобор");
    numberOfGueses = numberOfGueses + 1;
}
}

alert("Ты угадал " + "! Тебе понадобилось " + numberOfGueses + " попыток");
alert("Поздравляю, Байгуш! мы все-таки будем играть")


