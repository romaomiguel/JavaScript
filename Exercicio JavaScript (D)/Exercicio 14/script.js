function carregar() {

var msg = document.getElementById('msg') //VARIAVEL PARA PEGAR UM ELEMENTO DO HTML
var img = document.getElementById('imagem')//VARIAVEL PARA PEGAR UM ELEMENTO DO HTML
var data = new Date()//VARIAVEL PARA GUARDA A DATA ATUAL
var min = data.getMinutes() //VARIAVEL QUE GUARDA OS MINUTOS
var hora = data.getHours() //VARIAVEL QUE GUARDA AS GORAS
msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.<br> ` //MOSTRE NA TELA AS HORAS E MINUTOS

if (hora >= 0 && hora < 12) { //SE HORA FOR
    img.src = 'foto-manha.png' //MOSTRE O IMG
    msg.innerHTML += 'Bom dia' //COMPLEMENTE COM A PALAVRA
    document.body.style.background = '#e2cd9f' // MUDE A COR DE FUNDO

}else if (hora >= 12 && hora < 18) { //SE NÃO, SE
    img.src = 'foto-tarde.png' //MOSTRE O IMG
    msg.innerHTML += 'Boa tarde' //COMPLEMENTE COM A PALAVRA
    document.body.style.background = '#b9846f'// MUDE A COR DE FUNDO
    
}else { //SE NÃO
    img.src = 'foto-noite.png'//MOSTRE O IMG
    msg.innerHTML += 'Boa noite' //COMPLEMENTE COM A PALAVRA
    document.body.style.background = '#515154'// MUDE A COR DE FUNDO
}
}
