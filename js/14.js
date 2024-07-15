//Посилання на АРІ
//?https://openweathermap.org/current
//?https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//273.15
let state = [
    'гроза.jpg', 'дощ.jpg', 'сонячно.png'
]
const objWeather = {
    title: document.getElementById('title'),
    info: document.getElementById('info'),
    input: document.getElementById('input'),
    btn: document.getElementById('btn'),
    img: document.getElementsByClassName('img')[0],
    weatherApi(q) {
        let key = 'd89d802fa6845197d1eedf7667e3dde9';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${key}&lang=uk`
        fetch(url, { method: "GET" }).then(res => res.json())
            .then(res => this.create(res))
    },
    create(res) {
        let temp = res.main.temp - 273.15;
        this.info.innerHTML = `
            <section>
                <div>   
                    <span>Довгота:${res.coord.lon}</span> 
                    <span>Широта:${res.coord.lat}</span>
                </div>
                <span>Сьогодні в ${this.input.value} ${res.weather[0].description} </span>
            </section>
            <h2>Детальніше про погоду в місті:</h2>
            <p>Температура:${temp}</p>
            <p>Вологість:${res.wind.deg}</p>
            <p>Атмосферний тиск:${res.main.pressure}</p> 
            <p>Швидкість вітру:${res.wind.speed}</p>
             <p>Хмарність:${res.clouds.all}%</p>
        `;
        switch (temp) {
            case temp < 0:
                temp = 0
                tempResult()
                break;
            case temp > 0 && temp < 20:
                temp = 1
                tempResult()
                break;
            case temp > 20:
                temp = 2
                tempResult()
                break;
            default:
                break;
        }
       
        function tempResult() {
            this.img.innerHTML=`<img src ="./weather-img/${state[temp]}">`
        }
        
    },
    render() {
        this.btn.addEventListener('click', () => {
            this.title.innerHTML = this.input.value;
            this.weatherApi(this.input.value)
        })
    }
}
objWeather.render()
//{
//    "coord": {
//        "lon": 24.0316,
//        "lat": 49.842
//    },
//    "weather": [
//        {
//            "id": 804,
//            "main": "Clouds",
//            "description": "хмарно",
//            "icon": "04d"
//        }
//    ],
//    "base": "stations",
//    "main": {
//        "temp": 302.07,
//        "feels_like": 303.9,
//        "temp_min": 302.07,
//        "temp_max": 302.07,
//        "pressure": 1014,
//        "humidity": 59,
//        "sea_level": 1014,
//        "grnd_level": 980
//    },
//    "visibility": 10000,
//    "wind": {
//        "speed": 2.67,
//        "deg": 67,
//        "gust": 2.84
//    },
//    "clouds": {
//        "all": 93
//    },
//    "dt": 1721058022,
//    "sys": {
//        "country": "UA",
//        "sunrise": 1721010735,
//        "sunset": 1721068023
//    },
//    "timezone": 10800,
//    "id": 702550,
//    "name": "Lviv",
//    "cod": 200
//}

//*user1 -  d89d802fa6845197d1eedf7667e3dde9
//*user2 -  2d5b6afdfc90bae4dbf6464664decf19
//*user3 -  a7388754b39af2fb454520d0202504d7
//*user4 -  b508d68d0257cafdd9281513d5c6aeba
//*user5 -  1595f67b4bd309a39f5a0f735e93be6d
//*user6 -  5b6ae1c6a42fc33f82da7215a98acb1c
//*user7 -  994bd1ea00c80ae011ab8cb371518e42
//*user8 -  287788bfbe0480c0cd1df690580a7b35
//*user9 -  fdc4aa6a29b724d0fd3fb0b1e08262e1
//*user10 - 58d14d3f0860399bb67f21c132024b64
//*user11 - 72cf4bfdc3f2ed811e46227c2f0ca373
//*user12 - 86dd77c879e2403f3bcf18ea12f6bf97
//*user13 - 3961c5a634731356812d5b60b43e70b3
//*user14 - bded83959e221a6ade99c6ad7a371706
//*user15 - 897862f471f7276f46727cdeebb3f5f1