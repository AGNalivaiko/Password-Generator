const upperCase = 'zyxwvutsrqponmlkjihgfedcba';
const lowerCase = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
const symbols = '!@#$%^&*()_-+=|/?.><,';
const numbers = '0123456789';
const length = 12; // Задаем длину нашего пароля (может быть любое число) //

const allChar = upperCase + lowerCase + symbols + numbers; 

// Генерация пароля//
document.querySelector('button').addEventListener('click', () => {
    let password = '';
    while (password.length <= length) {
        password += allChar[Math.ceil(Math.random() * allChar.length)];
        }
    document.querySelector('input').value = password; 
});

// Генерация пароля на клавиши Enter и Space // 
document.addEventListener('keydown', (even) => {
    if (even.key == 'Enter' || even.key == "Space") {
        document.querySelector('input').value = password;
    }
})

// Копирование пароля в буфер обмена //
function copyPassword() {
    navigator.clipboard.writeText(document.querySelector('input').value);
    }

    