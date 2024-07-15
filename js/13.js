//!Взаємодія з API через fetch у JavaScript є одним з найпоширеніших способів виконання асинхронних HTTP запитів. 
//!Метод fetch забезпечує сучасний, проміс-базований підхід для взаємодії з ресурсами через мережу. 
//200
//300 
// 400 -> 401,403, 404
// 500
//?Метод fetch повертає об'єкт Promise, який вирішується в об'єкт Response, що представляє відповідь на запит. 
async function dogs() {
    let url = 'https://dog.ceo/api/breeds/image/random'
    await fetch(url, {
        method: "GET"
    }).then(res => res.json())
        .then(res => console.log(res))
}
//dogs()
//fetch(url, options)
//  .then(response => {
//    // обробка відповіді
//  })
//  .catch(error => {
//    // обробка помилки
//  });


//*url – URL ресурсу, до якого виконується запит.
//*options (необов'язковий) – об'єкт налаштувань, що визначає метод запиту, заголовки та інші параметри.


//?GET

//fetch('URL')
//  .then(response =>response.json())
//  .then(data => console.log(data))
//  .catch(error => console.error('Fetch error:', error));


//?POST

//fetch('URL', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify({ name: 'John', age: 30 })
//  })
//  .then(response =>  response.json())
//  .then(data => console.log(data))
//  .catch(error => console.error('Fetch error:', error));


//? PUT

//fetch('https://api.example.com/update/1', {
//    method: 'PUT',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify({ name: 'John', age: 31 })
//  })
//  .then(response => response.json())
//  .then(data => console.log(data))
//  .catch(error => console.error('Fetch error:', error));

//? DELETE
//fetch('https://api.example.com/delete/1', {
//    method: 'DELETE'
//  })
//  .then(response =>  response.json())
//  .then(data => console.log(data))
//  .catch(error => console.error('Fetch error:', error));


//?Відправка форм
//*Можна використовувати FormData для відправки даних форм.
//const formData = new FormData();
//formData.append('username', 'JohnDoe');
//formData.append('age', 30);

//fetch('https://api.example.com/submit', {
//  method: 'POST',
//  body: formData
//})
//.then(response => response.json())
//.then(data => console.log(data))
//.catch(error => console.error('Fetch error:', error));



//! Проект фотогалерея  https://pixabay.com
const objFoto = {
    key: '42636147-ff91cdc958c5d676be9bae10',
    container: document.getElementsByClassName('container')[0],
    pages: document.getElementsByClassName('pages')[0],
    input: document.getElementById('input'),
    btn: document.getElementById('btn'),
    maxpages: 0,
    img:document.getElementById('img'),
    modal_container:document.getElementsByClassName('modal_container')[0],
    close:document.getElementsByClassName('close')[0],
    getAll(value, p = 0) {
        let url = `https://pixabay.com/api/?key=${this.key}d&q=${value}&image_type=photo&lang=uk&page${p}&per_page=40`
        fetch(url, { method: "GET" }).then(res => res.json())
            .then(res => {
                this.create(res.hits);
                res.total / 40 > 20 ? this.maxpages = 20
                    : this.maxpages = res.total / 40;

                this.createPages();
            })
    },
    createPages() {
        this.pages.innerHTML = ''
        for (let index = 0; index < this.maxpages; index++) {
            this.pages.insertAdjacentHTML('beforeend', `
               <span class=menu>${index}</span> 
                `)
        }
        let menu = Array.from(document.getElementsByClassName('menu'))
        console.log(menu)
        menu.forEach((e, i) => e.addEventListener('click', () => {
            this.getAll(this.input.value, i)
            console.log(1)
        }
        ))
    },
    create(data) {
        this.container.innerHTML = ''
        data.forEach(element =>
            this.container.insertAdjacentHTML('beforeend', `
                <img src=${element.previewURL} alt="" class=img>
                `)

        );
        let img = Array.from(document.getElementsByClassName('img'))
        img.forEach(e => e.addEventListener('click', () => this.modalInfo(e)))
    },
    styleModal(info) {
        this.modal_container.style.display=info;
    },
    modalInfo(e){
        this.img.appendChild(e)
        this.styleModal('flex')
        this.modal_container.addEventListener('click',(e)=>e.target==e.currentTarget &&this.styleModal('none'))
        this.close.addEventListener('click',()=>this.styleModal('none'))

    },
    render() {
        this.btn.addEventListener('click', () => this.getAll(this.input.value))
        console.log(this.modal_container)
    }
}
objFoto.render()
