//let  p = document.getElementById('p')
//let pTeg = document.getElementsByTagName('p')[0]
//let menu = document.getElementsByClassName('menu')
//console.log(menu)
//console.log(pTeg)
const btn = document.getElementsByClassName('btn')[0],
close = document.getElementsByClassName('close')[0],
modal = document.getElementsByClassName('modal_container')[0],
chek =  document.getElementsByClassName('chek')[0];
function  modalCheck(info) {
    modal.style.display =info;
}
btn.addEventListener('click',(e)=>modalCheck('flex'))
close.addEventListener('click',(e)=>modalCheck('none'))
chek.addEventListener('click',(e)=>{
    modalCheck('none')
    
    alert('Відправлено!')
})
modal.addEventListener('click',(e)=>e.currentTarget ===e.target && modalCheck('none'))
////!Слухачі подій
//?addEventListener(): Додає слухача подій до елемента.
//let button = document.getElementsByTagName('button')[0];
//button.addEventListener('click', function() {
//    alert('Element clicked!');
//});



//?removeEventListener(): Видаляє слухача подій з елемента.

//!Взаємодія з формами
//?value: Встановлює або отримує значення елемента форми (input, textarea).
//let inputValue = inputElement.value;
//inputElement.value = 'New Value';

// e.preventDefault;
//?submit(): Викликає подію відправки форми.
//formElement.submit();


//?reset(): Скидає форму до її початкового стану.
//formElement.reset();

//!Види подій
//!Події миші (Mouse Events):

//?click: Ця подія виникає, коли користувач клікає на елементі. Вона дозволяє створювати інтерактивні кнопки, посилання та інші елементи.
//const button = document.getElementById('myButton');
//button.addEventListener('click', function() {
//    console.log('Кнопка була клікнута');
//});

//?dblclick: Ця подія виникає, коли користувач подвійно клікає на елементі. Вона часто використовується для виклику дій,
//? які вимагають подвійного кліку, наприклад, подвійне редагування.
//const element = document.getElementById('myElement');
//element.addEventListener('dblclick', function() {
//    console.log('Елемент був подвійно клікнутий');
//});

//?mousemove: Ця подія виникає, коли користувач рухає мишу.
//Вона дозволяє відстежувати рух миші та виконувати дії в залежності від розташування курсору миші.
//document.addEventListener('mousemove', function(event) {
//    console.log('Позиція миші: ' + event.clientX + ', ' + event.clientY);
//});
//?mouseenter та mouseleave: Ці події виникають, коли курсор миші входить у межі елемента (mouseenter) або залишає їх (mouseleave). 
//*Вони корисні для виконання дій при наведенні миші на елемент або покиданні його.
//const element = document.getElementById('myElement');
//element.addEventListener('mouseenter', function() {
//    console.log('Курсор миші в елементі');
//});

//element.addEventListener('mouseleave', function() {
//    console.log('Курсор миші покинув елемент');
//});

//?wheel: Ця подія виникає, коли користувач прокручує колесо миші. 
//?Вона може бути використана для відстежування прокручування сторінки або виконання дій в залежності від напрямку прокрутки.
//document.addEventListener('wheel', function(event) {
//    console.log('Прокручено колесо миші на ' + event.deltaY + ' пікселів');
//});



//!Події фокусу (Focus Events):
//?focus: Ця подія виникає, коли елемент отримує фокус. 
//*Вона часто використовується для відображення додаткової інформації або активування певних функцій.
//const input = document.getElementById('myInput');


//?blur: Ця подія виникає, коли елемент втрачає фокус. 
//*Вона корисна для виконання дій, коли користувач закінчує взаємодію з певним елементом.
//const input = document.getElementById('myInput');
let  title = document.getElementsByTagName('title')[0]
window.addEventListener("focus",()=>{
    title.textContent='Вітаємо на сайті'
})
window.addEventListener("blur",()=>{
    title.textContent='Скоріше повертайтеся до нас'
})


//!Події завантаження (Load Events):

//?load: Ця подія виникає, коли завантажується вміст сторінки або об'єкт. 
//*?Вона часто використовується для виконання дій після повного завантаження сторінки.


//!Події форм (Form Events):

//?submit: Ця подія виникає, коли користувач надсилає форму. 
//*Вона дозволяє перевіряти введені дані перед їх відправленням на сервер.
//const form = document.getElementById('myForm');
//form.addEventListener('submit', function(event) {
//    event.preventDefault(); // Зупиняємо стандартну поведінку форми
//    console.log('Форма була надіслана');

//});
//?input: Ця подія виникає, коли змінюється значення поля вводу. Вона корисна для відслідковування змін введених користувачем даних.
//const input = document.getElementById('myInput');
//input.addEventListener('input', function(event) {
//    console.log('Значення поля вводу змінилося: ' + event.target.value);
//});


//!Події часу (Time Events) у JavaScript дозволяють виконувати код певним чином у визначені моменти часу або періодично. 

//?setTimeout:
//*Цей метод викликає функцію один раз через певний час, вказаний у мілісекундах.
//setTimeout(function() {
//    console.log('Ця функція викликана після 3 секунд');
//}, 3000); // 3000 мілісекунд (3 секунди)
//let counter = 0
//setTimeout(()=> {
//    counter +=1;
//    console.log(counter);
//}, 3000);
//?setInterval:
//*Цей метод викликає функцію періодично через певний проміжок часу, вказаний у мілісекундах.
//const intervalId = setInterval(()=> {
//    counter+=1
//    console.log(counter);
    
//}, 2000); // 2000 мілісекунд (2 секунди)



//! Розробіть модальне вікно за зразком



//? На домашнє створіть власне модальше вікно з можливістю зчитувати дані в об'єкт
let person ={
    name:"",
    password:""
}
console.log(person)