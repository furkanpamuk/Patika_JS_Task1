
let tarih = document.querySelector(".tarih")

function currentDate(){
    var d = new Date
    var s = d.getSeconds()
    var m = d.getMinutes()
    var h = d.getHours()
    var day = d.getDay()

    if (h<10) {
        h = "0" + h
    }
    if (m<10) {
        m = "0" + m
    }
    if (s<10) {
        s = "0" + s
    }


    switch (day) {
        case 0:
            day = "Pazar";
            break;
        case 1:
            day = "Pazartesi";
            break;      
        case 2:
            day = "Salı";
            break;   
        case 3:
            day = "Çarşamba";
            break;   
        case 4:
            day = "Perşembe";
            break;   
        case 5:
            day = "Cuma";
            break;   
        case 6:
            day = "Cumartesi";
            break;      
    
        default:
            break;
    }

    tarih.innerHTML = `${h}:${m}:${s} ${day}`
}

setInterval(currentDate, 1000)

let userName = prompt("Lütfen isminizi giriniz:")
let firstH2DOM = document.querySelector(".secondHeader1")


firstH2DOM.innerHTML = `Merhaba, ${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()} ! Hoş geldin!
`
let boldSpan = document.querySelector(".boldSpan")
boldSpan.style.fontStyle = "italic" 





