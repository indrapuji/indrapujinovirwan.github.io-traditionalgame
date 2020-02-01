function computerchoice() {
    const cpu = Math.random()
    if (cpu < 0.34) {
        return "gajah"
    } else if (cpu >= 0.34 && cpu < 0.67) {
        return "orang"
    } else {
        return "semut"
    }
}

function hasil(cpu, player) {
    if (player == cpu) {
        return "SERI"
    } else if (player == "gajah") {
        return (cpu == "orang") ? "MENANG" : "KALAH"
    } else if (player == "orang") {
        return (cpu == "gajah") ? "KALAH" : "MENANG"
    } else if (player == "semut") {
        return (cpu == "gajah") ? "MENANG" : "KALAH"
    }
}

const playerPick = document.getElementById('player')

const picGajah = document.querySelector('.picgajah')
picGajah.addEventListener('click', function () {
    playerPick.setAttribute('class', 'gajah')
    playerPick.setAttribute('src' , 'img/gajah.png')
})

const picOrang = document.querySelector('.picorang')
picOrang.addEventListener('click', function () {
    playerPick.setAttribute('class', 'orang')
    playerPick.setAttribute('src', 'img/orang.png')
})

const picSemut = document.querySelector('.picsemut')
picSemut.addEventListener('click', function () {
    playerPick.setAttribute('class', 'semut')
    playerPick.setAttribute('src', 'img/semut.png')
})

const play = document.querySelector('.playgame')
play.addEventListener('click', function () {
    const computerChoice = computerchoice()
    const playerChoice = playerPick.className
    const result = hasil(computerChoice, playerChoice)

    const imgCpu = document.querySelector('.computerchoose')
    imgCpu.setAttribute('src', 'img/' + computerChoice + '.png')

    const display = document.querySelector('.hasil')
    display.innerHTML = result
})