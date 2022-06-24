var img = document.getElementById('imagem')
var msg = document.getElementById('msg')
var sec = document.getElementsByTagName('section')[0]
var hea = document.getElementsByTagName('header')[0]
var dia = new Date()
var horas = dia.getHours()

if(horas >= 0 && horas <12){
    msg.innerHTML = `Olá, bom dia!`
    msg.style.backgroundColor = `yellow`
    sec.style.backgroundColor = `white`
    hea.style.backgroundColor = `orange`
    //img.innerHTML = `<img src='dia.jpg'>`
    img.src = 'dia.jpg'
    document.body.style.backgroundColor = `yellow`
}else if(horas >= 12 && horas < 18){
    msg.innerHTML = `olá, boa tarde!`
    msg.style.backgroundColor = `orange`
    sec.style.backgroundColor = `white`
    //img.innerHTML = `<img src='tarde.jpg'>`
    img.src = 'tarde.jpg'
    document.body.style.backgroundColor = `yellow`
}else{
    msg.innerHTML = `Olá, boa noite`
    hea.style.color = `white`
    msg.style.backgroundColor = `black`
    msg.style.color = `white`
    sec.style.backgroundColor = `white`
    //img.innerHTML = `<img src='noite.jpg'>`
    img.src = 'noite.jpg'
    document.body.style.backgroundColor = `black`
}