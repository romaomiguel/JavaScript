const valores = [];

function adicionar(){
    let num = Number(document.getElementById('txtn').value);
    let tab = document.getElementById('tabela');

    if (num == 0 || num > 100 || num == valores.length) {
        alert('Valor é invalido ou já está adicionado na lista')
    }else {
        let n = valores.push(num); //Adicionar na array os valores inseridos no num
        tab.innerHTML = '';
        valores.forEach((valor) => {        //Para cada valor adicionado na array valores
            let item =  document.createElement('option');  //adicione um option 
            item.text = `Valor ${valor} foi adicionado`;   //escreva na option
            tab.appendChild(item) //onde vai ser colocado a option
        });
    }
}

//forEach - Para cada valor; é um loop
//valor é uma variavel

function finalizar() {
    //total de item
    let total = document.getElementById('total') 
    total.innerHTML = (`O total de numeros é ${valores.length}`)

    // maior item
    let maior = document.getElementById('maior')
    maior.innerHTML = (` O maior valor é ${Math.max.apply(null, valores)}`)

    // menor item
    let menor = document.getElementById('menor') 
    menor.innerHTML = (`O menor valor é ${Math.min.apply(null, valores)}`)
    
    //soma dos numeros
    let somaElement = document.getElementById('soma') 
    res = 0
    for(let i = 0; i < valores.length; i++) {
        res += valores[i];
    }
    somaElement.innerHTML = (`O valor da soma é ${res}`)
    
    //media de numeros
    let mediaElement = document.getElementById('media'); 
    let soma = 0;
    
    for(let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    
    const media = soma / valores.length;
    mediaElement.innerHTML = `A média é ${media}`;
}