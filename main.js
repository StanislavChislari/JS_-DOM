//задание 1-3
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = "red"; //установка красного фона
    setTimeout(() => {
        document.body.style.backgroundColor = "green";
    }, 3000); //установка зеленого фона после 3 секунд
});
document.getElementById("color-set").addEventListener("click", () => {
    document.body.style.backgroundColor = "orange"; //установка оранжевого фона по нажатию
});
//задание 4 создание автомвтического списка
let i = 1;
function ul_list() {
    setTimeout(function () {
        el = document.createElement("li");
        el.innerHTML = i;
        document.getElementById("automatic__list").appendChild(el);
        i++;
        if (i < 21) {
            ul_list();
        }
    }, 2000);
}
ul_list();

//задание 5 создание счетчика
let count = 0;
let countEl = document.getElementById("count");
function plus() {
    count++;
    countEl.value = count;
    if (count > 9) {
        alert("достигуто максимальное число");
        count--;
    }
    if (count < 10) {
        countEl.value = count;
    }
}
function minus() {
    if (count > 0) {
        count--;
        countEl.value = count;
    }
    if (count < 0) {
        alert("достигуто маинимальное число");
    }
}
//задание 6 шахматной доски
function chess() {
    let table = document.createElement("table");
    let square = true;
    let trr = document.createElement("tr");

    for (let i = 0; i < 8; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 8; j++) {
            if (j == 0) square = !square;

            let td = document.createElement("td");

            td.style.width = "30px";
            td.style.height = "30px";
            if (square) {
                td.style.background = "white";
            } else td.style.background = "gray";

            tr.appendChild(td);
            square = !square;
        }
        table.appendChild(tr);
    }
    table.appendChild(trr);

    document.body.appendChild(table);
}

chess();
