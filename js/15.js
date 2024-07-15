// Простий слайдер
const state = [
    '1.jfif', '2.jpg', '3.jfif', '4.jfif', '5.jpg'
]
const slider1 = {
    slider: document.getElementById('slider'),
    container: document.getElementsByClassName('container')[0],
    button: document.getElementById('button'),
    createButton() {
        let e = state.length;
        console.log(this.button)
        for (let o = 0; o < e; o++) {
            this.button.insertAdjacentHTML('beforeend', `
              <button class='btn'>о</button>  
                `)

        }
        let btns = Array.from(document.getElementsByClassName('btn'));
        console.log(btns[0].style)
        btns.forEach((e, i) => e.addEventListener('click', () => {
            this.container.style.transform = `translateX(-${300 * i}px)`

        }))
    },
    createSliders() {
        state.forEach((e, i) => {
            this.container.insertAdjacentHTML('beforeend', `
                    <img src='./slider/${e}'>
                      `)
        })
    },
    render() {
        this.createSliders()
        this.createButton()
    }
}
//slider1.render()

// Слайдер з кнопками
const slider2 = {
    position: 0,
    container: document.getElementsByClassName('container')[0],
    left: document.getElementById('left'),
    right: document.getElementById('right'),
    createSliders() {
        state.forEach((e, i) => {
            this.container.insertAdjacentHTML('beforeend', `
                <img src='./slider/${e}'>
                  `)
        })
    },
    algoritm(position, l) {
        console.log(position)
        if (l) {
            position != 0 ? this.position-- : '';
            this.container.style.transform = `translateX(${300 * this.position}px)`
            return 0
        }
        position != state.length ? this.position++ : '';
        this.container.style.transform = `translateX(${-300 * this.position}px)`
    },
    render() {
        this.createSliders()
        this.left.addEventListener('click', () => this.algoritm(this.position, 1))
        this.right.addEventListener('click', () => this.algoritm(this.position, 0))
    }
}
//slider2.render()

// Анімований  слайдер
const slider3 = {
    position: 0,
    container: document.getElementsByClassName('container')[0],
    createSliders(e) {
        this.container.innerHTML = `            <img src='./slider/${state[e]}'>
              `
    },
    render() {
        this.createSliders(this.position)
        this.container.addEventListener('click',()=>{
            if(this.position<state.length-1){
                this.position+=1
            }else{
                this.position=0
            }
            console.log(this.position)
            this.createSliders(this.position)
        })
    }
}
slider3.render()