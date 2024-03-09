let user = {
    username: "",
    password: ""
};

let countdownValue = 0;
let countdownInterval;

function openWindow1() {
    const window1 = window.open("", "Ventana1", "width=300,height=300,top=0,left=0,background-color=lightgreen");
    window1.document.write(`
    <script src="script.js"></script>
        <form id="userForm">
            Usuario: <input type="text" id="username" required pattern="[a-z]{5}">
            Contraseña: <input type="password" id="password" required pattern="\d{4}">
            Repita Contraseña: <input type="password" id="repeatPassword" required pattern="\d{4}">
            <button type="button" onclick="createUser()">Crear Usuario</button>
            <p id="message"></p>
        </form>
    `);
}

function closeWindow1() {
    const window1 = window.open("", "Ventana1");
    window1.close();
}

function openWindow2() {
    const window2 =  window.open("", "Ventana2", "width=300,height=300,top=0,right=0,background-color=lightblue");
    window2.document.write(`
        <p id="userData">Usuario: ${user.username}<br>Contraseña: ${user.password}</p>
        <button type="button" onclick="deletePassword()">Borrar Contraseña</button>

    `);
}

function closeWindow2() {
    const window2 = window.open("", "Ventana2");
    window2.close();
}

function openWindow3() {
    const window3 = window.open("", "Ventana3", "width=300,height=300,top=50%,left=50%,transform=translate(-50%, -50%),background-color=lightpink");
    const list1Value = document.getElementById("list1").value;
    const list2Value = document.getElementById("list2").value;

    startCountdown(list1Value, window3);

    setTimeout(() => {
        clearInterval(countdownInterval);

        const selectedValues = generateRandomValues(list2Value);
        window3.document.write(`
            <p>Valores pares de la lista2: ${selectedValues.filter(value => value % 2 === 0).join(", ")}</p>
        `);
    }, (list1Value + 1) * 1000);
}

function closeWindow3() {
    const window3 = window.open("", "Ventana3");
    window3.close();
}

function createUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;
    const messageElement = document.getElementById("message");

    if (password !== repeatPassword) {
        messageElement.innerText = "Contraseña incorrecta. Las dos contraseñas deben ser iguales.";
    } else {
        user.username = username;
        user.password = password;
        messageElement.innerText = "Usuario y contraseña creados correctamente.";
    }
}

function deletePassword() {
    const window2 = window.open("", "Ventana2", "width=300,height=300,top=0,right=0,background-color=lightblue");
    const userDataElement = window2.document.getElementById("userData");

    userDataElement.innerText = `Usuario: ${user.username}\nContraseña: ${user.password}`;
    window2.alert("Contraseña borrada correctamente. Debes introducirla de nuevo.");

    setTimeout(() => {
        window2.close();
    }, 5000);
}

function startCountdown(value, targetWindow) {
    countdownValue = value;
    const countdownElement = targetWindow.document.getElementById("countdown");

    countdownInterval = setInterval(() => {
        countdownElement.innerText = countdownValue;
        countdownValue--;

        if (countdownValue < 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

function generateRandomValues(count) {
    const values = [];
    for (let i = 0; i < count; i++) {
        values.push(Math.floor(Math.random() * 100) + 1);
    }
    return values;
}

function closeWindow(name) {
    if (windows[name] && !windows[name].closed) {
        windows[name].close();
    }
}