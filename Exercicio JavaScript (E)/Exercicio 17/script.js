function verificar () { //DINAMICA DE VERIFICADOR DE IMAGENS, USO DE IMAGENS
    var data = new Date() //DATA ATUAL
    var ano = data.getFullYear() //VARIAVEL PARA GUARDA A DATA ATUAL
    var fano = document.getElementById('txtano') //VARIAVEL PARA PEGAR UM ELEMENTO DO HTML
    var res = document.querySelector('div#res') // VARIAVEL PARA PEGAR UM ELEMENTO DO HTML

    if (fano.value.length == 0 || fano.value > ano) { // SE ANO FOR 0 OU MAIOR QUE O ANO ATUAL
        window.alert('[ERRO] Verifique os dados e tente novamente!') // APAREÇA O ERROR
        
    } else { //SE NÃO
        var fsex = document.getElementsByName('radsex') //VARIAVEL PARA PEGAR UM ELEMENTO DO HTML
        var idade = ano - Number(fano.value) //CALCULO DE IDADE
        var genero = '' //ELEMENTO DE GENERO QUE COMEÇA SENDO NULO, SÓ VAI TER VALOR APOS O CHECKED
        var img = document.createElement('img') //VARIAVEL PARA PEGAR UM ELEMENTO DO HTML
        img.setAttribute('id', 'foto') //ELEMENTO PARA ATRIBUIR UM ATRIBUTO, COMO O 'ID', TENDO O NOME 'FOTO'

        if (fsex[0].checked) { //SE SEXO 0 - MASCULINO - FOR CHECKED
            genero = 'Homem' //GENERO VAI CONTER HOMEN

            if (idade >= 0 && idade < 12) {  //SE IDADE FOR
                img.setAttribute('src', 'homem-novo.png') //MOSTRE A FOTO

            }else if (idade < 21){//SE IDADE FOR
                img.setAttribute('src', 'homem-jovem.png')//MOSTRE A FOTO

            }else if (idade < 50) {//SE IDADE FOR
                img.setAttribute('src', 'homen-adulto.png')//MOSTRE A FOTO

            }else {//SE IDADE FOR
                img.setAttribute('src', 'homen-velho.png')//MOSTRE A FOTO
            }

        }else if (fsex[1].checked) {//SE SEXO 1 - FEMININO - FOR CHECKED
            genero = 'Mulher'//GENERO VAI CONTER HOMEN

            if (idade >= 0 && idade < 12) {//SE IDADE FOR
                img.setAttribute('src', 'mulher-nova.png')//MOSTRE A FOTO

            }else if (idade < 21){//SE IDADE FOR
                img.setAttribute('src', 'mulher-jovem.png')//MOSTRE A FOTO

            }else if (idade < 50) {//SE IDADE FOR
                img.setAttribute('src', 'mulher-adulta.png')//MOSTRE A FOTO
                
            }else {//SE IDADE FOR
                img.setAttribute('src', 'mulher-velha.png')//MOSTRE A FOTO
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` //MOSTRE A MENSAGEM SE OS PASSOS DE TRAS FOREM CERTOS
        res.appendChild(img) // MOSTRE A MENSAGEM
    }

}