function askForNumber() {
    let lastInput = null;

    for (let i = 0; i < 10; i++) {
        const input = prompt("Введіть число більше 100:");

        if (input === null || input.trim() === "" ){
            console.log("Користувач скасував введення.");
            return
        }


const number = Number(input);

    if (isNaN(number)) {

        alert("Це не число. Спробуйте ще раз!");
        continue;

    }

    lastInput = number;

    if (number > 100) {
        console.log(`Ви ввели число більше 100. ${number}`);
        return;
    }

    alert("Число повинно бути більше 100. Спробуйте ще раз!");

 }

console.log(`Цикл завершено. Останнє введене число: ${lastInput}`);

}

askForNumber();
















