var agora = new Date() // usado para colocar a hora exata do sistema/servidor, Date sempre sera com oD maiusculo
var hora = agora.getHours() //pegar as horas
console.log (`Agora é ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia')
}else if (hora <= 18) {
    console.log('Boa Tarde')
}else {
     console.log('Boa Noite')
}