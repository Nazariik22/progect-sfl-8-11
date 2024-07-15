console.clear();
//!Змінна та константа
let a = 5
console.log(typeof (a), a)
a = 6
console.log(a)
const a1 = 7
console.log(typeof (a1), a1)
//a1 = 6
//console.log(a1)
//! Типи даних
//? undefind,null,number, string, arr
a = '5'
console.log(typeof (a), a + a)
a = [11, 42, 33, 44, 55]
console.log(typeof (a), a, a[4])
let b
console.log(b)
//! Арифметичні операції
//? + - / % ** * ++ --
a = 6
console.log(a + 2)
console.log(a - 2)
console.log(a * 2)
console.log(a ** 2)
console.log(a / 2)
console.log(a % 5)
a--
console.log(a)
a++
console.log(a)


//* Визнач скільки буде 2 в 5 степені та 2 в 15 степені
//* Обрахуй значення рівняння x^2+2xy+y^2
let x = 4, y = 7


//* Напишіть програму, яка перевіряє, чи число парне чи непарне.
a = 6
console.log(a % 2 == 0)
a % 2 == 0 && console.log("Парне число")
if (a % 2 == 0) {
    console.log("Парне число")
} else {
    console.log("Непарне число")
}
a % 2 == 0 ? console.log("Парне число") : console.log("Непарне число")
//* Створіть програму, яка визначає, чи є введене число додатним, від'ємним чи нулем.
//* Напишіть програму, яка обчислює площу прямокутника за його довжиною і шириною.
//* s = a*b
//* Створіть програму, яка перевіряє, чи є введене число кратним 3 або 5.

////? Alert (Попередження):
////? Використовується для відображення повідомлення користувачу з кнопкою "OK". Наприклад:
////? window.alert("Це попередження!");
////? Prompt (Запит):
////? Використовується для отримання введеного користувачем значення. Він також має кнопки "OK" і "Cancel". Наприклад:
////? let result = window.prompt("Будь ласка, введіть своє ім'я", "Гість");
////? Confirm (Підтвердження):
////? Використовується для підтвердження або скасування дії користувачем. Має кнопки
//alert('Консоль успішно підключено')
//b = prompt("Введіть ваше ім'я")
//console.log(b)
//b = confirm('Чи бажаєте продовжити роботу на сайті?')
//console.log(b )
let login, password;
login = prompt('Введіть ваш логін')
password = prompt('Введіть ваш пароль')
if (login == '1' && password == '1') {
    alert('Ви успішно авторизувалися')
} else{
    window.location='https://www.google.com/'
}