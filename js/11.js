//!Створення та видалення елементів
//?createElement(): Створює новий елемент.
//*let newElement = document.createElement('div');
//let div = document.createElement('div');
//div.classList.add('active')
//div.textContent='Мій текст'
//div.innerHTML='<b>Текст</b>feerff'
//console.log(div)
const container = document.getElementsByClassName('container')[0]
//container.appendChild(div)
//?appendChild(): Додає елемент як останню дитину іншого елемента.
//*parentElement.appendChild(newElement);



//?removeChild(): Видаляє дочірній елемент з DOM.
//*parentElement.removeChild(childElement);



//?Метод insertAdjacentHTML дозволяє додати HTML-код у конкретне місце в DOM-дереві, не перезаписуючи вміст інших елементів. 
//?Він є зручним і продуктивним способом динамічного додавання HTML-контенту.

//element.insertAdjacentHTML(position, text);
container.insertAdjacentHTML('beforeend', `
    <div>
    Ткстовий елемент 1
    </div>
    <p>Мій параграф</p>
    `)
//*position: Строкове значення, яке вказує, куди саме додати HTML. Можливі значення:
//*"beforebegin": Перед самим елементом.
//*"afterbegin": Внутрішній початок елемента.
//*"beforeend": Внутрішній кінець елемента.
//*"afterend": Після самого елемента.

//*text: Строка, що містить HTML-код, який буде вставлено.

//Метод insertAdjacentHTML є потужним інструментом для динамічного маніпулювання DOM.
//Він забезпечує високу продуктивність і гнучкість, дозволяючи легко додавати нові елементи в різні місця документа.


//Реалізуйте  вивід елементів в дом дерево:
const hardwareStore = [
    { name: "Цемент", price: 100, description: "Високоякісний цемент для будівництва." },
    { name: "Цегла", price: 5, description: "Червона керамічна цегла для будівництва." },
    { name: "Фарба водоемульсійна", price: 200, description: "Біла фарба для внутрішніх робіт." },
    { name: "Шуруповерт", price: 1500, description: "Акумуляторний шуруповерт для домашніх робіт." },
    { name: "Ламінат", price: 300, description: "Ламінат для підлогових покриттів." },
    { name: "Двері вхідні", price: 5000, description: "Металеві вхідні двері з високим ступенем захисту." },
    { name: "Молоток", price: 150, description: "Сталевий молоток з дерев'яною ручкою." },
    { name: "Відро", price: 50, description: "Пластикове відро об'ємом 10 літрів." },
    { name: "Шпатель", price: 30, description: "Шпатель для нанесення шпаклівки." },
    { name: "Кабель електричний", price: 500, description: "Мідний електричний кабель." },
    { name: "Викрутка", price: 100, description: "Набір викруток з магнітними наконечниками." },
    { name: "Циркулярна пила", price: 3000, description: "Електрична циркулярна пила для дерева." },
    { name: "Гіпсокартон", price: 150, description: "Гіпсокартон для стін та стель." },
    { name: "Рулетка", price: 100, description: "Рулетка довжиною 5 метрів." },
    { name: "Клей для плитки", price: 200, description: "Клей для керамічної плитки." },
    { name: "Рівень будівельний", price: 250, description: "Будівельний рівень для точних вимірювань." },
    { name: "Перфоратор", price: 3500, description: "Потужний перфоратор для свердління." },
    { name: "Лобзик", price: 1200, description: "Електричний лобзик для різання дерева та металу." },
    { name: "Плоскогубці", price: 80, description: "Плоскогубці для електромонтажних робіт." },
    { name: "Мотузка", price: 40, description: "Мотузка з натурального волокна." },
    { name: "Шліфувальна машина", price: 2700, description: "Електрична шліфувальна машина для дерева." },
    { name: "Ножівка", price: 500, description: "Ножівка для деревини." },
    { name: "Ключ розвідний", price: 200, description: "Розвідний ключ для сантехнічних робіт." },
    { name: "Піна монтажна", price: 100, description: "Монтажна піна для ізоляції та герметизації." },
    { name: "Рукавички робочі", price: 30, description: "Захисні рукавички для будівельних робіт." },
    { name: "Драбина", price: 700, description: "Алюмінієва драбина з трьома сходинками." },
    { name: "Малярний валик", price: 120, description: "Валик для фарбування стін та стель." },
    { name: "Захисні окуляри", price: 80, description: "Окуляри для захисту очей під час роботи." },
    { name: "Пензлик малярний", price: 50, description: "Малярний пензлик для фарбування." },
    { name: "Анкерний болт", price: 15, description: "Анкерний болт для кріплення важких конструкцій." },
    { name: "Метр складний", price: 60, description: "Дерев'яний складний метр." },
    { name: "Ліхтарик", price: 150, description: "Портативний ліхтарик з LED підсвіткою." },
    { name: "Пилка по металу", price: 250, description: "Пилка для різання металу." },
    { name: "Дюбелі", price: 20, description: "Набір пластикових дюбелів." },
    { name: "Розетка", price: 40, description: "Електрична розетка з заземленням." },
    { name: "Вимикач", price: 35, description: "Подвійний вимикач світла." },
    { name: "Електроди", price: 300, description: "Електроди для зварювальних робіт." },
    { name: "Штроборіз", price: 4000, description: "Електричний штроборіз для нарізання канавок." },
    { name: "Генератор", price: 15000, description: "Бензиновий генератор для аварійного живлення." },
    { name: "Сверло", price: 100, description: "Набір свердел для дриля." },
    { name: "Ковдра", price: 200, description: "Будівельна ковдра для захисту меблів." },
    { name: "Зварювальний апарат", price: 8000, description: "Інверторний зварювальний апарат." },
    { name: "Коронка для свердління", price: 400, description: "Коронка для свердління великих отворів." },
    { name: "Болгарка", price: 3500, description: "Кутова шліфувальна машина." },
    { name: "Тачка будівельна", price: 1800, description: "Будівельна тачка для транспортування матеріалів." },
    { name: "Будівельний міксер", price: 3200, description: "Міксер для перемішування будівельних сумішей." },
    { name: "Паяльник", price: 600, description: "Електричний паяльник для з'єднання металів." },
    { name: "Шпаклівка", price: 100, description: "Шпаклівка для вирівнювання стін." },
    { name: "Болти", price: 50, description: "Набір болтів різного розміру." },
    { name: "Клей ПВА", price: 40, description: "Клей ПВА для різних робіт." },
    { name: "Лампа", price: 200, description: "Лампа настільна з LED освітленням." },
    { name: "Перчатки утеплені", price: 80, description: "Утеплені перчатки для зимових робіт." },
    { name: "Шпильки", price: 20, description: "Набір металевих шпильок." },
    { name: "Фільтр для води", price: 500, description: "Фільтр для очищення питної води." },
    { name: "Штукатурка", price: 150, description: "Штукатурка для внутрішніх робіт." },
    { name: "Решітка вентиляційна", price: 70, description: "Пластикова решітка для вентиляції." },
    { name: "Бур по бетону", price: 300, description: "Бур для свердління бетону." }
];
let arrPages = document.getElementsByClassName('pages')[0]
let pages = Math.floor(hardwareStore.length / 4)
function renderPages(pages) {
    arrPages.innerHTML = '';
    for (let index = 0; index < pages; index++) {
        arrPages.insertAdjacentHTML('beforeend', `
           <span class="new">${index + 1}</span>
            `)


    }
}
renderPages(pages)
let newSpan = Array.from(document.getElementsByClassName('new'))
newSpan.forEach((item, i) => {
    item.addEventListener('click', () => render(hardwareStore, i))
})
function render(arr, page = 0) {
    container.innerHTML = '';
    let minElement = page * 4;
    let maxElement = minElement + 4;
    for (let i = minElement; i < maxElement; i++) {
        container.insertAdjacentHTML('beforeend', `
            <div>
            <h3>${arr[i].name}</h3>
            <p>${arr[i].description}</p>
            <span>${arr[i].price}</span>
            <button class='btn' page =${page}>Переглянути</button>
            </div>
            `)

    }
    let btn = Array.from(document.getElementsByClassName('btn'))
    btn.forEach((e, i) => {
      
        e.addEventListener('click',
            () =>{ 
                let atribute = e.getAttribute('page')
                location.href = `http://127.0.0.1:5500/pages.html?id=${atribute*4+i}`
            })

    }    )
}
//4
render(hardwareStore)

console.log(location.protocol)
console.log(location.search)

