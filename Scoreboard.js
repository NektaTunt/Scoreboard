
let scoreHome = 0

let scoreGuest = 0

let HomeEL = document.getElementById("HomeScore")

let GuestEL = document.getElementById("GuestScore")

function add1Home() {
    scoreHome +=1
    HomeEL.textContent = scoreHome
}


function add2Home() {
    scoreHome +=2
    HomeEL.textContent = scoreHome
}


function add3Home() {
    scoreHome +=3
    HomeEL.textContent = scoreHome
}


function add1Guest() {
    scoreGuest +=1
    GuestEL.textContent = scoreGuest
}


function add2Guest() {
    scoreGuest +=2
    GuestEL.textContent = scoreGuest
}


function add3Guest() {
    scoreGuest +=3
    GuestEL.textContent = scoreGuest
}
