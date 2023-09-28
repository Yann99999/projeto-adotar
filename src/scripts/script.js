let open = document.getElementById('open-menu')
let close = document.getElementById('close-menu')
let menuMobile = document.getElementById('menu-mobile')

open.onclick = function () {
    menuMobile.style.right = 0
}
close.onclick = function () {
    menuMobile.style.right = '-320px'
}

let comunityList = document.getElementsByClassName("comunity-list")
let box = document.getElementsByClassName("box")

for (let i = 0; i < comunityList.length; i++) {
    comunityList[i].onclick = function () {
        for (let j = 0; j < comunityList.length; j++) {
            comunityList[j].classList.remove('selected')
            box[j].style.display = 'none'
        }
        this.classList.add('selected')
        box[i].style.display = 'block'
        box[i].classList.add('selected')
    }
}

let year = new Date().getFullYear()
document.getElementById('date').innerHTML = year

document.getElementById('list-mobile').onclick = function () {
    menuMobile.style.right = '-320px'
}


let form = document.getElementById("form")

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let inputs = document.getElementsByClassName("input-form")
    let hasEmpty = 0
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            hasEmpty++
        }
    }
    if (hasEmpty > 0)
        alert('Preencha todos os campos')
    else
        alert('Mensagem enviada com sucesso!')
})


const pets = [
    {
        'pet-name': 'Thor',
        'pet-desc': 'Brincalhão, bagunceiro e carinhoso',
        'pet-img': 'assets/imgs/pet1.jpg'
    },
    {
        'pet-name': 'Bob',
        'pet-desc': 'Guloso, preguiçoso e amoroso',
        'pet-img': 'assets/imgs/pet2.jpeg'
    },
    {
        'pet-name': 'Mel',
        'pet-desc': 'Mimada, glamurosa e princesa',
        'pet-img': 'assets/imgs/pet3.jpg'
    },
    {
        'pet-name': 'Sol',
        'pet-desc': 'Dorminhoca, alegre e brincalhona',
        'pet-img': 'assets/imgs/pet4.webp'
    }
]

document.getElementById('pet-name').innerHTML = pets[0]["pet-name"]
document.getElementById('pet-desc').innerHTML = pets[0]["pet-desc"]
document.getElementById('pet-img').src = pets[0]["pet-img"]


let prev = document.getElementById('prev')
let next = document.getElementById('next')

let currentPet = 0

next.onclick = function () {
    if(currentPet == pets.length - 1)
        var nextPet = 0
    else
        var nextPet = currentPet + 1

    document.getElementById('pet-name').innerHTML = pets[nextPet]["pet-name"]
    document.getElementById('pet-desc').innerHTML = pets[nextPet]["pet-desc"]
    document.getElementById('pet-img').src = pets[nextPet]["pet-img"]
    currentPet = nextPet
}
prev.onclick = function () {
    if(currentPet == 0)
        var prevPet = pets.length - 1
    else
        var prevPet = currentPet - 1

    document.getElementById('pet-name').innerHTML = pets[prevPet]["pet-name"]
    document.getElementById('pet-desc').innerHTML = pets[prevPet]["pet-desc"]
    document.getElementById('pet-img').src = pets[prevPet]["pet-img"]
    currentPet = prevPet
}